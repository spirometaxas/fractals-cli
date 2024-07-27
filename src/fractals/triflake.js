const { KochAntiSnowflake } = require('./kochAntiSnowflake');
const { Modes, Shapes, Rotations, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class Triflake {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 3,
        MODES: [ Modes.SHAPES ],
        MODE_OPTIONS: {
            [Modes.SHAPES]: {
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

    _getKochAntiSnowflakeWidth(n) {
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return 5;
        }
        return 3 * this._getKochAntiSnowflakeWidth(n - 1) + 2;
    }

    getWidth(n) {
        return 2 * this._getKochAntiSnowflakeWidth(n) + 1;
    }

    _getKochAntiSnowflakeHeight(n) {
        if (n === 0) {
            return 1;
        }
        return parseInt(this._getKochAntiSnowflakeWidth(n) / 2) + 1;
    }

    getHeight(n) {
        return this._getKochAntiSnowflakeHeight(n) * 2;
    }

    _insertAntiSnowflake(position, antiSnowflakeBoard, triflakeBoard) {
        for (let i = 0; i < antiSnowflakeBoard.length; i++) {
            for (let j = 0; j < antiSnowflakeBoard[i].length; j++) {
                triflakeBoard[position.y + (antiSnowflakeBoard.length - i - 1)][position.x + j] = antiSnowflakeBoard[i][j];
            }
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

        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[Modes.SHAPES].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[Modes.SHAPES].ROTATIONS[0];

        const triflakeBoard = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        const antiSnowflakeBoard = new KochAntiSnowflake().create(n, { step: step, rotation: rotation });

        if (rotation === Rotations.FLIP) {
            this._insertAntiSnowflake({ x: 0, y: parseInt(this.getHeight(n) / 2) }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this.getWidth(n) / 2) + 1 , y: parseInt(this.getHeight(n) / 2) }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this.getWidth(n) / 4) + 1 , y: 0 }, antiSnowflakeBoard, triflakeBoard);
        } else {
            this._insertAntiSnowflake({ x: 0, y: 0 }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this.getWidth(n) / 2) + 1 , y: 0 }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this.getWidth(n) / 4) + 1 , y: parseInt(this.getHeight(n) / 2) }, antiSnowflakeBoard, triflakeBoard);
        }

        return triflakeBoard.reverse();
    }

}

module.exports = {
    Triflake: Triflake,
};