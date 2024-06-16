const { Modes, Lines, LineTypes, Shapes } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiCarpet {

    CONFIG = {
        MIN_N: 0,
        MODE_OPTIONS: {},
    }

    constructor() {
        this.CONFIG.MODES = [ Modes.BLOCKS, Modes.LINES ];
        this.CONFIG.MODE_OPTIONS[Modes.BLOCKS] = {
            SIZE: true,
            INVERSE: true,
            CHARACTER: true,
        };
        this.CONFIG.MODE_OPTIONS[Modes.LINES] = {
            SIZE: true,
            LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
        };
    }

    _getWidth(n) {
        return this._getHeight(n) * 2;
    }

    _getHeight(n) {
        return Math.pow(3, n);
    }

    _drawSquare(board, pos, size) {
        var startX = pos.x - parseInt(this._getWidth(size) / 2.0);
        var startY = pos.y - parseInt(this._getHeight(size) / 2.0); 
        for (let i = 0; i < this._getHeight(size); i++) {
            for (let j = 0; j < this._getWidth(size); j++) {
                board[startY + i][startX + j] = Shapes.BLOCK;
            }
        }
    }

    _drawSquareO(board, pos, size) {
        var width = this._getWidth(size);
        var height = this._getHeight(size);
        var startX = pos.x - parseInt(width / 2.0);
        var startY = pos.y - parseInt(height / 2.0); 
        board[startY][startX] = '└';
        board[startY + height][startX] = '┌';
        board[startY][startX + width] = '┘';
        board[startY + height][startX + width] = '┐';
        for (let i = 1; i < this._getWidth(size); i++) {
            board[startY][startX + i] = '─'
            board[startY + height][startX + i] = '─'
        }
        for (let i = 1; i < this._getHeight(size); i++) {
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

        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this._getWidth(size - 1), y: pos.y - this._getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y - this._getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this._getWidth(size - 1), y: pos.y - this._getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this._getWidth(size - 1), y: pos.y }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this._getWidth(size - 1), y: pos.y }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this._getWidth(size - 1), y: pos.y + this._getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y + this._getHeight(size - 1) }, inverse, outline);
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this._getWidth(size - 1), y: pos.y + this._getHeight(size - 1) }, inverse, outline);
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }
    
        let size = n;
        if (config && config.size && config.size > n) {
            size = config.size;
        }

        let inverse = config !== undefined && config.inverse === true;
        let outline = config !== undefined && config.outline === true;
    

        let board = Utils.createBoard(this._getWidth(size) + (outline ? 1 : 0), this._getHeight(size) + (outline ? 1 : 0));
        this._sierpinski(n, size, board, { x: parseInt(this._getWidth(size) / 2.0), y: parseInt(this._getHeight(size) / 2.0) }, inverse, outline);
        if (outline) {
            this._drawSquareO(board, { x: parseInt(this._getWidth(size) / 2.0), y: parseInt(this._getHeight(size) / 2.0) }, size);
        }
        return board.reverse();
    }
}

module.exports = {
    SierpinskiCarpet: SierpinskiCarpet,
};