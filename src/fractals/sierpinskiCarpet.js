const { Modes, LineTypes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiCarpet {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.BLOCKS, Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.BLOCKS]: {
                STEP: true,
                INVERSE: true,
                CHARACTER: true,
            },
            [Modes.LINES]: {
                STEP: true,
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
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
        board[startY][startX] = '└';
        board[startY + height][startX] = '┌';
        board[startY][startX + width] = '┘';
        board[startY + height][startX + width] = '┐';
        for (let i = 1; i < this.getWidth(size); i++) {
            board[startY][startX + i] = '─'
            board[startY + height][startX + i] = '─'
        }
        for (let i = 1; i < this.getHeight(size); i++) {
            board[startY + i][startX] = '│';
            board[startY + i][startX + width] = '│';
        }
    }

    _sierpinski(n, size, board, pos, inverse, mode) {
        if (n === 0) {
            if (!(inverse || mode === Modes.LINES)) {
                this._drawSquareBlocks(board, pos, size);
            }
            return;
        } else if (n > 0 && (inverse || mode === Modes.LINES)) {
            if (mode === Modes.LINES) {
                this._drawSquareLines(board, pos, size - 1);
            } else {
                this._drawSquareBlocks(board, pos, size - 1);
            }
        }

        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y - this.getHeight(size - 1) }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, inverse, mode);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, inverse, mode);
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }
    
        let step = n;
        if (config && config.step !== undefined && config.step >= this.CONFIG.MIN_N && config.step <= n) {
            step = config.step;
        }

        let mode = config && config.mode !== undefined && this.CONFIG.MODES.includes(config.mode) ? config.mode : this.CONFIG.MODES[0];
        let inverse = config !== undefined && config.inverse === true;
    
        let board = Utils.createBoard(this.getWidth(n, mode), this.getHeight(n, mode));
        this._sierpinski(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) }, inverse, mode);
        if (mode === Modes.LINES) {
            this._drawSquareLines(board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) }, n);
        }
        return board.reverse();
    }
}

module.exports = {
    SierpinskiCarpet: SierpinskiCarpet,
};