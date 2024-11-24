const { Modes, Rotations, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiMaze {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 6,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                INVERSE: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        return Math.pow(2, n + 1);
    }

    getHeight(n) {
        if (n < 0) {
            return 0;
        }
        return Math.pow(2, n);
    }

    _drawLine(board, pos, size, rotation) {
        if (rotation === Rotations.STANDARD) {
            for (var i = 0; i < this.getWidth(size); i++) {
                board[pos.y][pos.x + i] = '_';
            }
        } else if (rotation === Rotations.LEFT) {
            for (var i = 0; i < this.getHeight(size); i++) {
                board[pos.y + i][pos.x + this.getWidth(size) - i - 1] = '╲';
            }
        } else if (rotation === Rotations.RIGHT) {
            for (var i = 0; i < this.getHeight(size); i++) {
                board[pos.y + i][pos.x + i] = '╱';
            }
        }
    }

    _sierpinski(n, size, board, pos, inverse, rotation) {
        if (n === 0) {
            this._drawLine(board, pos, size, rotation);
            return;
        }

        if (inverse) {
            this._sierpinski(n - 1, size - 1, board, { x: pos.x  + this.getWidth(size - 1), y: pos.y }, inverse, Rotations.STANDARD);
            this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y }, inverse, Rotations.RIGHT);
            this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 2), y: pos.y + this.getHeight(size - 1) }, inverse, Rotations.LEFT);
        } else {
            this._sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y }, inverse, Rotations.STANDARD);
            this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 2), y: pos.y + this.getHeight(size - 1) }, inverse, Rotations.RIGHT);
            this._sierpinski(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y }, inverse, Rotations.LEFT);
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

        let mode = this.CONFIG.MODES[0];
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];
        let inverse = config !== undefined && config.inverse === true;

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        
        this._sierpinski(step, n, board, { x: 0, y: 0 }, inverse, rotation);
          
        return board.reverse();
    }

}

module.exports = {
    SierpinskiMaze: SierpinskiMaze,
}