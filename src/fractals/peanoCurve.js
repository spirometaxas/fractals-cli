const { Rotations, Modes, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class PeanoCurve {

    CONFIG = {
        MIN_N: 1,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                INVERSE: true,
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
        return (6 * Math.pow(3, n - 1)) - 1;
    }

    getHeight(n) {
        if (n < 1) {
            return 0;
        }
        return Math.pow(3, n);
    }

    _drawStandard(board, pos, size, params) {
        let width = this.getWidth(size);
         let height = this.getHeight(size);
        let leftX = pos.x + parseInt(width / 6);
        let midX = pos.x + parseInt((width / 6) * 3);
        let rightX = pos.x + parseInt((width / 6) * 5);
        let bottomY = pos.y + parseInt(height / 6);
        let topY = pos.y + parseInt((height / 6) * 5);
        board[topY][leftX] = '┌';
        board[topY][midX] = '┐';
        board[bottomY][midX] = '└';
        board[bottomY][rightX] = '┘';
        for (let i = bottomY + 1; i < topY; i++) {
            board[i][leftX] = '│';
            board[i][midX] = '│';
            board[i][rightX] = '│';
        }
        for (let i = leftX + 1; i < midX; i++) {
            board[topY][i] = '─';
        }
        for (let i = midX + 1; i < rightX; i++) {
            board[bottomY][i] = '─';
        }

        if (params && params.end1 === 'left') {
            board[bottomY][leftX] = '┘';
            for (let i = pos.x; i < leftX; i++) {
                board[bottomY][i] = '─';
            }
        }
        if (params && params.end1 === 'down') {
            board[bottomY][leftX] = '│';
            for (let i = pos.y; i <= bottomY; i++) {
                board[i][leftX] = '│';
            }
        }
        if (params && params.end2 === 'right') {
            board[topY][rightX] = '┌';
            for (let i = rightX + 1; i < pos.x + width; i++) {
                board[topY][i] = '─';
            }
            if (board[topY][pos.x + width]) {
                board[topY][pos.x + width] = '─';
            }
        }
        if (params && params.end2 === 'up') {
            board[topY][rightX] = '│';
            for (let i = topY; i < pos.y + height; i++) {
                board[i][rightX] = '│';
            }
        }
    }

    _drawFlip(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let leftX = pos.x + parseInt(width / 6);
        let midX = pos.x + parseInt((width / 6) * 3);
        let rightX = pos.x + parseInt((width / 6) * 5);
        let bottomY = pos.y + parseInt(height / 6);
        let topY = pos.y + parseInt((height / 6) * 5);
        board[bottomY][leftX] = '└';
        board[bottomY][midX] = '┘';
        board[topY][midX] = '┌';
        board[topY][rightX] = '┐';
        for (let i = bottomY + 1; i < topY; i++) {
            board[i][leftX] = '│';
            board[i][midX] = '│';
            board[i][rightX] = '│';
        }
        for (let i = leftX + 1; i < midX; i++) {
            board[bottomY][i] = '─';
        }
        for (let i = midX + 1; i < rightX; i++) {
            board[topY][i] = '─';
        }

        if (params && params.end1 === 'left') {
            board[topY][leftX] = '┐';
            for (let i = pos.x; i < leftX; i++) {
                board[topY][i] = '─';
            }
        }
        if (params && params.end1 === 'up') {
            board[topY][leftX] = '│';
            for (let i = topY + 1; i < pos.y + height; i++) {
                board[i][leftX] = '│';
            }
        }
        if (params && params.end2 === 'right') {
            board[bottomY][rightX] = '└';
            for (let i = rightX + 1; i < pos.x + width; i++) {
                board[bottomY][i] = '─';
            }
            if (board[bottomY][pos.x + width]) {
                board[bottomY][pos.x + width] = '─';
            }
        }
        if (params && params.end2 === 'down') {
            board[bottomY][rightX] = '│';
            for (let i = pos.y; i < topY; i++) {
                board[i][rightX] = '│';
            }
        }
    }

    _drawCurveSF(board, pos, size, standard, params) {
        if (standard) {
            this._drawStandard(board, pos, size, params);
        } else {
            this._drawFlip(board, pos, size, params);
        }
    }

    _drawLeft(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let leftX = pos.x + parseInt(width / 6);
        let rightX = pos.x + parseInt((width / 6) * 5);
        let bottomY = pos.y + parseInt(height / 6);
        let midY = pos.y + parseInt((height / 6) * 3);
        let topY = pos.y + parseInt((height / 6) * 5);
        board[topY][rightX] = '┐';
        board[midY][rightX] = '┘';
        board[midY][leftX] = '┌';
        board[bottomY][leftX] = '└';
        for (let i = leftX + 1; i < rightX; i++) {
            board[bottomY][i] = '─';
            board[midY][i] = '─';
            board[topY][i] = '─';
        }
        for (let i = midY + 1; i < topY; i++) {
            board[i][rightX] = '│';
        }
        for (let i = bottomY + 1; i < midY; i++) {
            board[i][leftX] = '│';
        }

        if (params && params.end1 === 'left') {
            board[topY][leftX] = '─';
            for (let i = pos.x; i < leftX; i++) {
                board[topY][i] = '─';
            }
        }
        if (params && params.end1 === 'up') {
            board[topY][leftX] = '└';
            for (let i = topY + 1; i < pos.y + height; i++) {
                board[i][leftX] = '│';
            }
        }
        if (params && params.end2 === 'right') {
            board[bottomY][rightX] = '─';
            for (let i = rightX + 1; i < pos.x + width; i++) {
                board[bottomY][i] = '─';
            }
            if (board[bottomY][pos.x + width]) {
                board[bottomY][pos.x + width] = '─';
            }
        }
        if (params && params.end2 === 'down') {
            board[bottomY][rightX] = '┐';
            for (let i = pos.y; i < bottomY; i++) {
                board[i][rightX] = '│';
            }
        }
    }

    _drawRight(board, pos, size, params) {
        let width = this.getWidth(size);
        let height = this.getHeight(size);
        let leftX = pos.x + parseInt(width / 6);
        let rightX = pos.x + parseInt((width / 6) * 5);
        let bottomY = pos.y + parseInt(height / 6);
        let midY = pos.y + parseInt((height / 6) * 3);
        let topY = pos.y + parseInt((height / 6) * 5);
        board[topY][leftX] = '┌';
        board[midY][leftX] = '└';
        board[midY][rightX] = '┐';
        board[bottomY][rightX] = '┘';
        for (let i = leftX + 1; i < rightX; i++) {
            board[bottomY][i] = '─';
            board[midY][i] = '─';
            board[topY][i] = '─';
        }
        for (let i = midY + 1; i < topY; i++) {
            board[i][leftX] = '│';
        }
        for (let i = bottomY + 1; i < midY; i++) {
            board[i][rightX] = '│';
        }

        if (params && params.end1 === 'left') {
            board[bottomY][leftX] = '─';
            for (let i = pos.x; i < leftX; i++) {
                board[bottomY][i] = '─';
            }
        }
        if (params && params.end1 === 'down') {
            board[bottomY][leftX] = '┌';
            for (let i = pos.y; i < bottomY; i++) {
                board[i][leftX] = '│';
            }
        }
        if (params && params.end2 === 'right') {
            board[topY][rightX] = '─';
            for (let i = rightX + 1; i < pos.x + width; i++) {
                board[topY][i] = '─';
            }
            if (board[topY][pos.x + width]) {
                board[topY][pos.x + width] = '─';
            }
        }
        if (params && params.end2 === 'up') {
            board[topY][rightX] = '┘';
            for (let i = topY + 1; i < pos.y + height; i++) {
                board[i][rightX] = '│';
            }
        }
    }

    _drawCurveLR(board, pos, size, standard, params) {
        if (standard) {
            this._drawLeft(board, pos, size, params);
        } else {
            this._drawRight(board, pos, size, params);
        }
    }

    _peanoSF(n, size, board, pos, standard, params) {
        if (n <= 1) {
            this._drawCurveSF(board, pos, size, standard, params);
        } else {
            if (standard) {
                this._peanoSF(n - 1, size - 1, board, { x: pos.x, y: pos.y }, true, { end1: params.end1, end2: 'up' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, false, { end1: 'up', end2: 'down' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x, y: pos.y + (2 * this.getHeight(size - 1)) }, true, { end1: 'down', end2: 'right' });

                this._peanoSF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + (2 * this.getHeight(size - 1)) }, false, { end1: 'left', end2: 'down' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, true, { end1: 'down', end2: 'up' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, false, { end1: 'up', end2: 'right' });

                this._peanoSF(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y }, true, { end1: 'left', end2: 'up' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + this.getHeight(size - 1) }, false, { end1: 'up', end2: 'down' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + (2 * this.getHeight(size - 1)) }, true, { end1: 'down', end2: params.end2 });
        } else {
                this._peanoSF(n - 1, size - 1, board, { x: pos.x, y: pos.y + (2 * this.getHeight(size - 1)) }, false, { end1: params.end1, end2: 'down' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, true, { end1: 'down', end2: 'up' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x, y: pos.y }, false, { end1: 'up', end2: 'right' });

                this._peanoSF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, true, { end1: 'left', end2: 'up' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, false, { end1: 'up', end2: 'down' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + (2 * this.getHeight(size - 1)) }, true, { end1: 'down', end2: 'right' });

                this._peanoSF(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + (2 * this.getHeight(size - 1)) }, false, { end1: 'left', end2: 'down' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + this.getHeight(size - 1) }, true, { end1: 'down', end2: 'up' });
                this._peanoSF(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y }, false, { end1: 'up', end2: params.end2 });
            }
        }
    }

    _peanoLR(n, size, board, pos, standard, params) {
        if (n <= 1) {
            this._drawCurveLR(board, pos, size, standard, params);
        } else {
            if (standard) {
                this._peanoLR(n - 1, size - 1, board, { x: pos.x, y: pos.y + (2 * this.getHeight(size - 1)) }, true, { end1: params.end1, end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + (2 * this.getHeight(size - 1)) }, false, { end1: 'left', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + (2 * this.getHeight(size - 1)) }, true, { end1: 'left', end2: 'down' });

                this._peanoLR(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + this.getHeight(size - 1) }, false, { end1: 'left', end2: 'up' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, true, { end1: 'left', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, false, { end1: 'down', end2: 'right' });

                this._peanoLR(n - 1, size - 1, board, { x: pos.x, y: pos.y }, true, { end1: 'up', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, false, { end1: 'left', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + (2 *this. getWidth(size - 1)) + 2, y: pos.y }, true, { end1: 'left', end2: params.end2 });
            } else {
                this._peanoLR(n - 1, size - 1, board, { x: pos.x, y: pos.y }, false, { end1: params.end1, end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y }, true, { end1: 'left', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y }, false, { end1: 'left', end2: 'up' });

                this._peanoLR(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + this.getHeight(size - 1) }, true, { end1: 'left', end2: 'down' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + this.getHeight(size - 1) }, false, { end1: 'left', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, true, { end1: 'up', end2: 'right' });

                this._peanoLR(n - 1, size - 1, board, { x: pos.x, y: pos.y + (2 * this.getHeight(size - 1)) }, false, { end1: 'down', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y + (2 * this.getHeight(size - 1)) }, true, { end1: 'left', end2: 'right' });
                this._peanoLR(n - 1, size - 1, board, { x: pos.x + (2 * this.getWidth(size - 1)) + 2, y: pos.y + (2 * this.getHeight(size - 1)) }, false, { end1: 'left', end2: params.end2 });
            }
        }
    }

    _peano(n, size, board, rotation, inverse) {
        if (rotation === Rotations.LEFT || rotation === Rotations.RIGHT) {
            this._peanoLR(n, size, board, { x: 0, y: 0 }, !inverse, { end1: 'left', end2: 'right' });
        } else {
            this._peanoSF(n, size, board, { x: 0, y: 0 }, !inverse, inverse ? { end1: 'up', end2: 'down' } : { end1: 'down', end2: 'up' });
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
        let inverse = config !== undefined && config.inverse === true;

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        this._peano(step, n, board, rotation, inverse);
      
        return board.reverse();
    }

}

module.exports = {
    PeanoCurve: PeanoCurve,
};