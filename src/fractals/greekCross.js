const { Modes, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class GreekCross {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 6,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.CENTER,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        if (n < 0) {
            return 0;
        } else if (n === 0) {
            return 3;
        } else {
            return Math.pow(2, n + 2) - 1;
        }
    }

    getHeight(n) {
        if (n < 0) {
            return 0;
        } else if (n === 0) {
            return 1;
        } else {
            return Math.pow(2, n + 1) - 1;
        }
    }

    _drawCross(board, pos, scale) {
        for (let i = 0; i < this.getWidth(scale); i++) {
            board[pos.y][pos.x + i - parseInt(this.getWidth(scale) / 2)] = '─';
        }
        for (let i = 0; i < this.getHeight(scale); i++) {
            board[pos.y + i - parseInt(this.getHeight(scale) / 2)][pos.x] = '│';
        }
        board[pos.y][pos.x] = '┼';
    }

    _isOnBoard(board, pos) {
        if (pos.y < 0 || pos.y >= board.length) {
            return false;
        }
        if (pos.x < 0 || pos.x >= board[0].length) {
            return false;
        }
        return true;
    }

    _drawCap(board, pos) {
        if (!this._isOnBoard(board, pos)) {
            return;
        }
        if (board[pos.y][pos.x] === '┼' || board[pos.y][pos.x] === '─' || board[pos.y][pos.x] === '│') {
            return;
        }
      
        if (this._isOnBoard(board, { x: pos.x - 1, y: pos.y }) && board[pos.y][pos.x - 1] === '─' && 
            this._isOnBoard(board, { x: pos.x + 1, y: pos.y }) && board[pos.y][pos.x + 1] === '─' && 
            this._isOnBoard(board, { x: pos.x, y: pos.y - 1 }) && (board[pos.y - 1][pos.x] === '│' || board[pos.y - 1][pos.x] === '┼') &&
            this._isOnBoard(board, { x: pos.x, y: pos.y + 1 }) && (board[pos.y + 1][pos.x] === '│' || board[pos.y + 1][pos.x] === '┼')) {
            board[pos.y][pos.x] = '┼';
            return;
        }

        if (this._isOnBoard(board, { x: pos.x - 1, y: pos.y }) && board[pos.y][pos.x - 1] === '─' && 
            this._isOnBoard(board, { x: pos.x, y: pos.y - 1 }) && (board[pos.y - 1][pos.x] === '│' || board[pos.y - 1][pos.x] === '┼')) {
            board[pos.y][pos.x] = '┐';
            return;
        }

        if (this._isOnBoard(board, { x: pos.x + 1, y: pos.y }) && board[pos.y][pos.x + 1] === '─' && 
            this._isOnBoard(board, { x: pos.x, y: pos.y - 1 }) && (board[pos.y - 1][pos.x] === '│' || board[pos.y - 1][pos.x] === '┼')) {
            board[pos.y][pos.x] = '┌';
            return;
        }

        if (this._isOnBoard(board, { x: pos.x + 1, y: pos.y }) && board[pos.y][pos.x + 1] === '─' && 
            this._isOnBoard(board, { x: pos.x, y: pos.y + 1 }) && (board[pos.y + 1][pos.x] === '│' || board[pos.y + 1][pos.x] === '┼')) {
            board[pos.y][pos.x] = '└';
            return;
        }

        if (this._isOnBoard(board, { x: pos.x - 1, y: pos.y }) && board[pos.y][pos.x - 1] === '─' && 
            this._isOnBoard(board, { x: pos.x, y: pos.y + 1 }) && (board[pos.y + 1][pos.x] === '│' || board[pos.y + 1][pos.x] === '┼')) {
            board[pos.y][pos.x] = '┘';
            return;
        }
    }

    _greekCross(n, size, board, pos) {
        if (n === 0) {
            this._drawCross(board, pos, size);
            this._drawCap(board, { x: pos.x, y: pos.y + parseInt(this.getHeight(size) / 2) + 1 });
            this._drawCap(board, { x: pos.x, y: pos.y - parseInt(this.getHeight(size) / 2) - 1 });
            this._drawCap(board, { x: pos.x + parseInt(this.getWidth(size) / 2) + 1, y: pos.y });
            this._drawCap(board, { x: pos.x - parseInt(this.getWidth(size) / 2) - 1, y: pos.y });
            return;
        }

        this._greekCross(n - 1, size - 1, board, { x: pos.x, y: pos.y + parseInt(this.getHeight(size - 1) / 2) + 1 });
        this._greekCross(n - 1, size - 1, board, { x: pos.x, y: pos.y - parseInt(this.getHeight(size - 1) / 2) - 1 });
        this._greekCross(n - 1, size - 1, board, { x: pos.x + parseInt(this.getWidth(size - 1) / 2) + 1, y: pos.y });
        this._greekCross(n - 1, size - 1, board, { x: pos.x - parseInt(this.getWidth(size - 1) / 2) - 1, y: pos.y });
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }
        
        let step = n;
        if (config && config.step !== undefined && config.step >= this.CONFIG.MIN_N && config.step <= n) {
            step = config.step;
        }

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        this._greekCross(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) });
        return board.reverse();
    }
}

module.exports = {
    GreekCross: GreekCross,
};