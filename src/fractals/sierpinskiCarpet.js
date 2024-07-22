const { Modes, Lines, LineTypes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiCarpet {

    CONFIG = {
        MIN_N: 0,
        MODES: [ Modes.BLOCKS, Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.BLOCKS]: {
                SIZE: true,
                INVERSE: true,
                CHARACTER: true,
            },
            [Modes.LINES]: {
                SIZE: true,
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        return this.getHeight(n) * 2;
    }

    getHeight(n) {
        return Math.pow(3, n);
    }

    _drawSquare(board, pos, size) {
        var startX = pos.x - parseInt(this.getWidth(size) / 2.0);
        var startY = pos.y - parseInt(this.getHeight(size) / 2.0); 
        for (let i = 0; i < this.getHeight(size); i++) {
            for (let j = 0; j < this.getWidth(size); j++) {
                board[startY + i][startX + j] = Shapes.BLOCK;
            }
        }
    }

    _drawSquareO(board, pos, size) {
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

    _sierpinski(n, size, board, pos, inverse, outline) {
        if (n === 0) {
            if (!(inverse || outline)) {
                this._drawSquare(board, pos, size);
            }
            return;
        } else if (n > 0 && (inverse || outline)) {
            if (outline) {
                this._drawSquareO(board, pos, size - 1);
            } else {
                this._drawSquare(board, pos, size - 1);
            }
        }

        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y - this.getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, inverse, outline);
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
        let outline = config !== undefined && config.mode === Modes.LINES;
    

        let board = Utils.createBoard(this.getWidth(n) + (outline ? 1 : 0), this.getHeight(n) + (outline ? 1 : 0));
        this._sierpinski(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) }, inverse, outline);
        if (outline) {
            this._drawSquareO(board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) }, n);
        }
        return board.reverse();
    }
}

module.exports = {
    SierpinskiCarpet: SierpinskiCarpet,
};