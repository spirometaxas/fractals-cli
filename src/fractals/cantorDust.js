const { Modes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Shapes, LineTypes } = require('../characters.js');
const { Utils } = require('../utils');

class CantorDust {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.BLOCKS, Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.BLOCKS]: {
                STEP: true,
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

    _cantor(n, size, board, pos, mode) {
        if (n === 0) {
            if (mode === Modes.LINES) {
                this._drawSquareLines(board, pos, size);
            } else {
                this._drawSquareBlocks(board, pos, size);
            }
            return;
        }

        this._cantor(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, mode);
        this._cantor(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, mode);
        this._cantor(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y - this.getHeight(size - 1) }, mode);
        this._cantor(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y + this.getHeight(size - 1) }, mode);
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }
  
        let step = n;
        if (config && config.step !== undefined && config.step >= this.CONFIG.MIN_N && config.step <= n) {
            step = config.step;
        }

        const mode = config && config.mode !== undefined && this.CONFIG.MODES.includes(config.mode) ? config.mode : this.CONFIG.MODES[0];

        const board = Utils.createBoard(this.getWidth(n, mode), this.getHeight(n, mode));
        this._cantor(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) }, mode);
        return board.reverse();
    }

}


module.exports = {
    CantorDust: CantorDust,
}