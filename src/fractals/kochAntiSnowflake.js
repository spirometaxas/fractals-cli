const { KochSnowflake } = require('./kochSnowflake');
const { Modes, Rotations, VerticalAlign, HorizontalAlign } = require('../constants');
const { Shapes } = require('../characters.js');
const { Utils } = require('../utils');

class KochAntiSnowflake {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.SHAPES ],
        MODE_OPTIONS: {
            [Modes.SHAPES]: {
                STEP: true,
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
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return 5;
        }
        return 3 * this.getWidth(n - 1) + 2;
    }

    getHeight(n) {
        if (n === 0) {
            return 1;
        }
        return parseInt(this.getWidth(n) / 2) + 1;
    }

    _drawTriangle(board, pos, size) {
        var curW = this.getWidth(size);
        var startX = pos.x - parseInt(curW / 2.0);
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

    _cutSnowflakeTop(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        for (let i = 0; i < snowflakeTopLength; i++) {
            for (let j = 0; j < snowflakeBoard[i].length; j++) {
                if (snowflakeBoard[snowflakeTopLength - i - 1][j] !== Shapes.SPACE) {
                    triangleBoard[i][j] = Shapes.SPACE;
                }
            }
        }
    }

    _cutSnowflakeBottomLeft(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[snowflakeBoard.length - i - 1][snowflakeSideLength + j + 1] !== Shapes.SPACE) {
                    triangleBoard[i][j] = Shapes.SPACE;
                }
            }
        }
    }

    _cutSnowflakeBottomRight(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[snowflakeBoard.length - i - 1][j] !== Shapes.SPACE) {
                    triangleBoard[i][snowflakeSideLength + j + 1] = Shapes.SPACE;
                }
            }
        }
    }

    _cutSnowflakeBottom(triangleBoard, snowflakeBoard) {
        const snowflakeBottomLength = parseInt(snowflakeBoard.length / 4);
        for (let i = 0; i < snowflakeBottomLength; i++) {
            for (let j = 0; j < snowflakeBoard[i].length; j++) {
                if (snowflakeBoard[snowflakeBoard.length - snowflakeBottomLength + i][j] !== Shapes.SPACE) {
                    triangleBoard[triangleBoard.length - i - 1][j] = Shapes.SPACE; 
                }
            }
        }
    }

    _cutSnowflakeTopLeft(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[i][snowflakeSideLength + j + 1] !== Shapes.SPACE) {
                    triangleBoard[triangleBoard.length - i - 1][j] = Shapes.SPACE;
                }
            }
        }
    }

    _cutSnowflakeTopRight(triangleBoard, snowflakeBoard) {
        const snowflakeTopLength = parseInt(snowflakeBoard.length / 4);
        const snowflakeSideLength = parseInt(snowflakeBoard[0].length / 2);

        for (let i = 0; i < triangleBoard.length; i++) {
            for (let j = 0; j < snowflakeSideLength; j++) {
                if (snowflakeBoard[i][j] !== Shapes.SPACE) {
                    triangleBoard[triangleBoard.length - i - 1][snowflakeSideLength + j + 1] = Shapes.SPACE;
                }
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

        let mode = this.CONFIG.MODES[0];
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];

        const triangleBoard = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        if (rotation === Rotations.FLIP) {
            this._drawInverseTriangle(triangleBoard, { x: parseInt(this.getWidth(n) / 2.0), y: 0 }, n);
        } else {
            this._drawTriangle(triangleBoard, { x: parseInt(this.getWidth(n) / 2.0), y: 0 }, n);
        }

        if (step > 0) {
            const snowflakeBoard = new KochSnowflake().create(n, { step: step });
            if (rotation === Rotations.FLIP) {
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