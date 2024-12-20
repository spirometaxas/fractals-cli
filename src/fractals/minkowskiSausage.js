const { Rotations, Modes, VerticalAlign, HorizontalAlign } = require('../constants');
const { LineTypes, Shapes } = require('../characters.js');
const { Utils } = require('../utils');

class MinkowskiSausage {


    CONFIG = {
        MIN_N: 0,
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
        DEFAULT_Y: VerticalAlign.CENTER,
    }

    getWidth(n, rotation) {
        if (rotation === Rotations.LEFT || rotation === Rotations.RIGHT) {
            return this._getWidthVertical(n);
        } else {
            return this._getWidthHorizontal(n);
        }
    }

    getHeight(n, rotation) {
        if (rotation === Rotations.LEFT || rotation === Rotations.RIGHT) {
            return this._getHeightVertical(n);
        } else {
            return this._getHeightHorizontal(n);
        }
    }

    _getWidthHorizontal(n) {
        return this._getHeightHorizontal(n) * 3;
    }

    _getHeightHorizontal(n) {
        if (n <= 0) {
            return 1;
        } else {
            return (this._getHeightHorizontal(n - 1) * 4) - 1;
        }
    }

    _getWidthVertical(n) {
        if (n <= 0) {
            return 1;
        } else {
            return (this._getWidthVertical(n - 1) * 4) + 1;
        }
    }

    _getHeightVertical(n) {
        if (n <= 0) {
            return 2;
        } else {
            return (this._getHeightVertical(n - 1) * 4) - 3;
        }
    }

    _drawCurve(board, pos, type, size, params) {
        if (type === 'right') {
            let width = this._getWidthHorizontal(size) - 1;
            for (let i = 1; i < width; i++) {
                board[pos.y][pos.x + i] = '─';
            }

            if (params && params.end1 === 'left') {
                board[pos.y][pos.x] = '─';
            }
            if (params && params.end1 === 'up') {
                board[pos.y][pos.x] = '└';
            }
            if (params && params.end1 === 'down') {
                board[pos.y][pos.x] = '┌';
            }

            if (params && params.end2 === 'right') {
                board[pos.y][pos.x + width] = '─';
            }
            if (params && params.end2 === 'up') {
                board[pos.y][pos.x + width] = '┘';
            }
            if (params && params.end2 === 'down') {
                board[pos.y][pos.x + width] = '┐';
            }
        } else if (type === 'left') {
            let width = this._getWidthHorizontal(size) - 1;
            for (let i = 1; i < width; i++) {
                board[pos.y][pos.x - i] = '─';
            }

            if (params && params.end1 === 'right') {
                board[pos.y][pos.x] = '─';
            }
            if (params && params.end1 === 'up') {
                board[pos.y][pos.x] = '┘';
            }
            if (params && params.end1 === 'down') {
                board[pos.y][pos.x] = '┐';
            }

            if (params && params.end2 === 'left') {
                board[pos.y][pos.x - width] = '─';
            }
            if (params && params.end2 === 'up') {
                board[pos.y][pos.x - width] = '└';
            }
            if (params && params.end2 === 'down') {
                board[pos.y][pos.x - width] = '┌';
            }
        } else if (type === 'up') {
            let width = this._getHeightVertical(size) - 1;
            for (let i = 1; i < width; i++) {
                board[pos.y + i][pos.x] = '│';
            }

            if (params && params.end1 === 'left') {
                board[pos.y][pos.x] = '┘';
            }
            if (params && params.end1 === 'right') {
                board[pos.y][pos.x] = '└';
            }
            if (params && params.end1 === 'down') {
                board[pos.y][pos.x] = '│';
            }

            if (params && params.end2 === 'left') {
                board[pos.y + width][pos.x] = '┐';
            }
            if (params && params.end2 === 'right') {
                board[pos.y + width][pos.x] = '┌';
            }
            if (params && params.end2 === 'up') {
                board[pos.y + width][pos.x] = '│';
            }
        } else if (type === 'down') {
            let width = this._getHeightVertical(size) - 1;
            for (let i = 1; i < width; i++) {
                board[pos.y - i][pos.x] = '│';
            }

            if (params && params.end1 === 'left') {
                board[pos.y][pos.x] = '┐';
            }
            if (params && params.end1 === 'right') {
                board[pos.y][pos.x] = '┌';
            }
            if (params && params.end1 === 'up') {
                board[pos.y][pos.x] = '│';
            }

            if (params && params.end2 === 'left') {
                board[pos.y - width][pos.x] = '┘';
            }
            if (params && params.end2 === 'right') {
                board[pos.y - width][pos.x] = '└';
            }
            if (params && params.end2 === 'down') {
                board[pos.y - width][pos.x] = '│';
            }
        }
    }

