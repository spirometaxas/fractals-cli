const { Rotations, Modes, VerticalAlign, HorizontalAlign } = require('../constants');
const { LineTypes } = require('../characters.js');
const { HilbertCurve } = require('./hilbertCurve');
const { Utils } = require('../utils');

class MooreCurve {

    CONFIG = {
        MIN_N: 1,
        MAX_PREVIEW_N: 6,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT, Rotations.FLIP ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        if (n < 1) {
            return 0;
        }
        return Math.pow(2, n + 1) - 1;
    }

    getHeight(n) {
        if (n < 1) {
            return 0;
        }
        return Math.pow(2, n);
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

        let hilbertCurve = new HilbertCurve();

        if (step === 1) {
            return hilbertCurve.create(n, { step: step, rotation: rotation });
        }

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));

        if (rotation === Rotations.LEFT) {
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: this.getHeight(n) / 2 }, Rotations.STANDARD, { end1: 'down', end2: 'right' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: 0 }, Rotations.FLIP, { end1: 'up', end2: 'right' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: this.getHeight(n) / 2 }, Rotations.STANDARD, { end1: 'left', end2: 'right' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: 0 }, Rotations.FLIP, { end1: 'left', end2: 'right' });
        } else if (rotation === Rotations.RIGHT) {
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: this.getHeight(n) / 2 }, Rotations.STANDARD, { end1: 'left', end2: 'right' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: 0 }, Rotations.FLIP, { end1: 'left', end2: 'right' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: this.getHeight(n) / 2 }, Rotations.STANDARD, { end1: 'left', end2: 'down' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: 0 }, Rotations.FLIP, { end1: 'left', end2: 'up' });
        } else if (rotation === Rotations.FLIP) {
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: this.getHeight(n) / 2 }, Rotations.LEFT, { end1: 'up', end2: 'down' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: 0 }, Rotations.LEFT, { end1: 'up', end2: 'right' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: this.getHeight(n) / 2 }, Rotations.RIGHT, { end1: 'up', end2: 'down' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: 0 }, Rotations.RIGHT, { end1: 'up', end2: 'left' });
        } else {
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: this.getHeight(n) / 2 }, Rotations.LEFT, { end1: 'right', end2: 'down' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: 0, y: 0 }, Rotations.LEFT, { end1: 'up', end2: 'down' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: this.getHeight(n) / 2 }, Rotations.RIGHT, { end1: 'left', end2: 'down' });
            hilbertCurve._hilbert(step - 1, n - 1, board, { x: parseInt(this.getWidth(n) / 2) + 1, y: 0 }, Rotations.RIGHT, { end1: 'up', end2: 'down' });
        }

        return board.reverse();
    }
}

module.exports = {
    MooreCurve: MooreCurve,
};