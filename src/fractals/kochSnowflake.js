const { SierpinskiHexagon } = require('./sierpinskiHexagon');
const { Modes, Shapes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class KochSnowflake {

    CONFIG = {
        MIN_N: 0,
        MODE_OPTIONS: {},
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.CENTER,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    MARKER = '*'

    constructor() {
        this.CONFIG.MODES = [ Modes.SHAPES ];
        this.CONFIG.MODE_OPTIONS[Modes.SHAPES] = {
            SIZE: true,
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
        } else if (n === 1) {
            return 4;
        }
        return 3 * this._getHeight(n - 1);
    }

    _createMaskBoard(w, h) {
        let board = [];
        for (let i = 0; i < h; i++) {
            let row = [];
            for (let j = 0; j < w; j++) {
                if (i % 2 === 0) {
                    if (j % 2 === 0) {
                        row.push(Shapes.TRIANGLE_DOWN);
                    } else {
                        row.push(Shapes.TRIANGLE_UP);
                    }
                } else {
                    if (j % 2 === 0) {
                        row.push(Shapes.TRIANGLE_UP);
                    } else {
                        row.push(Shapes.TRIANGLE_DOWN);
                    }
                }
            }
            board.push(row);
        }
        return board;
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

    _isRowEmpty(row) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== Shapes.SPACE) {
                return false;
            }
        }
        return true;
    }

    _getLeftBuffer(board) {
        let buffer = Number.MAX_VALUE;
        for (let i = 0; i < board.length; i++) {
            let currentBuffer = 0;
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === Shapes.SPACE) {
                    currentBuffer++;
                } else {
                    break;
                }
            }
            if (currentBuffer < buffer) {
                buffer = currentBuffer;
            }
        }
        return buffer;
    }

    _getRightBuffer(board) {
        let buffer = Number.MAX_VALUE;
        for (let i = 0; i < board.length; i++) {
            let currentBuffer = 0;
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][board[i].length - j - 1] === Shapes.SPACE) {
                    currentBuffer++;
                } else {
                    break;
                }
            }
            if (currentBuffer < buffer) {
                buffer = currentBuffer;
            }
        }
        return buffer;
    }

    _trimBoard(board, size) {
        let targetHeight = this._getHeight(size);
        let bufferH = board.length - targetHeight;

        let targetWidth = this._getWidth(size);
        let bufferW = board[0].length - targetWidth;

        // Trim Top
        for (let i = 0; i < parseInt(bufferH / 2); i++) {
            board.shift();
        }

        // Trim Bottom
        for (let i = 0; i < parseInt(bufferH / 2); i++) {
            board.pop();
        }

        // Trim Left
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].slice(parseInt(bufferW / 2.0));
        }

        // Trim Right
        for (let i = 0; i < board.length; i++) {
            board[i].splice(board[i].length - parseInt(bufferW / 2.0));
        }
    }

    _isInside(point, hexagonBoard) {
        if (point.x < 0 || point.x >= hexagonBoard[0].length) {
            return false;
        }

        if (point.y < 0 || point.y >= hexagonBoard.length) {
            return false;
        }

        return true;
    }

    _isValidPoint(newPoint, hexagonBoard, snowflakeMaskBoard) {
        if (!this._isInside(newPoint, hexagonBoard)) {
            return false;
        }

        if (!(snowflakeMaskBoard[newPoint.y][newPoint.x] === Shapes.SPACE && hexagonBoard[newPoint.y][newPoint.x] === Shapes.SPACE)) {
            return false;
        }

        return true;
    }

    _isFilledPoint(newPoint, hexagonBoard) {
        if (!this._isInside(newPoint, hexagonBoard)) {
            return false;
        }

        return hexagonBoard[newPoint.y][newPoint.x] !== Shapes.SPACE;
    }

    _queueContains(queue, point) {
        return queue.filter(p => p.x === point.x && p.y === point.y).length > 0;
    }

    _findSnowflake(hexagonBoard, snowflakeMaskBoard) {
        let queue = [ { x: parseInt(hexagonBoard[0].length / 2.0), y: hexagonBoard.length / 2 } ];

        while (queue.length > 0) {
            let currentPos = queue.shift();
            if (currentPos) {
                snowflakeMaskBoard[currentPos.y][currentPos.x] = this.MARKER;

                // Left
                let left = { x: currentPos.x - 1, y: currentPos.y };
                if (this._isValidPoint(left, hexagonBoard, snowflakeMaskBoard) && !this._queueContains(queue, left)) {
                    queue.push(left);
                }

                // Right
                let right = { x: currentPos.x + 1, y: currentPos.y };
                if (this._isValidPoint(right, hexagonBoard, snowflakeMaskBoard) && !this._queueContains(queue, right)) {
                    queue.push(right);
                }

                if (this._isFilledPoint(left, hexagonBoard) && this._isFilledPoint(right, hexagonBoard)) {
                    continue;  // Don't continue up or down
                }

                // Top
                let top = { x: currentPos.x, y: currentPos.y + 1 };
                if (this._isValidPoint(top, hexagonBoard, snowflakeMaskBoard) && !this._queueContains(queue, top)) {
                    queue.push(top);
                }

                // Bottom
                let bottom = { x: currentPos.x, y: currentPos.y - 1 };
                if (this._isValidPoint(bottom, hexagonBoard, snowflakeMaskBoard) && !this._queueContains(queue, bottom)) {
                    queue.push(bottom);
                }
            }
        }
    }

    _applyMask(snowflakeMaskBoard, maskBoard) {
        for (let i = 0; i < snowflakeMaskBoard.length; i++) {
            for (let j = 0; j < snowflakeMaskBoard[i].length; j++) {
                if (snowflakeMaskBoard[i][j] === this.MARKER) {
                    snowflakeMaskBoard[i][j] = maskBoard[i][j];
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

        if (step === 0) {
            let triangleBoard = Utils.createBoard(this._getWidth(n), this._getHeight(n));
            this._drawTriangle(triangleBoard, { x: parseInt(this._getWidth(n) / 2.0), y: parseInt(this._getHeight(n) / 4.0) }, n);
            return triangleBoard.reverse();
        } else {
            let hexagonBoard = new SierpinskiHexagon().create(n, { step: step });
            let snowflakeMaskBoard = Utils.createBoard(hexagonBoard[0].length, hexagonBoard.length);
            this._findSnowflake(hexagonBoard, snowflakeMaskBoard);
            this._trimBoard(snowflakeMaskBoard, n);
            let maskBoard = this._createMaskBoard(snowflakeMaskBoard[0].length, snowflakeMaskBoard.length);
            this._applyMask(snowflakeMaskBoard, maskBoard);
            return snowflakeMaskBoard.reverse();
        }
    }

}

module.exports = {
    KochSnowflake: KochSnowflake,
};