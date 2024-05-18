const { KochSnowflake } = require('./kochSnowflake');
const { Modes, Shapes, Rotations, SPACE } = require('../constants');
const { Utils } = require('../utils');

class KochAntiSnowflake {

    CONFIG = {
        NAME: 'Koch Anti-Snowflake',
        KEY: 'koch_antisnowflake',
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

    _getWidth(n) {
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return 5;
        }
        return 3 * this._getWidth(n - 1) + 2;
    }

    _getHeight(n) {
        if (n === 0) {
            return 1;
        }
        return parseInt(this._getWidth(n) / 2) + 1;
    }

    _drawTriangle(board, pos, size) {
        var curW = this._getWidth(size);
        var startX = pos.x - parseInt(curW / 2.0);
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

    _cutSnowflakeTop(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        for (let i = 0; i < snowflakeTopLength; i++) {
            for (let j = 0; j < snowflakeBoard[i].length; j++) {
                if (snowflakeBoard[snowflakeTopLength - i - 1][j] !== SPACE) {
                    triangleBoard[i][j] = SPACE;
                }
            }
        }
    }

    _cutSnowflakeBottomLeft(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[snowflakeBoard.length - i - 1][snowflakeSideLength + j + 1] !== SPACE) {
                    triangleBoard[i][j] = SPACE;
                }
            }
        }
    }

    _cutSnowflakeBottomRight(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[snowflakeBoard.length - i - 1][j] !== SPACE) {
                    triangleBoard[i][snowflakeSideLength + j + 1] = SPACE;
                }
            }
        }
    }

    _cutSnowflakeBottom(triangleBoard, snowflakeBoard) {
        const snowflakeBottomLength = parseInt(snowflakeBoard.length / 4);
        for (let i = 0; i < snowflakeBottomLength; i++) {
            for (let j = 0; j < snowflakeBoard[i].length; j++) {
                if (snowflakeBoard[snowflakeBoard.length - snowflakeBottomLength + i][j] !== SPACE) {
                    triangleBoard[triangleBoard.length - i - 1][j] = SPACE; 
                }
            }
        }
    }

    _cutSnowflakeTopLeft(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[i][snowflakeSideLength + j + 1] !== SPACE) {
                    triangleBoard[triangleBoard.length - i - 1][j] = SPACE;
                }
            }
        }
    }

    _cutSnowflakeTopRight(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[i][j] !== SPACE) {
                    triangleBoard[triangleBoard.length - i - 1][snowflakeSideLength + j + 1] = SPACE;
                }
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

        const triangleBoard = Utils.createBoard(this._getWidth(size), this._getHeight(size));
        if (rotate === Rotations.FLIP) {
            this._drawInverseTriangle(triangleBoard, { x: parseInt(this._getWidth(size) / 2.0), y: 0 }, size);
        } else {
            this._drawTriangle(triangleBoard, { x: parseInt(this._getWidth(size) / 2.0), y: 0 }, size);
        }

        if (n > 0) {
            const snowflakeBoard = new KochSnowflake().create(n, { size: size });
            if (rotate === Rotations.FLIP) {
                this._cutSnowflakeBottom(triangleBoard, snowflakeBoard);
                this._cutSnowflakeTopLeft(triangleBoard, snowflakeBoard);
                this._cutSnowflakeTopRight(triangleBoard, snowflakeBoard);
            } else {
                this._cutSnowflakeTop(triangleBoard, snowflakeBoard);
                this._cutSnowflakeBottomLeft(triangleBoard, snowflakeBoard);
                this._cutSnowflakeBottomRight(triangleBoard, snowflakeBoard);
            }
        }

        return triangleBoard.reverse();
    }

}

module.exports = {
    KochAntiSnowflake: KochAntiSnowflake,
};