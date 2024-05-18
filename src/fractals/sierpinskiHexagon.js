const { Modes, Shapes } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiHexagon {

    CONFIG = {
        NAME: 'Sierpinski Hexagon',
        KEY: 'sierpinski_hexagon',
        MIN_N: 0,
        MODES: {},
    }

    constructor() {
        this.CONFIG.MODES[Modes.SHAPES] = {
            SIZE: true,
            CHARACTER: true,
        };
    }

    _getWidth(n) {
        if (n < 0) {
          return 0;
        }
        if (n === 0) {
          return 3;
        }
        return (this._getWidth(n - 1) * 3) + 2;
    }

    _getHeight(n) {
        return Math.pow(3, n) * 2;
    }

    _drawHexagon(board, pos, size) {
        let width = this._getWidth(size);
        for (let i = 0; i < this._getHeight(size) / 2; i++) {
            let startX = pos.x - parseInt(width / 2) + i;
            for (let j = 0; j < width - (2 * i); j++) {
                if (j % 2 == 0) {
                    board[pos.y + i][startX + j] = Shapes.TRIANGLE_UP;
                } else {
                    board[pos.y + i][startX + j] = Shapes.TRIANGLE_DOWN;
                }
            }
        }
        for (let i = 0; i < this._getHeight(size) / 2; i++) {
            let startX = pos.x - parseInt(width / 2) + i;
            for (let j = 0; j < width - (2 * i); j++) {
                if (j % 2 == 0) {
                    board[pos.y - (i + 1)][startX + j] = Shapes.TRIANGLE_DOWN;
                } else {
                    board[pos.y - (i + 1)][startX + j] = Shapes.TRIANGLE_UP;
                }
            }
        }
    }

    _sierpinski(n, size, board, pos) {
        if (n === 0) {
            this._drawHexagon(board, pos, size);
            return;
        }

        // Sides
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this._getWidth(size - 1) - 1, y: pos.y });
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this._getWidth(size - 1) + 1, y: pos.y });

        // Top
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - parseInt(this._getWidth(size - 1) / 2) - 1, y: pos.y + this._getHeight(size - 1) });
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + parseInt(this._getWidth(size - 1) / 2) + 1, y: pos.y + this._getHeight(size - 1) });

        // Bottom
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - parseInt(this._getWidth(size - 1) / 2) - 1, y: pos.y - this._getHeight(size - 1) });
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + parseInt(this._getWidth(size - 1) / 2) + 1, y: pos.y - this._getHeight(size - 1) });
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }

        let size = n;
        if (config && config.size && config.size > n) {
            size = config.size;
        }

        let board = Utils.createBoard(this._getWidth(size), this._getHeight(size));
        this._sierpinski(n, size, board, { x: parseInt(this._getWidth(size) / 2.0), y: parseInt(this._getHeight(size) / 2.0) });
        return board.reverse();
    }

}

module.exports = {
    SierpinskiHexagon: SierpinskiHexagon,
};