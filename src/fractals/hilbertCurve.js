const { Rotations, Modes, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class HilbertCurve {

    CONFIG = {
        MIN_N: 1,
        MAX_PREVIEW_N: 7,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT, Rotations.FLIP ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        if (n < 1) {
            return 0;
        }
        return Math.pow(2, n + 1) - 1;
    }

    getHeight(n) {
        if (n < 1) {
            return 0;
        }
        return Math.pow(2, n);
    }

    _drawStandard(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let topY = pos.y + (size > 1 ? Math.floor((height * 3) / 4) - 1 : 1);
        let bottomY = pos.y + (size > 1 ? Math.floor(height / 4) - 1 : 0);
        let leftX = pos.x + Math.floor(width / 4);
        let rightX = pos.x + Math.floor(3 * width / 4);
        board[topY][leftX] = '┌';
        board[topY][rightX] = '┐';

        for (let i = leftX + 1; i < rightX; i++) {
            board[topY][i] = '─';
        }
        for (let i = bottomY + 1; i < topY; i++) {
            board[i][leftX] = '│';
            board[i][rightX] = '│';
        }
        if (params && params.end1 === 'left') {
            board[bottomY][leftX] = '┘';
            for (let i = pos.x; i < leftX; i++) {
                board[bottomY][i] = '─';
            }
        }
        if (params && params.end1 === 'down') {
            board[bottomY][leftX] = '│';
            if (!params.small) {
                for (let i = pos.y; i < bottomY; i++) {
                    board[i][leftX] = '│';
                }
            }
        }
        if (params && params.end2 === 'down') {
            board[bottomY][rightX] = '│';
            if (!params.small) {
                for (let i = pos.y; i < bottomY; i++) {
                    board[i][rightX] = '│';
                }
            }
        }
        if (params && params.end2 === 'right') {
            board[bottomY][rightX] = '└';
            for (let i = rightX + 1; i < pos.x + width; i++) {
                board[bottomY][i] = '─';
            }
            if (pos.x + width < board[pos.y].length) {
                board[bottomY][pos.x + width] = '─';
            }
        }
    }

    _drawFlip(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let topY = pos.y + (size > 1 ? Math.floor((height * 3) / 4) - 1 : 1);
        let bottomY = pos.y + (size > 1 ? Math.floor(height / 4) - 1 : 0);
        let leftX = pos.x + Math.floor(width / 4);
        let rightX = pos.x + Math.floor(3 * width / 4);
        board[bottomY][leftX] = '└';
        board[bottomY][rightX] = '┘';
        for (let i = leftX + 1; i < rightX; i++) {
            board[bottomY][i] = '─';
        }
        for (let i = bottomY + 1; i < topY; i++) {
            board[i][leftX] = '│';
            board[i][rightX] = '│';
        }
        if (params && params.end1 === 'left') {
            board[topY][leftX] = '┐';
            for (let i = pos.x; i < leftX; i++) {
                board[topY][i] = '─';
            }
        }
        if (params && params.end1 === 'up') {
            board[topY][leftX] = '│';
            if (!params.small) {
                for (let i = topY + 1; i < pos.y + height; i++) {
                    board[i][leftX] = '│';
                }
            }
        }
        if (params && params.end2 === 'up') {
            board[topY][rightX] = '│';
            if (!params.small) {
                for (let i = topY + 1; i < pos.y + height; i++) {
                    board[i][rightX] = '│';
                }
            }
        }
        if (params && params.end2 === 'right') {
            board[topY][rightX] = '┌';
            for (let i = rightX + 1; i < pos.x + width; i++) {
                board[topY][i] = '─';
            }
            if (pos.x + width < board[pos.y].length) {
                board[topY][pos.x + width] = '─';
            }
        }
    }

    _drawLeft(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let topY = pos.y + (size > 1 ? Math.floor((height * 3) / 4) - 1 : 1);
        let bottomY = pos.y + (size > 1 ? Math.floor(height / 4) - 1 : 0);
        let leftX = pos.x + Math.floor(width / 4);
        let rightX = pos.x + Math.floor(3 * width / 4);
        board[topY][leftX] = '┌';
        board[bottomY][leftX] = '└';
        for (let i = bottomY + 1; i < topY; i++) {
            board[i][leftX] = '│';
        }
        for (let i = leftX + 1; i < rightX; i++) {
            board[topY][i] = '─';
            board[bottomY][i] = '─';
        }
        if (params && params.end1 === 'right') {
            board[topY][rightX] = '─';
            if (!params.small) {
                for (let i = rightX + 1; i < pos.x + width; i++) {
                    board[topY][i] = '─';
                }
            if (pos.x + width < board[pos.y].length) {
                board[topY][pos.x + width] = '─';
            }
        }
        }
        if (params && params.end1 === 'up') {
            board[topY][rightX] = '┘';
            for (let i = topY + 1; i < pos.y + height; i++) {
                board[i][rightX] = '│';
            }
        }
        if (params && params.end2 === 'down') {
            board[bottomY][rightX] = '┐';
            for (let i = pos.y; i < bottomY; i++) {
                board[i][rightX] = '│';
            }
        }
        if (params && params.end2 === 'right') {
            board[bottomY][rightX] = '─';
            if (!params.small) {
                for (let i = rightX + 1; i < pos.x + width; i++) {
                    board[bottomY][i] = '─';
                }
                if (pos.x + width < board[pos.y].length) {
                    board[bottomY][pos.x + width] = '─';
                }
            }
        }
    }

    _drawRight(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let topY = pos.y + (size > 1 ? Math.floor((height * 3) / 4) - 1 : 1);
        let bottomY = pos.y + (size > 1 ? Math.floor(height / 4) - 1 : 0);
        let leftX = pos.x + Math.floor(width / 4);
        let rightX = pos.x + Math.floor(3 * width / 4);
        board[topY][rightX] = '┐';
        board[bottomY][rightX] = '┘';
        for (let i = bottomY + 1; i < topY; i++) {
            board[i][rightX] = '│';
        }
        for (let i = leftX + 1; i < rightX; i++) {
            board[topY][i] = '─';
            board[bottomY][i] = '─';
        }
        if (params && params.end1 === 'left') {
            board[topY][leftX] = '─';
            if (!params.small) {
                for (let i = pos.x; i < leftX; i++) {
                    board[topY][i] = '─';
                }
            }
        }
        if (params && params.end1 === 'up') {
            board[topY][leftX] = '└';
            for (let i = topY + 1; i < pos.y + height; i++) {
                board[i][leftX] = '│';
            }
        }
        if (params && params.end2 === 'down') {
            board[bottomY][leftX] = '┌';
            for (let i = pos.y; i < bottomY; i++) {
                board[i][leftX] = '│';
            }
        }
        if (params && params.end2 === 'left') {
            board[bottomY][leftX] = '─';
            if (!params.small) {
                for (let i = pos.x; i < leftX; i++) {
                    board[bottomY][i] = '─';
                }
            }
        }
    }

    _drawCurve(board, pos, size, rotation, params) {
        if (rotation === Rotations.STANDARD) {
            this._drawStandard(board, pos, size, params);
        } else if (rotation === Rotations.LEFT) {
            this._drawLeft(board, pos, size, params);
        } else if (rotation === Rotations.FLIP) {
            this._drawFlip(board, pos, size, params);
        } else if (rotation === Rotations.RIGHT) {
            this._drawRight(board, pos, size, params);
        }
    }

    _hilbert(n, size, board, pos, rotation, params) {
        if (n <= 1) {
            this._drawCurve(board, pos, size, rotation, params);
        } else {
            if (rotation === Rotations.STANDARD) {
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, Rotations.STANDARD, { end1: 'down', end2: 'right' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, Rotations.STANDARD, { end1: 'left', end2: 'down' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y }, Rotations.RIGHT, { end1: 'up', end2: params.end1 });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, Rotations.LEFT, { end1: 'up', end2: params.end2 });
            } else if (rotation === Rotations.LEFT) {
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, Rotations.LEFT, { end1: 'right', end2: 'down' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, Rotations.FLIP, { end1: 'left', end2: params.end1 });
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y }, Rotations.LEFT, { end1: 'up', end2: 'right' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, Rotations.STANDARD, { end1: 'left', end2: params.end2 });
            } else if (rotation === Rotations.FLIP) {
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, Rotations.RIGHT, { end1: params.end1, end2: 'down' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, Rotations.LEFT, { end1: params.end2, end2: 'down' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y }, Rotations.FLIP, { end1: 'up', end2: 'right' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, Rotations.FLIP, { end1: 'left', end2: 'up' });
            } else if (rotation === Rotations.RIGHT) {
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, Rotations.FLIP, { end1: params.end1, end2: 'right' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, Rotations.RIGHT, { end1: 'left', end2: 'down' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x, y: pos.y }, Rotations.STANDARD, { end1: params.end2, end2: 'right' });
                this._hilbert(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, Rotations.RIGHT, { end1: 'up', end2: 'left' });
            }
        }
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }
        
        let step = n;
        if (config && config.step !== undefined && config.step >= this.CONFIG.MIN_N && config.step <= n) {
            step = config.step;
        }

        let mode = this.CONFIG.MODES[0];
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));


        let params = {};
        if (rotation === Rotations.FLIP) {
            params = step === 1 ? { end1: 'up', end2: 'up', small: true } : { end1: 'left', end2: 'right' };
        } else if (rotation === Rotations.LEFT) {
            params = step === 1 ? { end1: 'right', end2: 'right', small: true } : { end1: 'up', end2: 'down' };
        } else if (rotation === Rotations.RIGHT) {
            params = step === 1 ? { end1: 'left', end2: 'left', small: true } : { end1: 'up', end2: 'down' };
        } else {
            params = step === 1 ? { end1: 'down', end2: 'down', small: true } : { end1: 'left', end2: 'right' };
        }

        this._hilbert(step, n, board, { x: 0, y: 0 }, rotation, params);
        return board.reverse();
    }

}

module.exports = {
    HilbertCurve: HilbertCurve,
};