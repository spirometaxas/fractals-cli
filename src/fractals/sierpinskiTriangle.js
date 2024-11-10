const { Rotations, Modes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiTriangle {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 6,
        MODES: [ Modes.SHAPES ],
        MODE_OPTIONS: {
            [Modes.SHAPES]: {
                STEP: true,
                INVERSE: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.FLIP ],
                CHARACTER: true,
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        return Math.pow(2, n + 1) - 1;
    }

    getHeight(n) {
        if (n < 0) {
            return 0;
        }
        return Math.pow(2, n);
    }

    _drawTriangle(board, pos, size) {
        var curW = this.getWidth(size);
        var startX = pos.x - parseInt(this.getWidth(size) / 2.0);
        var curY = pos.y;
        for (let i = 0; i < this.getHeight(size); i++) {
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
        for (let i = 0; i < this.getHeight(size); i++) {
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

        this._sierpinskiS(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 2) - 1, y: pos.y }, inverse);
        this._sierpinskiS(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 2) + 1, y: pos.y }, inverse);
        this._sierpinskiS(n - 1, size - 1, board, { x: pos.x, y: pos.y + this.getHeight(size - 1) }, inverse);
    }

    _sierpinskiF(n, size, board, pos, inverse=false) {
        if (n === 0) {
            if (!inverse) {
                this._drawInverseTriangle(board, { x: pos.x, y: pos.y - this.getHeight(size) + 1 }, size);
            }
            return;
        } else if (n > 0 && inverse) {
            this._drawTriangle(board, { x: pos.x, y: pos.y - this.getHeight(size - 1) + 1 }, size - 1);
        }

        this._sierpinskiF(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 2) - 1, y: pos.y }, inverse);
        this._sierpinskiF(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 2) + 1, y: pos.y }, inverse);
        this._sierpinskiF(n - 1, size - 1, board, { x: pos.x, y: pos.y - this.getHeight(size - 1) }, inverse);
    }

    _sierpinski(n, size, board, rotate, inverse=false) {
        if (rotate.toLowerCase() === Rotations.FLIP) {
            this._sierpinskiF(n, size, board, { x: parseInt(this.getWidth(size) / 2.0), y: this.getHeight(size) - 1 }, inverse);
        } else {
            this._sierpinskiS(n, size, board, { x: parseInt(this.getWidth(size) / 2.0), y: 0 }, inverse);
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

        let inverse = config !== undefined && config.inverse === true;
        let mode = this.CONFIG.MODES[0];
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        this._sierpinski(step, n, board, rotation, inverse);
      
        return board.reverse();
    }

}

module.exports = {
    SierpinskiTriangle: SierpinskiTriangle,
};