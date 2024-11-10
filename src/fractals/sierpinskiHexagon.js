const { Modes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiHexagon {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 3,
        MODES: [ Modes.SHAPES ],
        MODE_OPTIONS: {
            [Modes.SHAPES]: {
                STEP: true,
                CHARACTER: true,
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
        }
        if (n === 0) {
          return 3;
        }
        return (this.getWidth(n - 1) * 3) + 2;
    }

    getHeight(n) {
        return Math.pow(3, n) * 2;
    }

    _drawHexagon(board, pos, size) {
        let width = this.getWidth(size);
        for (let i = 0; i < this.getHeight(size) / 2; i++) {
            let startX = pos.x - parseInt(width / 2) + i;
            for (let j = 0; j < width - (2 * i); j++) {
                if (j % 2 == 0) {
                    board[pos.y + i][startX + j] = Shapes.TRIANGLE_UP;
                } else {
                    board[pos.y + i][startX + j] = Shapes.TRIANGLE_DOWN;
                }
            }
        }
        for (let i = 0; i < this.getHeight(size) / 2; i++) {
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
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1) - 1, y: pos.y });
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1) + 1, y: pos.y });

        // Top
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - parseInt(this.getWidth(size - 1) / 2) - 1, y: pos.y + this.getHeight(size - 1) });
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + parseInt(this.getWidth(size - 1) / 2) + 1, y: pos.y + this.getHeight(size - 1) });

        // Bottom
        this._sierpinski(n - 1, size - 1, board, { x: pos.x - parseInt(this.getWidth(size - 1) / 2) - 1, y: pos.y - this.getHeight(size - 1) });
        this._sierpinski(n - 1, size - 1, board, { x: pos.x + parseInt(this.getWidth(size - 1) / 2) + 1, y: pos.y - this.getHeight(size - 1) });
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
        this._sierpinski(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) });
        return board.reverse();
    }

}

module.exports = {
    SierpinskiHexagon: SierpinskiHexagon,
};