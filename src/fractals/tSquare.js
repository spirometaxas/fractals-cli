const { Rotations, Modes, VerticalAlign, HorizontalAlign } = require('../constants');
const { LineTypes, Shapes } = require('../characters.js');
const { Utils } = require('../utils');

class TSquare {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 5,
        MODES: [ Modes.BLOCKS, Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.BLOCKS]: {
                STEP: true,
                CHARACTER: true,
            },
            [Modes.LINES]: {
                STEP: true,
                INVERSE: true,
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n, mode) {
        return Math.pow(2, n + 3) - 4 + (mode === Modes.LINES ? 1 : 0);
    }

    _getSquareWidth(n) {
        return Math.pow(2, n + 2);
    }

    getHeight(n, mode) {
        return Math.pow(2, n + 2) - 2 + (mode === Modes.LINES ? 1 : 0);
    }

    _getSquareHeight(n) {
        return Math.pow(2, n + 1);
    }

    _drawSquareBlocks(board, pos, size) {
        var startX = pos.x - parseInt(this._getSquareWidth(size) / 2.0);
        var startY = pos.y - parseInt(this._getSquareHeight(size) / 2.0); 
        for (let i = 0; i < this._getSquareHeight(size); i++) {
            for (let j = 0; j < this._getSquareWidth(size); j++) {
                board[startY + i][startX + j] = Shapes.BLOCK;
            }
        }
    }

    _drawSquareLines(board, pos, size) {
        var width = this._getSquareWidth(size);
        var height = this._getSquareHeight(size);
        var startX = pos.x - parseInt(width / 2.0);
        var startY = pos.y - parseInt(height / 2.0); 
        board[startY][startX] = '└';
        board[startY + height][startX] = '┌';
        board[startY][startX + width] = '┘';
        board[startY + height][startX + width] = '┐';
        for (let i = 1; i < this._getSquareWidth(size); i++) {
            if (board[startY][startX + i] === ' ') {
                board[startY][startX + i] = '─';
            } else {
                board[startY][startX + i] = '┬';
            }
            if (board[startY + height][startX + i] === ' ') {
                board[startY + height][startX + i] = '─';
            } else {
                board[startY + height][startX + i] = '┴';
            }
        }
        for (let i = 1; i < this._getSquareHeight(size); i++) {
            if (board[startY + i][startX] === ' ') {
                board[startY + i][startX] = '│';
            } else {
                board[startY + i][startX] = '┤';
            }
            if (board[startY + i][startX + width] == ' ') {
                board[startY + i][startX + width] = '│';
            } else {
                board[startY + i][startX + width] = '├';
            }
        }
        for (let i = 1; i < this._getSquareHeight(size); i++) {
            for (let j = 1; j < this._getSquareWidth(size); j++) {
                board[startY + i][startX + j] = ' ';
            }
        }
    }

    _tsquare(n, size, board, pos) {
        this._drawSquareBlocks(board, pos, size);

        if (n === 0) {
            return;
        }

        this._tsquare(n - 1, size - 1, board, { x: pos.x + this._getSquareWidth(size - 1), y: pos.y + this._getSquareHeight(size - 1) });
        this._tsquare(n - 1, size - 1, board, { x: pos.x - this._getSquareWidth(size - 1), y: pos.y - this._getSquareHeight(size - 1) });
        this._tsquare(n - 1, size - 1, board, { x: pos.x + this._getSquareWidth(size - 1), y: pos.y - this._getSquareHeight(size - 1) });
        this._tsquare(n - 1, size - 1, board, { x: pos.x - this._getSquareWidth(size - 1), y: pos.y + this._getSquareHeight(size - 1) });
    }

    _tsquareLines(n, size, board, pos, inverse) {
        if (!inverse || (inverse && n === 0)) {
            this._drawSquareLines(board, pos, size);
        }

        if (n === 0) {
            return;
        }

        this._tsquareLines(n - 1, size - 1, board, { x: pos.x + this._getSquareWidth(size - 1), y: pos.y + this._getSquareHeight(size - 1) }, inverse);
        this._tsquareLines(n - 1, size - 1, board, { x: pos.x - this._getSquareWidth(size - 1), y: pos.y - this._getSquareHeight(size - 1) }, inverse);
        this._tsquareLines(n - 1, size - 1, board, { x: pos.x + this._getSquareWidth(size - 1), y: pos.y - this._getSquareHeight(size - 1) }, inverse);
        this._tsquareLines(n - 1, size - 1, board, { x: pos.x - this._getSquareWidth(size - 1), y: pos.y + this._getSquareHeight(size - 1) }, inverse);

        if (inverse) {
            this._drawSquareLines(board, pos, size);
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

        let mode = config && config.mode !== undefined && this.CONFIG.MODES.includes(config.mode) ? config.mode : this.CONFIG.MODES[0];
        let inverse = config !== undefined && config.inverse === true;

        let board = Utils.createBoard(this.getWidth(n, mode), this.getHeight(n, mode));
        if (mode === Modes.LINES) {
            this._tsquareLines(step, n, board, { x: parseInt((this.getWidth(n) + 1) / 2.0), y: parseInt((this.getHeight(n) + 1) / 2.0) }, inverse);
        } else {
            this._tsquare(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) });
        }

        return board.reverse();
    }

}

module.exports = {
    TSquare: TSquare,
};