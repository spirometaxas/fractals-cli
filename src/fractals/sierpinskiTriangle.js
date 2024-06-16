const { Rotations, Modes, Shapes } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiTriangle {

    CONFIG = {
        MIN_N: 0,
        MODE_OPTIONS: {},
    }

    constructor() {
        this.CONFIG.MODES = [ Modes.SHAPES ];
        this.CONFIG.MODE_OPTIONS[Modes.SHAPES] = {
            SIZE: true,
            INVERSE: true,
            ROTATIONS: [ Rotations.STANDARD, Rotations.FLIP ],
            CHARACTER: true,
        };
    }

    _getWidth(n) {
        return Math.pow(2, n + 1) - 1;
    }

    _getHeight(n) {
        if (n < 0) {
            return 0;
        }
        return Math.pow(2, n);
    }

    _drawTriangle(board, pos, size) {
        var curW = this._getWidth(size);
        var startX = pos.x - parseInt(this._getWidth(size) / 2.0);
        var curY = pos.y;
        for (let i = 0; i < this._getHeight(size); i++) {
            for (let j = 0; j < curW; j++) {
                if (j % 2 === 0) {
                    board[curY][startX + j] = Shapes.TRIANGLE_UP;
                } else {
                    board[curY][startX + j] = Shapes.TRIANGLE_DOWN;
                }
            }
            curW -= 2;
            startX += 1;
            curY += 1;
        }
    }

    _drawInverseTriangle(board, pos, size) {
        var curW = 1;
        var startX = pos.x;
        var curY = pos.y;
        for (let i = 0; i < this._getHeight(size); i++) {
            for (let j = 0; j < curW; j++) {
                if (j % 2 === 0) {
                    board[curY][startX + j] = Shapes.TRIANGLE_DOWN;
                } else {
                    board[curY][startX + j] = Shapes.TRIANGLE_UP;
                }
            }
            curW += 2;
            startX -= 1;
            curY += 1;
        }
    }

    _sierpinskiS(n, size, board, pos, inverse=false) {
        if (n === 0) {
            if (!inverse) {
                this._drawTriangle(board, pos, size);
            }
            return;
        } else if (n > 0 && inverse) {
            this._drawInverseTriangle(board, pos, size - 1);
        }

        this._sierpinskiS(n - 1, size - 1, board, { x: pos.x - this._getWidth(size - 2) - 1, y: pos.y }, inverse);
        this._sierpinskiS(n - 1, size - 1, board, { x: pos.x + this._getWidth(size - 2) + 1, y: pos.y }, inverse);
        this._sierpinskiS(n - 1, size - 1, board, { x: pos.x, y: pos.y + this._getHeight(size - 1) }, inverse);
    }

    _sierpinskiF(n, size, board, pos, inverse=false) {
        if (n === 0) {
            if (!inverse) {
                this._drawInverseTriangle(board, { x: pos.x, y: pos.y - this._getHeight(size) + 1 }, size);
            }
            return;
        } else if (n > 0 && inverse) {
            this._drawTriangle(board, { x: pos.x, y: pos.y - this._getHeight(size - 1) + 1 }, size - 1);
        }

        this._sierpinskiF(n - 1, size - 1, board, { x: pos.x - this._getWidth(size - 2) - 1, y: pos.y }, inverse);
        this._sierpinskiF(n - 1, size - 1, board, { x: pos.x + this._getWidth(size - 2) + 1, y: pos.y }, inverse);
        this._sierpinskiF(n - 1, size - 1, board, { x: pos.x, y: pos.y - this._getHeight(size - 1) }, inverse);
    }

    _sierpinski(n, size, board, rotate, inverse=false) {
        if (rotate.toLowerCase() === Rotations.FLIP) {
            this._sierpinskiF(n, size, board, { x: parseInt(this._getWidth(size) / 2.0), y: this._getHeight(size) - 1 }, inverse);
        } else {
            this._sierpinskiS(n, size, board, { x: parseInt(this._getWidth(size) / 2.0), y: 0 }, inverse);
        }
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
        let rotate = config !== undefined && this.CONFIG.MODE_OPTIONS[Modes.SHAPES].ROTATIONS.includes(config.rotate) ? config.rotate : this.CONFIG.MODE_OPTIONS[Modes.SHAPES].ROTATIONS[0];

        let board = Utils.createBoard(this._getWidth(size), this._getHeight(size));
        this._sierpinski(n, size, board, rotate, inverse);
      
        return board.reverse();
    }

}

module.exports = {
    SierpinskiTriangle: SierpinskiTriangle,
};