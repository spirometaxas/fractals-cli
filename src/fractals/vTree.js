const { Rotations, Modes, LineTypes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class VTree {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 6,
        MODES: [ Modes.LINES, Modes.BLOCKS ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT, Rotations.FLIP ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
            [Modes.BLOCKS]: {
                STEP: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT, Rotations.FLIP ],
                CHARACTER: true,
            }
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.RIGHT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n, mode) {
        return Math.pow(2, n + 2) + (mode === Modes.BLOCKS ? -2 : -1);
    }

    getHeight(n, mode) {
        return Math.pow(2, n + 1) + (mode === Modes.BLOCKS ? -1 : 0);
    }

    _getSquareWidth(n) {
        return Math.pow(2, n + 1);
    }

    _getSquareHeight(n) {
        return Math.pow(2, n);
    }

    _drawSquareBlocks(board, pos, size, rotation) {
        var width = this._getSquareWidth(size);
        var height = this._getSquareHeight(size);

        let bottomLeft = { x: pos.x, y: pos.y };
        let bottomRight = { x: pos.x + width - 1, y: pos.y };
        let topLeft = { x: pos.x, y: pos.y + height - 1 };
        let topRight = { x: pos.x + width - 1, y: pos.y + height - 1 };

        if (rotation === Rotations.LEFT) {
            bottomLeft = { x: pos.x - width + 1, y: pos.y };
            bottomRight = { x: pos.x, y: pos.y };
            topLeft = { x: pos.x - width + 1, y: pos.y + height - 1 };
            topRight = { x: pos.x, y: pos.y + height - 1 };
        } else if (rotation === Rotations.RIGHT) {
            bottomLeft = { x: pos.x, y: pos.y - height + 1 };
            bottomRight = { x: pos.x + width - 1, y: pos.y - height + 1 };
            topLeft = { x: pos.x, y: pos.y };
            topRight = { x: pos.x + width - 1, y: pos.y };
        } else if (rotation === Rotations.FLIP) {
            bottomLeft = { x: pos.x - width + 1, y: pos.y - height + 1 };
            bottomRight = { x: pos.x, y: pos.y - height + 1 };
            topLeft = { x: pos.x - width + 1, y: pos.y };
            topRight = { x: pos.x, y: pos.y };
        }

        for (let i = bottomLeft.y; i <= topLeft.y; i++) {
            for (let j = bottomLeft.x; j <= bottomRight.x; j++) {
                board[i][j] = Shapes.BLOCK;
            }
        }
    }

    _drawSquareLines(board, pos, size, rotation) {
        var width = this._getSquareWidth(size);
        var height = this._getSquareHeight(size);

        let bottomLeft = { x: pos.x, y: pos.y };
        let bottomRight = { x: pos.x + width, y: pos.y };
        let topLeft = { x: pos.x, y: pos.y + height };
        let topRight = { x: pos.x + width, y: pos.y + height };

        if (rotation === Rotations.LEFT) {
            bottomLeft = { x: pos.x - width, y: pos.y };
            bottomRight = { x: pos.x, y: pos.y };
            topLeft = { x: pos.x - width, y: pos.y + height };
            topRight = { x: pos.x, y: pos.y + height };
        } else if (rotation === Rotations.RIGHT) {
            bottomLeft = { x: pos.x, y: pos.y - height };
            bottomRight = { x: pos.x + width, y: pos.y - height };
            topLeft = { x: pos.x, y: pos.y };
            topRight = { x: pos.x + width, y: pos.y };
        } else if (rotation === Rotations.FLIP) {
            bottomLeft = { x: pos.x - width, y: pos.y - height };
            bottomRight = { x: pos.x, y: pos.y - height };
            topLeft = { x: pos.x - width, y: pos.y };
            topRight = { x: pos.x, y: pos.y };
        }

        if (board[bottomLeft.y][bottomLeft.x] === '┌') {
            board[bottomLeft.y][bottomLeft.x] = '├';
        } else if (board[bottomLeft.y][bottomLeft.x] === '─') {
            board[bottomLeft.y][bottomLeft.x] = '┴';
        } else if (board[bottomLeft.y][bottomLeft.x] === '┘') {
            board[bottomLeft.y][bottomLeft.x] = '┴';
        } else if (board[bottomLeft.y][bottomLeft.x] === '│') {
            board[bottomLeft.y][bottomLeft.x] = '├';
        } else if (board[bottomLeft.y][bottomLeft.x] === '┴') {
            board[bottomLeft.y][bottomLeft.x] = '┴';
        } else if (board[bottomLeft.y][bottomLeft.x] === '├') {
            board[bottomLeft.y][bottomLeft.x] = '├';
        } else {
            board[bottomLeft.y][bottomLeft.x] = '└';
        }

        if (board[topLeft.y][topLeft.x] === '└') {
            board[topLeft.y][topLeft.x] = '├';
        } else if (board[topLeft.y][topLeft.x] === '┬') {
            board[topLeft.y][topLeft.x] = '┬';
        } else if (board[topLeft.y][topLeft.x] === '┐') {
            board[topLeft.y][topLeft.x] = '┬';
        } else if (board[topLeft.y][topLeft.x] === '│') {
            board[topLeft.y][topLeft.x] = '├';
        } else if (board[topLeft.y][topLeft.x] === '─') {
            board[topLeft.y][topLeft.x] = '┬';
        } else if (board[topLeft.y][topLeft.x] === '├') {
            board[topLeft.y][topLeft.x] = '├';
        } else {
            board[topLeft.y][topLeft.x] = '┌';
        }
        
        if (board[bottomRight.y][bottomRight.x] === '┐') {
            board[bottomRight.y][bottomRight.x] = '┤';
        } else if (board[bottomRight.y][bottomRight.x] === '┴') {
            board[bottomRight.y][bottomRight.x] = '┴';
        } else if (board[bottomRight.y][bottomRight.x] === '└') {
            board[bottomRight.y][bottomRight.x] = '┴';
        } else if (board[bottomRight.y][bottomRight.x] === '│') {
            board[bottomRight.y][bottomRight.x] = '┤';
        } else if (board[bottomRight.y][bottomRight.x] === '─') {
            board[bottomRight.y][bottomRight.x] = '┴';
        } else if (board[bottomRight.y][bottomRight.x] === '┤') {
            board[bottomRight.y][bottomRight.x] = '┤';
        } else {
            board[bottomRight.y][bottomRight.x] = '┘';
        }

        if (board[topRight.y][topRight.x] === '┘') {
            board[topRight.y][topRight.x] = '┤';
        } else if (board[topRight.y][topRight.x] === '┬') {
            board[topRight.y][topRight.x] = '┬';
        } else if (board[topRight.y][topRight.x] === '┌') {
            board[topRight.y][topRight.x] = '┬';
        } else if (board[topRight.y][topRight.x] === '│') {
            board[topRight.y][topRight.x] = '┤';
        } else if (board[topRight.y][topRight.x] === '─') {
            board[topRight.y][topRight.x] = '┬';
        } else if (board[topRight.y][topRight.x] === '┤') {
            board[topRight.y][topRight.x] = '┤';
        } else {
            board[topRight.y][topRight.x] = '┐';
        }

        for (let i = 1; i < width; i++) {
            board[bottomLeft.y][bottomLeft.x + i] = '─'
            board[topLeft.y][topLeft.x + i] = '─'
        }

        for (let i = 1; i < height; i++) {
            board[bottomLeft.y + i][bottomLeft.x] = '│';
            board[bottomRight.y + i][bottomRight.x] = '│';
        }
    }

    _vtree(n, size, board, pos, mode, rotation) {
        if (mode === Modes.BLOCKS) {
            this._drawSquareBlocks(board, pos, size, rotation);
        } else {
            this._drawSquareLines(board, pos, size, rotation);
        }
        
        if (n <= 0) {
            return;
        }

        if (rotation === Rotations.LEFT) {
            this._vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y + this._getSquareHeight(size) }, mode, rotation);
            this._vtree(n - 1, size - 1, board, { x: pos.x - this._getSquareWidth(size), y: pos.y }, mode, rotation);
        } else if (rotation === Rotations.RIGHT) {
            this._vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y - this._getSquareHeight(size) }, mode, rotation);
            this._vtree(n - 1, size - 1, board, { x: pos.x + this._getSquareWidth(size), y: pos.y }, mode, rotation);
        } else if (rotation === Rotations.FLIP) {
            this._vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y - this._getSquareHeight(size) }, mode, rotation);
            this._vtree(n - 1, size - 1, board, { x: pos.x - this._getSquareWidth(size), y: pos.y }, mode, rotation);
        } else {
            this._vtree(n - 1, size - 1, board, { x: pos.x, y: pos.y + this._getSquareHeight(size) }, mode, rotation);
            this._vtree(n - 1, size - 1, board, { x: pos.x + this._getSquareWidth(size), y: pos.y }, mode, rotation);
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
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        let board = Utils.createBoard(this.getWidth(n, mode), this.getHeight(n, mode));

        let pos = { x: 0, y: 0 };
        if (rotation === Rotations.LEFT) {
            pos = { x: board[0].length - 1, y: 0 };
        } else if (rotation === Rotations.RIGHT) {
            pos = { x: 0, y: board.length - 1 };
        } else if (rotation === Rotations.FLIP) {
            pos = { x: board[0].length - 1, y: board.length - 1 };
        }

        this._vtree(step, n, board, pos, mode, rotation);
        return board.reverse();
    }

}

module.exports = {
    VTree: VTree,
};