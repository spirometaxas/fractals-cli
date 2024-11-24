const { Modes, Rotations, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class DragonCurve {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 12,
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
             0:  1,   1:   3,   2:   5,  3:  5,  4:  7,
             5: 15,   6:  23,   7:  25,  8: 31,  9: 63,
            10: 95,  11: 105,  12: 127,
        };
        return widths[n];
    }

    getHeight(n) {
        // Only return heights up to MAX_PREVIEW_N
        let heights = {
             0:  2,   1:  2,   2:  2,  3:  4,  4:  6,
             5:  7,   6:  8,   7: 16,  8: 24,  9: 27,
            10: 32,  11: 64,  12: 96,
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

    _drawCurve(board, pos, type, params) {
        if (type === 'right') {
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
        } else if (type === 'left') {
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
        } else if (type === 'up') {
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
        } else if (type === 'down') {
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
            this._drawCurve(board, queue[i].pos, queue[i].type, queue[i].params);
        }
    }

    _assignRelativePoints(queue) {
        var currentPoint = { x: 0, y: 0 };
        for (let i = 0; i < queue.length; i++) {
            queue[i].pos = { x: currentPoint.x, y: currentPoint.y };
            if (queue[i].type === 'left') {
                currentPoint = { x: currentPoint.x - 2, y: currentPoint.y };
            } else if (queue[i].type === 'right') {
                currentPoint = { x: currentPoint.x + 2, y: currentPoint.y };
            } else if (queue[i].type === 'up') {
                currentPoint = { x: currentPoint.x, y: currentPoint.y + 1 };
            } else if (queue[i].type === 'down') {
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

    _getNextType(type) {
        if (type === 'down') {
            return 'left';
        } else if (type === 'left') {
            return 'up';
        } else if (type === 'up') {
            return 'right';
        } else if (type === 'right') {
            return 'down';
        }
        return 'none';
    }

    _getNextInverseType(type) {
        if (type === 'down') {
            return 'right';
        } else if (type === 'left') {
            return 'down';
        } else if (type === 'up') {
            return 'left';
        } else if (type === 'right') {
            return 'up';
        }
        return 'none';
    }

    _getOppositeType(type) {
        if (type === 'down') {
            return 'up';
        } else if (type === 'left') {
            return 'right';
        } else if (type === 'up') {
            return 'down';
        } else if (type === 'right') {
            return 'left';
        }
        return 'none';
    }

    _addEndParams(queue) {
        for (let i = 0; i < queue.length; i++) {
            queue[i].params = {};

            if (i === 0) {
                queue[i].params.end1 = this._getOppositeType(queue[i].type);
            } else {
                queue[i].params.end1 = this._getOppositeType(queue[i - 1].type);
            }

            if (i === queue.length - 1) {
                queue[i].params.end2 = queue[i].type;
            } else {
                queue[i].params.end2 = queue[i + 1].type;
            }
        }
    }

    _dragon(n, step, type, inverse=false) {
        let queue = [ type ];
        let currentStep = 1;
        while (n > 0) {
            let nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                nextQueue.push({ step: currentStep, type: inverse ? this._getNextInverseType(queue[queue.length - i - 1].type) : this._getNextType(queue[queue.length - i - 1].type) });
            }
            queue.push(...nextQueue);
            n--;
            currentStep++;
        }

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
            board = this._dragon(n, step, { step: 0, type: 'right'}, inverse);
        } else if (rotation === Rotations.RIGHT) {
            board = this._dragon(n, step, { step: 0, type: 'left'}, inverse);
        } else if (rotation === Rotations.FLIP) {
            board = this._dragon(n, step, { step: 0, type: 'up'}, inverse);
        } else {
            board = this._dragon(n, step, { step: 0, type: 'down'}, inverse);
        }
  
        return board.reverse();
    }

}

module.exports = {
    DragonCurve: DragonCurve,
}