const { Modes, Rotations, VerticalAlign, HorizontalAlign } = require('../constants');
const { LineTypes } = require('../characters.js');
const { Utils } = require('../utils');

class FibonacciWordFractal {

    CONFIG = {
        MIN_N: 1,
        MAX_PREVIEW_N: 16,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                INVERSE: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT, Rotations.FLIP ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.CENTER,
        DEFAULT_Y: VerticalAlign.CENTER,
    }

    getWidth(n) {
        // Only return widths up to MAX_PREVIEW_N
        let widths = {
             1:  3,   2:   3,   3:   3,   4:   3,
             5:  5,   6:  11,   7:  15,   8:  23,
             9: 23,  10:  23,  11:  25,  12:  59,
            13: 83,  14: 139,  15: 139,  16: 139,
        };
        return widths[n];
    }

    getHeight(n) {
        // Only return heights up to MAX_PREVIEW_N
        let heights = {
             1:  1,   2:  2,   3:  3,   4:   4,
             5:  5,   6:  5,   7:  5,   8:   6,
             9: 13,  10: 18,  11: 29,  12:  29,
            13: 29,  14: 30,  15: 71,  16: 100,
        };
        return heights[n];
    }

    _insertCharacter(board, pos, character) {
        if (board[pos.y][pos.x] !== ' ' && board[pos.y][pos.x] !== character) {
            board[pos.y][pos.x] = '┼';
        } else {
            board[pos.y][pos.x] = character;
        }
    }

    _drawCurve(board, pos, direction, params) {
        if (direction === 'right') {
            board[pos.y][pos.x + 1] = '─';

            if (params && params.end1 === 'left') {
                this._insertCharacter(board, pos, '─');
            }
            if (params && params.end1 === 'up') {
                this._insertCharacter(board, pos, '└');
            }
            if (params && params.end1 === 'down') {
                this._insertCharacter(board, pos, '┌');
            }

            if (params && params.end2 === 'right') {
                this._insertCharacter(board, { x: pos.x + 2, y: pos.y }, '─');
            }
            if (params && params.end2 === 'up') {
                this._insertCharacter(board, { x: pos.x + 2, y: pos.y }, '┘');
            }
            if (params && params.end2 === 'down') {
                this._insertCharacter(board, { x: pos.x + 2, y: pos.y }, '┐');
            }
        } else if (direction === 'left') {
            board[pos.y][pos.x - 1] = '─';

            if (params && params.end1 === 'right') {
                this._insertCharacter(board, pos, '─');
            }
            if (params && params.end1 === 'up') {
                this._insertCharacter(board, pos, '┘');
            }
            if (params && params.end1 === 'down') {
                this._insertCharacter(board, pos, '┐');
            }

            if (params && params.end2 === 'left') {
                this._insertCharacter(board, { x: pos.x - 2, y: pos.y }, '─');
            }
            if (params && params.end2 === 'up') {
                this._insertCharacter(board, { x: pos.x - 2, y: pos.y }, '└');
            }
            if (params && params.end2 === 'down') {
                this._insertCharacter(board, { x: pos.x - 2, y: pos.y }, '┌');
            }
        } else if (direction === 'up') {
            if (params && params.end1 === 'left') {
                this._insertCharacter(board, pos, '┘');
            }
            if (params && params.end1 === 'right') {
                this._insertCharacter(board, pos, '└');
            }
            if (params && params.end1 === 'down') {
                this._insertCharacter(board, pos, '│');
            }

            if (params && params.end2 === 'left') {
                this._insertCharacter(board, { x: pos.x, y: pos.y + 1 }, '┐');
            }
            if (params && params.end2 === 'right') {
                this._insertCharacter(board, { x: pos.x, y: pos.y + 1 }, '┌');
            }
            if (params && params.end2 === 'up') {
                this._insertCharacter(board, { x: pos.x, y: pos.y + 1 }, '│');
            }
        } else if (direction === 'down') {
            if (params && params.end1 === 'left') {
                this._insertCharacter(board, pos, '┐');
            }
            if (params && params.end1 === 'right') {
                this._insertCharacter(board, pos, '┌');
            }
            if (params && params.end1 === 'up') {
                this._insertCharacter(board, pos, '│');
            }

            if (params && params.end2 === 'left') {
                this._insertCharacter(board, { x: pos.x, y: pos.y - 1 }, '┘');
            }
            if (params && params.end2 === 'right') {
                this._insertCharacter(board, { x: pos.x, y: pos.y - 1 }, '└');
            }
            if (params && params.end2 === 'down') {
                this._insertCharacter(board, { x: pos.x, y: pos.y - 1 }, '│');
            }
        }
    }

    _drawCurves(queue, board, pos) {
        for (let i = 0; i < queue.length; i++) {
            this._drawCurve(board, queue[i].pos, queue[i].direction, queue[i].params);
        }
    }

    _assignRelativePoints(queue) {
        var currentPoint = { x: 0, y: 0 };
        for (let i = 0; i < queue.length; i++) {
            queue[i].pos = { x: currentPoint.x, y: currentPoint.y };
            if (queue[i].direction === 'left') {
                currentPoint = { x: currentPoint.x - 2, y: currentPoint.y };
            } else if (queue[i].direction === 'right') {
                currentPoint = { x: currentPoint.x + 2, y: currentPoint.y };
            } else if (queue[i].direction === 'up') {
                currentPoint = { x: currentPoint.x, y: currentPoint.y + 1 };
            } else if (queue[i].direction === 'down') {
                currentPoint = { x: currentPoint.x, y: currentPoint.y - 1 };
            }
        }
        return currentPoint;
    }

