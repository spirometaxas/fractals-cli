const { VerticalAlign, HorizontalAlign, Modes } = require('../constants');
const { LineTypes } = require('../characters.js');
const { Utils } = require('../utils');

class HTree {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 11,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                STEP: true,
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD, LineTypes.DOUBLE ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.LEFT,
        DEFAULT_Y: VerticalAlign.BOTTOM,
    }

    getWidth(n) {
        if (n < 0) {
            return 1;
        }
        if (n % 2 === 0) {
            return Math.pow(2, (n / 2) + 2) - 3;
        } else {
            return Math.pow(2, ((n + 1) / 2) + 1) - 1;
        }
    }

    getHeight(n) {
        if (n < 0) {
            return 1;
        }
        if (n % 2 === 0) {
            return Math.pow(2, (n + 2) / 2) - 1;
        } else {
            return Math.pow(2, (n + 1) / 2) - 1;
        }
    }

    drawLine(board, pos, size, type) {
        if (type === 'up' || type === 'down') {
            const length = this.getHeight(size);
            var startX = pos.x - parseInt(this.getHeight(size) / 2);
            for (let i = 0; i < length; i++) {
                if (type === 'up' && i === parseInt(length / 2)) {
                    board[pos.y][startX + i] = '┬';
                } else if (type === 'down' && i === parseInt(length / 2)) {
                    board[pos.y][startX + i] = '┴';
                } else {
                    board[pos.y][startX + i] = '─';
                }
            }
        } else if (type === 'left' || type === 'right') {
            const length = this.getHeight(size - 1);
            var startY = pos.y - parseInt(this.getHeight(size - 1) / 2);
            for (let i = 0; i < length; i++) {
                if (type === 'left' && i === parseInt(length / 2)) {
                    board[startY + i][pos.x] = '├';
                } else if (type === 'right' && i === parseInt(length / 2)) {
                    board[startY + i][pos.x] = '┤';
                } else {
                    board[startY + i][pos.x] = '│';
                }
            }
        } else {
            const length = this.getHeight(size);
            var startX = pos.x - parseInt(this.getHeight(size) / 2);
            for (let i = 0; i < length; i++) {
                board[pos.y][startX + i] = '─';
            }
        }
    }

    htree(n, size, board, pos, type) {
        this.drawLine(board, pos, size, type);

        if (n > 0) {
            if (type === undefined || type === 'up' || type === 'down') {
                this.htree(n - 1, size - 1, board, { x: pos.x - (parseInt(this.getHeight(size) / 2)) - 1, y: pos.y }, 'left');
                this.htree(n - 1, size - 1, board, { x: pos.x + (parseInt(this.getHeight(size) / 2)) + 1, y: pos.y }, 'right');
            } else {
                this.htree(n - 1, size - 1, board, { x: pos.x, y: pos.y - (parseInt(this.getHeight(size - 1) / 2)) - 1 }, 'up');
                this.htree(n - 1, size - 1, board, { x: pos.x, y: pos.y + (parseInt(this.getHeight(size - 1) / 2)) + 1 }, 'down');
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

        const board = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        this.htree(step, n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) });

        return board;
    }

}

module.exports = {
    HTree: HTree,
};