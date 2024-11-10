const { Modes, LineTypes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class VicsekFractal {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.BLOCKS, Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.BLOCKS]: {
                STEP: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.DIAGONAL ],
                CHARACTER: true,
            },
            [Modes.LINES]: {
                STEP: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.DIAGONAL ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.CENTER,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n, mode) {
       return (this.getHeight(n) * 2) + (mode === Modes.LINES ? 1 : 0);
    }

    getHeight(n, mode) {
        return Math.pow(3, n) + (mode === Modes.LINES ? 1 : 0);
    }

    _drawSquareBlocks(board, pos, size) {
        var startX = pos.x - parseInt(this.getWidth(size) / 2.0);
        var startY = pos.y - parseInt(this.getHeight(size) / 2.0); 
        for (let i = 0; i < this.getHeight(size); i++) {
            for (let j = 0; j < this.getWidth(size); j++) {
                board[startY + i][startX + j] = Shapes.BLOCK;
            }
        }
    }

    _drawSquareLines(board, pos, size) {
        var width = this.getWidth(size);
        var height = this.getHeight(size);
        var startX = pos.x - parseInt(width / 2.0);
        var startY = pos.y - parseInt(height / 2.0); 

        if (board[startY][startX] === ' ') {
            board[startY][startX] = '└';
        } else if (board[startY][startX] === '┌') {
            board[startY][startX] = '│';
        } else if (board[startY][startX] === '┘') {
            board[startY][startX] = '─';
        } else if (board[startY][startX] === '─') {
            board[startY][startX] = '┘';
        } else if (board[startY][startX] === '│') {
            board[startY][startX] = '┌';
        } else if (board[startY][startX] === '┐') {
            board[startY][startX] = '┼';
        }

        if (board[startY + height][startX] === ' ') {
            board[startY + height][startX] = '┌';
        } else if (board[startY + height][startX] === '└') {
            board[startY + height][startX] = '│';
        } else if (board[startY + height][startX] === '┐') {
            board[startY + height][startX] = '─';
        } else if (board[startY + height][startX] === '─') {
            board[startY + height][startX] = '┐';
        } else if (board[startY + height][startX] === '│') {
            board[startY + height][startX] = '└';
        } else if (board[startY + height][startX] === '┘') {
            board[startY + height][startX] = '┼';
        }

        if (board[startY][startX + width] === ' ') {
            board[startY][startX + width] = '┘';
        } else if (board[startY][startX + width] === '┐') {
            board[startY][startX + width] = '│';
        } else if (board[startY][startX + width] === '└') {
            board[startY][startX + width] = '─';
        } else if (board[startY][startX + width] === '─') {
            board[startY][startX + width] = '└';
        } else if (board[startY][startX + width] === '│') {
            board[startY][startX + width] = '┐';
        } else if (board[startY][startX + width] === '┌') {
            board[startY][startX + width] = '┼';
        }

        if (board[startY + height][startX + width] === ' ') {
            board[startY + height][startX + width] = '┐';
        } else if (board[startY + height][startX + width] === '┘') {
            board[startY + height][startX + width] = '│';
        } else if (board[startY + height][startX + width] === '┌') {
            board[startY + height][startX + width] = '─';
        } else if (board[startY + height][startX + width] === '─') {
            board[startY + height][startX + width] = '┌';
        } else if (board[startY + height][startX + width] === '│') {
            board[startY + height][startX + width] = '┘';
        } else if (board[startY + height][startX + width] === '└') {
            board[startY + height][startX + width] = '┼';
        }
        
        for (let i = 1; i < this.getWidth(size); i++) {
            if (board[startY][startX + i] === '─') {
                board[startY][startX + i] = ' ';
            } else {
                board[startY][startX + i] = '─';
            }
            if (board[startY + height][startX + i] === '─') {
                board[startY + height][startX + i] = ' ';
            } else {
                board[startY + height][startX + i] = '─';
            }
        }

        for (let i = 1; i < this.getHeight(size); i++) {
            if (board[startY + i][startX] === '│') {
                board[startY + i][startX] = ' ';
            } else {
                board[startY + i][startX] = '│';
            }
            if (board[startY + i][startX + width] === '│') {
                board[startY + i][startX + width] = ' ';
            } else {
                board[startY + i][startX + width] = '│';
            }
        }
    }

    _vicsek(n, size, board, pos, rotation, mode) {
        if (n === 0) {
            if (mode === Modes.LINES) {
                this._drawSquareLines(board, pos, size);
            } else {
                this._drawSquareBlocks(board, pos, size);
            }
            return;
        }

        if (rotation === Rotations.DIAGONAL) {
            this._vicsek(n - 1, size - 1, board, { x: pos.x, y: pos.y }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, rotation, mode);
        } else {
            this._vicsek(n - 1, size - 1, board, { x: pos.x, y: pos.y }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x, y: pos.y - this.getHeight(size - 1) }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y }, rotation, mode);
            this._vicsek(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y }, rotation, mode);
        }
    }

    create(n, config) {
        if (n === undefined || n < 0) {
            return [];
        }

        let step = n;
        if (config && config.step !== undefined && config.step >= this.CONFIG.MIN_N && config.step <= n) {
            step = config.step;
        }

        const mode = config && config.mode !== undefined && this.CONFIG.MODES.includes(config.mode) ? config.mode : this.CONFIG.MODES[0];
        const rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        let board = Utils.createBoard(this.getWidth(n, mode), this.getHeight(n, mode));
        this._vicsek(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) }, rotation, mode);
        return board.reverse();
    }
}

module.exports = {
    VicsekFractal: VicsekFractal,
};