    _getDimensions(queue, finalPoint) {
        var lowestX = Number.MAX_VALUE;
        var lowestY = Number.MAX_VALUE;
        var largestX = Number.MIN_VALUE;
        var largestY = Number.MIN_VALUE;
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].pos.x < lowestX) {
                lowestX = queue[i].pos.x;
            }
            if (queue[i].pos.y < lowestY) {
                lowestY = queue[i].pos.y;
            }

            if (queue[i].pos.x > largestX) {
                largestX = queue[i].pos.x;
            }
            if (queue[i].pos.y > largestY) {
                largestY = queue[i].pos.y;
            }
        }

        if (finalPoint.x < lowestX) {
            lowestX = finalPoint.x;
        }
        if (finalPoint.y < lowestY) {
            lowestY = finalPoint.y;
        }

        if (finalPoint.x > largestX) {
            largestX = finalPoint.x;
        }
        if (finalPoint.y > largestY) {
            largestY = finalPoint.y;
        }

        return { 
            pos: { x: Math.abs(lowestX), y: Math.abs(lowestY) }, 
            w: (largestX - lowestX) + 1, 
            h: (largestY - lowestY) + 1
        };
    }

    _turnLeft(currentDirection) {
        if (currentDirection === 'up') {
            return 'left';
        } else if (currentDirection === 'down') {
            return 'right';
        } else if (currentDirection === 'left') {
            return 'down';
        } else {
            return 'up';
        }
    }

    _turnRight(currentDirection) {
        if (currentDirection === 'up') {
            return 'right';
        } else if (currentDirection === 'down') {
            return 'left';
        } else if (currentDirection === 'left') {
            return 'up';
        } else {
            return 'down';
        }
    }

    _getOppositeDirection(direction) {
        if (direction === 'down') {
            return 'up';
        } else if (direction === 'left') {
            return 'right';
        } else if (direction === 'up') {
            return 'down';
        } else if (direction === 'right') {
            return 'left';
        }
        return 'none';
    }

    _addEndParams(queue) {
        for (let i = 0; i < queue.length; i++) {
            queue[i].params = {};

            if (i === 0) {
                queue[i].params.end1 = this._getOppositeDirection(queue[i].direction);
            } else {
                queue[i].params.end1 = this._getOppositeDirection(queue[i - 1].direction);
            }

            if (i === queue.length - 1) {
                queue[i].params.end2 = queue[i].direction;
            } else {
                queue[i].params.end2 = queue[i + 1].direction;
            }
        }
    }

    _addDirections(words, direction, inverse) {
        let currentDirection = direction;
        for (let index = 0; index < words.length; index++) {
            words[index].direction = currentDirection;
            if (words[index].value === 0) {
                if ((index + 1) % 2 === 0) {
                    currentDirection = inverse ? this._turnRight(currentDirection) : this._turnLeft(currentDirection);
                } else {
                    currentDirection = inverse ? this._turnLeft(currentDirection) : this._turnRight(currentDirection);
                }
            }
        }
    }

    _cloneSection(section, newStep) {
        let clone = [];
        for (let part of section) {
            clone.push({ value: part.value, step: newStep ? newStep : part.step });
        }
        return clone;
    }

    _words(n) {
        let first = [ { value: 0, step: 1 } ];
        let second = [ { value: 0, step: 1 }, { value: 1, step: 2 } ];
        if (n === 1) {
            return first;
        } else if (n === 2) {
            return second;
        }

        for (let step = 3; step <= n; step++) {
            let temp = this._cloneSection(second);
            second = [
                ...second,
                ...this._cloneSection(first, step),
            ];
            first = temp;
        }

        return second;
    }

    _fibonacci(n, step, direction, inverse=false) {
        let queue = this._words(n);
        this._addDirections(queue, direction, inverse);

        const finalPoint = this._assignRelativePoints(queue);
        const dimensions = this._getDimensions(queue, finalPoint);

        for (let i = 0; i < queue.length; i++) {
            queue[i].pos = { x: dimensions.pos.x + queue[i].pos.x, y: dimensions.pos.y + queue[i].pos.y };
        }

        let board = Utils.createBoard(dimensions.w, dimensions.h);

        let stepQueue = queue.filter(item => item.step <= step);
        this._addEndParams(stepQueue);

        this._drawCurves(stepQueue, board, dimensions.pos);

        return board;
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

        let board;
        if (rotation === Rotations.LEFT) {
            board = this._fibonacci(n, step, 'down', inverse);
        } else if (rotation === Rotations.RIGHT) {
            board = this._fibonacci(n, step, 'up', inverse);
        } else if (rotation === Rotations.FLIP) {
            board = this._fibonacci(n, step, 'right', inverse);
        } else {
            board = this._fibonacci(n, step, 'left', inverse);
        }
  
        return board.reverse();
    }

}

module.exports = {
    FibonacciWordFractal: FibonacciWordFractal,
}