    _minkowski(n, size, board, point, type, params, inverse=false) {
        if (n <= 0) {
            // Draw
            this._drawCurve(board, point, type, size, params);
        } else if (inverse) {
            let xPart = this._getWidthHorizontal(size - 1) - 1;
            let yPart = this._getHeightVertical(size - 1) - 1;
            if (type === 'right') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'right', { end1: params.end1, end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y }, 'down', { end1: 'left', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y - yPart }, 'right', { end1: 'up', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (2 * xPart), y: point.y - yPart }, 'up', { end1: 'left', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (2 * xPart), y: point.y }, 'up', { end1: 'down', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (2 * xPart), y: point.y + yPart }, 'right', { end1: 'down', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (3 * xPart), y: point.y + yPart }, 'down', { end1: 'left', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (3 * xPart), y: point.y }, 'right', { end1: 'up', end2: params.end2 }, inverse);
            } else if (type === 'down') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'down', { end1: params.end1, end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y - yPart }, 'left', { end1: 'up', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y - yPart }, 'down', { end1: 'right', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y - (2 * yPart) }, 'right', { end1: 'up', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y - (2 * yPart) }, 'right', { end1: 'left', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y - (2 * yPart) }, 'down', { end1: 'left', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y - (3 * yPart) }, 'left', { end1: 'up', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y - (3 * yPart) }, 'down', { end1: 'right', end2: params.end2 }, inverse);
            } else if (type === 'up') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'up', { end1: params.end1, end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y + yPart }, 'right', { end1: 'down', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y + yPart }, 'up', { end1: 'left', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y + (2 * yPart) }, 'left', { end1: 'down', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y + (2 * yPart) }, 'left', { end1: 'right', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y + (2 * yPart) }, 'up', { end1: 'right', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y + (3 * yPart) }, 'right', { end1: 'down', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y + (3 * yPart) }, 'up', { end1: 'left', end2: params.end2 }, inverse);
            } else if (type === 'left') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'left', { end1: params.end1, end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y }, 'up', { end1: 'right', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y + yPart }, 'left', { end1: 'down', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (2 * xPart), y: point.y + yPart }, 'down', { end1: 'right', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (2 * xPart), y: point.y }, 'down', { end1: 'up', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (2 * xPart), y: point.y - yPart }, 'left', { end1: 'up', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (3 * xPart), y: point.y - yPart }, 'up', { end1: 'right', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (3 * xPart), y: point.y }, 'left', { end1: 'down', end2: params.end2 }, inverse);
            }
        } else {
            let xPart = this._getWidthHorizontal(size - 1) - 1;
            let yPart = this._getHeightVertical(size - 1) - 1;
            if (type === 'right') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'right', { end1: params.end1, end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y }, 'up', { end1: 'left', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y + yPart }, 'right', { end1: 'down', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (2 * xPart), y: point.y + yPart }, 'down', { end1: 'left', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (2 * xPart), y: point.y }, 'down', { end1: 'up', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (2 * xPart), y: point.y - yPart }, 'right', { end1: 'up', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (3 * xPart), y: point.y - yPart }, 'up', { end1: 'left', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + (3 * xPart), y: point.y }, 'right', { end1: 'down', end2: params.end2 }, inverse);
            } else if (type === 'down') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'down', { end1: params.end1, end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y - yPart }, 'right', { end1: 'up', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y - yPart }, 'down', { end1: 'left', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y - (2 * yPart) }, 'left', { end1: 'up', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y - (2 * yPart) }, 'left', { end1: 'right', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y - (2 * yPart) }, 'down', { end1: 'right', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y - (3 * yPart) }, 'right', { end1: 'up', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y - (3 * yPart) }, 'down', { end1: 'left', end2: params.end2 }, inverse);
            } else if (type === 'up') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'up', { end1: params.end1, end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y + yPart }, 'left', { end1: 'down', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y + yPart }, 'up', { end1: 'right', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y + (2 * yPart) }, 'right', { end1: 'down', end2: 'right' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y + (2 * yPart) }, 'right', { end1: 'left', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y + (2 * yPart) }, 'up', { end1: 'left', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x + xPart, y: point.y + (3 * yPart) }, 'left', { end1: 'down', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y + (3 * yPart) }, 'up', { end1: 'right', end2: params.end2 }, inverse);
            } else if (type === 'left') {
                this._minkowski(n - 1, size - 1, board, { x: point.x, y: point.y }, 'left', { end1: params.end1, end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y }, 'down', { end1: 'right', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - xPart, y: point.y - yPart }, 'left', { end1: 'up', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (2 * xPart), y: point.y - yPart }, 'up', { end1: 'right', end2: 'up' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (2 * xPart), y: point.y }, 'up', { end1: 'down', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (2 * xPart), y: point.y + yPart }, 'left', { end1: 'down', end2: 'down' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (3 * xPart), y: point.y + yPart }, 'down', { end1: 'right', end2: 'left' }, inverse);
                this._minkowski(n - 1, size - 1, board, { x: point.x - (3 * xPart), y: point.y }, 'left', { end1: 'up', end2: params.end2 }, inverse);
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

        let inverse = config !== undefined && config.inverse === true;
        let mode = this.CONFIG.MODES[0];
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        let board = Utils.createBoard(this.getWidth(n, rotation), this.getHeight(n, rotation));
        if (rotation === Rotations.LEFT) {
            this._minkowski(step, n, board, { x: Math.floor(this._getWidthVertical(n) / 2), y: 0 }, 'up', { end1: 'down', end2: 'up' }, inverse);
        } else if (rotation === Rotations.RIGHT) {
            this._minkowski(step, n, board, { x: Math.floor(this._getWidthVertical(n) / 2), y: this._getHeightVertical(n) - 1 }, 'down', { end1: 'up', end2: 'down' }, inverse);
        } else if (rotation === Rotations.FLIP) {
            this._minkowski(step, n, board, { x: this._getWidthHorizontal(n), y: Math.floor(this._getHeightHorizontal(n) / 2) }, 'left', { end1: 'right', end2: 'left' }, inverse);
        } else {
            this._minkowski(step, n, board, { x: 0, y: Math.floor(this._getHeightHorizontal(n) / 2) }, 'right', { end1: 'left', end2: 'right' }, inverse);
        }
      
        return board.reverse();
    }

}

module.exports = {
    MinkowskiSausage: MinkowskiSausage,
};