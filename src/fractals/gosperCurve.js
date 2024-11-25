const { Modes, Rotations, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class GosperCurve {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                INVERSE: true,
                ROTATIONS: [ Rotations.STANDARD, Rotations.LEFT, Rotations.RIGHT ],
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD ],
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
            0: 2,  1: 5,  2: 15,  3: 40,  4: 114,
        };
        return widths[n];
    }

    getHeight(n) {
        // Only return heights up to MAX_PREVIEW_N
        let heights = {
             0: 1,  1: 3,  2: 9,  3: 25,  4: 63,
        };
        return heights[n];
    }

    _drawCurve(board, pos, type, params) {
        if (type === 'R') {
            board[pos.y][pos.x] = '_';
            board[pos.y][pos.x + 1] = '_';
        } else if (type === 'L') {
            board[pos.y][pos.x] = '_';
            board[pos.y][pos.x - 1] = '_';
        } else if (type === 'UR' || type === 'DL') {
            board[pos.y][pos.x] = '╱';
        } else if (type === 'UL' || type === 'DR') {
            board[pos.y][pos.x] = '╲';
        }
    }

    _drawCurves(queue, board, pos) {
        for (let i = 0; i < queue.length; i++) {
            this._drawCurve(board, queue[i].pos, queue[i].type, queue[i].params);
        }
    }

    _getPositionDiff(prevType, currType) {
        if (prevType === 'L') {
            if (currType === 'L') {
                return { x: -2, y: 0 };
            } else if (currType === 'DL') {
                return { x: -2, y: -1 };
            } else if (currType === 'DR') {
                return { x: -1, y: -1 };
            } else if (currType === 'UL') {
                return { x: -2, y: 0 };
            }
        } else if (prevType === 'R') {
            if (currType === 'R') {
                return { x: 2, y: 0 };
            } else if (currType === 'DL') {
                return { x: 1, y: -1 };
            } else if (currType === 'DR') {
                return { x: 2, y: -1 };
            } else if (currType === 'UR') {
                return { x: 2, y: 0 };
            }
        } else if (prevType === 'UL') {
            if (currType === 'L') {
                return { x: -1, y: 1 };
            } else if (currType === 'R') {
                return { x: 0, y: 1 };
            } else if (currType === 'UL') {
                return { x: -1, y: 1 };
            } else if (currType === 'UR') {
                return { x: 0, y: 1 };
            } else if (currType === 'DL') {
                return { x: -1, y: 0 };
            }
        } else if (prevType === 'UR') {
            if (currType === 'L') {
                return { x: 0, y: 1 };
            } else if (currType === 'R') {
                return { x: 1, y: 1 };
            } else if (currType === 'UL') {
                return { x: 0, y: 1 };
            } else if (currType === 'UR') {
                return { x: 1, y: 1 };
            } else if (currType === 'DR') {
                return { x: 1, y: 0 };
            }
        } else if (prevType === 'DL') {
            if (currType === 'L') {
                return { x: -1, y: 0 };
            } else if (currType === 'UL') {
                return { x: -1, y: 0 };
            } else if (currType === 'DL') {
                return { x: -1, y: -1 };
            } else if (currType === 'DR') {
                return { x: 0, y: -1 };
            }
        } else if (prevType === 'DR') {
            if (currType === 'R') {
                return { x: 1, y: 0 };
            } else if (currType === 'UR') {
                return { x: 1, y: 0 };
            } else if (currType === 'DL') {
                return { x: 0, y: -1 };
            } else if (currType === 'DR') {
                return { x: 1, y: -1 };
            }
      }

      return { x: 0, y: 0 };
    }

    _assignRelativePoints(queue) {
        queue[0].pos = { x: 0, y: 0 };
        for (let i = 1; i < queue.length; i++) {
            const diff = this._getPositionDiff(queue[i - 1].type, queue[i].type);
            queue[i].pos = { x: queue[i - 1].pos.x + diff.x, y: queue[i - 1].pos.y + diff.y };
        }

        const last = queue[queue.length - 1];
        if (last.type === 'L') {
            return { x: last.pos.x - 1, y: last.pos.y };
        } else if (last.type === 'R') {
            return { x: last.pos.x + 1, y: last.pos.y };
        }
        return last.pos;
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

    _gosper(n, queue, type) {
        if (n <= 0) {
            // Add to queue
            queue.push({ type: type });
        } else {
            if (type === 'L') {
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'UL');
                this._gosper(n - 1, queue, 'R');
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'DL');
            } else if (type === 'R') {
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'R');
                this._gosper(n - 1, queue, 'R');
                this._gosper(n - 1, queue, 'DL');
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'R');
            } else if (type === 'UL') {
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'UL');
                this._gosper(n - 1, queue, 'UL');
                this._gosper(n - 1, queue, 'R');
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'UL');
            } else if (type === 'UR') {
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'R');
                this._gosper(n - 1, queue, 'DL');
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'UL');
            } else if (type === 'DL') {
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'DL');
                this._gosper(n - 1, queue, 'DL');
                this._gosper(n - 1, queue, 'UL');
                this._gosper(n - 1, queue, 'UR');
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'DL');
            } else if (type === 'DR') {
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'DL');
                this._gosper(n - 1, queue, 'UL');
                this._gosper(n - 1, queue, 'L');
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'DR');
                this._gosper(n - 1, queue, 'R');
            }
        }
    }

    _gosperInverse(n, queue, type) {
        if (n <= 0) {
            // Add to queue
            queue.push({ type: type });
        } else {
            if (type === 'L') {
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'L');
                this._gosperInverse(n - 1, queue, 'L');
                this._gosperInverse(n - 1, queue, 'DR');
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'L');
            } else if (type === 'R') {
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'UR');
                this._gosperInverse(n - 1, queue, 'L');
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'DR');
            } else if (type === 'UL') {
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'L');
                this._gosperInverse(n - 1, queue, 'DR');
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'UR');
            } else if (type === 'UR') {
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'UR');
                this._gosperInverse(n - 1, queue, 'UR');
                this._gosperInverse(n - 1, queue, 'L');
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'UR');
            } else if (type === 'DL') {
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'DR');
                this._gosperInverse(n - 1, queue, 'UR');
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'L');
            } else if (type === 'DR') {
                this._gosperInverse(n - 1, queue, 'DL');
                this._gosperInverse(n - 1, queue, 'DR');
                this._gosperInverse(n - 1, queue, 'DR');
                this._gosperInverse(n - 1, queue, 'UR');
                this._gosperInverse(n - 1, queue, 'UL');
                this._gosperInverse(n - 1, queue, 'R');
                this._gosperInverse(n - 1, queue, 'DR');
            }
        }
    }

    gosper(n, type, inverse) {
        let queue = [];
        if (inverse) {
            this._gosperInverse(n, queue, type);
        } else {
            this._gosper(n, queue, type);
        }
      

        const finalPoint = this._assignRelativePoints(queue);
        const dimensions = this._getDimensions(queue, finalPoint);

        for (let i = 0; i < queue.length; i++) {
            queue[i].pos = { x: dimensions.pos.x + queue[i].pos.x, y: dimensions.pos.y + queue[i].pos.y };
        }

        let board = Utils.createBoard(dimensions.w, dimensions.h);
        this._drawCurves(queue, board, dimensions.pos);

        return board;
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }

        let mode = this.CONFIG.MODES[0];
        let rotation = config !== undefined && this.CONFIG.MODE_OPTIONS[mode].ROTATIONS.includes(config.rotation) ? config.rotation : this.CONFIG.MODE_OPTIONS[mode].ROTATIONS[0];
        let inverse = config !== undefined && config.inverse === true;

        let board;
        if (rotation === Rotations.LEFT) {
            board = this.gosper(n, inverse ? 'UL' : 'DR', inverse);
        } else if (rotation === Rotations.RIGHT) {
            board = this.gosper(n, inverse ? 'UR': 'DL', inverse);
        } else {
            board = this.gosper(n, inverse ? 'R' : 'L', inverse);
        }
  
        return board.reverse();
    }

}

module.exports = {
    GosperCurve: GosperCurve,
}