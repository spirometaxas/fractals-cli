const { KochAntiSnowflake } = require('./kochAntiSnowflake');
const { Modes, Shapes, Rotations } = require('../constants');
const { Utils } = require('../utils');

class Triflake {

    CONFIG = {
        NAME: 'Triflake',
        KEY: 'triflake',
        MIN_N: 0,
        MODES: {},
    }

    constructor() {
        this.CONFIG.MODES[Modes.SHAPES] = {
            SIZE: true,
            ROTATIONS: [ Rotations.STANDARD, Rotations.FLIP ],
            CHARACTER: true,
        };
    }

    _getKochAntiSnowflakeWidth(n) {
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return 5;
        }
        return 3 * this._getKochAntiSnowflakeWidth(n - 1) + 2;
    }

    _getWidth(n) {
        return 2 * this._getKochAntiSnowflakeWidth(n) + 1;
    }

    _getKochAntiSnowflakeHeight(n) {
        if (n === 0) {
            return 1;
        }
        return parseInt(this._getKochAntiSnowflakeWidth(n) / 2) + 1;
    }

    _getHeight(n) {
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
      
        let size = n;
        if (config && config.size && config.size > n) {
            size = config.size;
        }

        let rotate = config !== undefined && this.CONFIG.MODES[Modes.SHAPES].ROTATIONS.includes(config.rotate) ? config.rotate : this.CONFIG.MODES[Modes.SHAPES].ROTATIONS[0];

        const triflakeBoard = Utils.createBoard(this._getWidth(size), this._getHeight(size));
        const antiSnowflakeBoard = new KochAntiSnowflake().create(n, { size: size, rotate: rotate });

        if (rotate === Rotations.FLIP) {
            this._insertAntiSnowflake({ x: 0, y: parseInt(this._getHeight(size) / 2) }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this._getWidth(size) / 2) + 1 , y: parseInt(this._getHeight(size) / 2) }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this._getWidth(size) / 4) + 1 , y: 0 }, antiSnowflakeBoard, triflakeBoard);
        } else {
            this._insertAntiSnowflake({ x: 0, y: 0 }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this._getWidth(size) / 2) + 1 , y: 0 }, antiSnowflakeBoard, triflakeBoard);
            this._insertAntiSnowflake({ x: parseInt(this._getWidth(size) / 4) + 1 , y: parseInt(this._getHeight(size) / 2) }, antiSnowflakeBoard, triflakeBoard);
        }

        return triflakeBoard.reverse();
    }

}

module.exports = {
    Triflake: Triflake,
};