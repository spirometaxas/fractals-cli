const { Rotations, Modes, LineTypes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class CantorSet {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 6,
        MODES: [ Modes.LINES, Modes.BLOCKS ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                SIZE: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.FLIP ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
            [Modes.BLOCKS]: {
                SIZE: true,
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
        return Math.pow(3, n);
    }

    getHeight(n, mode) {
        if (mode === Modes.BLOCKS) {
            return ((n + 1) * 2) - 1;
        } else {
            return n + 1;
        }
    }

    _drawLine(board, pos, size, mode) {
        for (let i = 0; i < this.getWidth(size); i++) {
            board[pos.y][pos.x - parseInt(this.getWidth(size) / 2.0) + i] = mode === Modes.BLOCKS ? Shapes.BLOCK : '─';
        }
    }

    _cantor(n, size, board, pos, mode, rotation) {
        this._drawLine(board, pos, size, mode);

        if (n > 0) {
            const direction = rotation === Rotations.FLIP ? 1 : -1;
            const amount = mode === Modes.BLOCKS ? 2 : 1;
            this._cantor(n - 1, size - 1, board, { x: pos.x - this.getWidth(size - 1), y: pos.y + (direction * amount) }, mode, rotation);
            this._cantor(n - 1, size - 1, board, { x: pos.x + this.getWidth(size - 1), y: pos.y + (direction * amount) }, mode, rotation);
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

        const mode = config && config.mode !== undefined && this.CONFIG.MODES.includes(config.mode) ? config.mode : this.CONFIG.MODES[0];
        const rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        const board = Utils.createBoard(this.getWidth(n), this.getHeight(n, mode));
        this._cantor(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: rotation === Rotations.FLIP ? 0 : this.getHeight(n, mode) - 1 }, mode, rotation);
        return board.reverse();
    }

}

module.exports = {
    CantorSet: CantorSet,
};