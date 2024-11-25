const { Modes, Rotations, LineTypes, VerticalAlign, HorizontalAlign } = require('../constants');
const { Utils } = require('../utils');

class SierpinskiCurve {

    CONFIG = {
        MIN_N: 0,
        MAX_PREVIEW_N: 4,
        MODES: [ Modes.LINES ],
        MODE_OPTIONS: {
            [Modes.LINES]: {
                LINE_TYPES: [ LineTypes.STANDARD, LineTypes.BOLD ],
            },
        },
    }

    DISPLAY = {
        DEFAULT_X: HorizontalAlign.CENTER,
        DEFAULT_Y: VerticalAlign.CENTER,
    }

    getWidth(n) {
        if (n < 1) {
            return 5;
        }
        const count = Math.pow(2, n) - 1;
        return (count * 8) + 3;
    }

    getHeight(n) {
        if (n < 1) {
            return 3;
        }
        const count = Math.pow(2, n) - 1;
        return (count * 4) + 2;
    }

    _drawSquare(board) {
        board[0][0] = '└';
        board[0][1] = '─';
        board[0][2] = '─';
        board[0][3] = '─';
        board[0][4] = '┘';

        board[1][0] = '│';
        board[1][1] = ' ';
        board[1][2] = ' ';
        board[1][3] = ' ';
        board[1][4] = '│';

        board[2][0] = '┌';
        board[2][1] = '─';
        board[2][2] = '─';
        board[2][3] = '─';
        board[2][4] = '┐';
    }

    _drawCurve(board, pos, n, type) {
        board[pos.y + 1][pos.x - 3] = '┌';
        board[pos.y + 1][pos.x - 2] = '─';
        board[pos.y + 1][pos.x - 1] = '┘';
        board[pos.y + 1][pos.x + 1] = '└';
        board[pos.y + 1][pos.x + 2] = '─';
        board[pos.y + 1][pos.x + 3] = '┐';

        board[pos.y][pos.x - 4] = '─';
        board[pos.y][pos.x - 3] = '┘';
        board[pos.y][pos.x + 4] = '─';
        board[pos.y][pos.x + 3] = '└';

        board[pos.y - 1][pos.x - 4] = '─';
        board[pos.y - 1][pos.x - 3] = '┐';
        board[pos.y - 1][pos.x + 4] = '─';
        board[pos.y - 1][pos.x + 3] = '┌';

        board[pos.y - 2][pos.x - 3] = '└';
        board[pos.y - 2][pos.x - 2] = '─';
        board[pos.y - 2][pos.x - 1] = '┐';
        board[pos.y - 2][pos.x + 1] = '┌';
        board[pos.y - 2][pos.x + 2] = '─';
        board[pos.y - 2][pos.x + 3] = '┘';

        if (n === 1) {
            if (type !== 'down') {
                this._setCap(board, [ 
                    { y: pos.y + 2, x: pos.x - 1 },
                    { y: pos.y + 2, x: pos.x },
                    { y: pos.y + 2, x: pos.x + 1 },
                ], [ '┌', '─', '┐'] );
            }

            if (type !== 'up') {
                this._setCap(board, [ 
                    { y: pos.y - 3, x: pos.x - 1 },
                    { y: pos.y - 3, x: pos.x },
                    { y: pos.y - 3, x: pos.x + 1 },
                ], [ '└', '─', '┘'] );
            }

            if (type !== 'right') {
                this._setCap(board, [ 
                    { y: pos.y, x: pos.x - 5 },
                    { y: pos.y - 1, x: pos.x - 5 },
                ], [ '┌', '└' ] );
            }

            if (type !== 'left') {
                this._setCap(board, [ 
                    { y: pos.y, x: pos.x + 5 },
                    { y: pos.y - 1, x: pos.x + 5 },
                ], [ '┐', '┘' ] );
            }
        }
    }

    _setCap(board, positions, characters) {
        let empty = true;
        for (let i = 0; i < positions.length; i++) {
            if (board[positions[i].y][positions[i].x] !== ' ') {
                empty = false;
            }
        }

        if (empty) {
            for (let i = 0; i < positions.length; i++) {
                board[positions[i].y][positions[i].x] = characters[i];
            }
        }
    }

    _getStepW(n) {
        return this.getWidth(n) - 3;
    }

    _getStepH(n) {
        return this.getHeight(n) - 2;
    }

    _sierpinski(n, board, pos, type) {
        if (n < 1) {
            this._drawSquare(board);
        } else {
            this._drawCurve(board, pos, n, type);
        }

        if (n > 1) {
            this._sierpinski(n - 1, board, { x: pos.x, y: pos.y + parseInt(this._getStepH(n - 1) / 2) + parseInt(this._getStepH(1) / 2) }, 'up');
            this._sierpinski(n - 1, board, { x: pos.x, y: pos.y - parseInt(this._getStepH(n - 1) / 2) - parseInt(this._getStepH(1) / 2) }, 'down');
            this._sierpinski(n - 1, board, { x: pos.x + parseInt(this._getStepW(n - 1) / 2) + parseInt(this._getStepW(1) / 2), y: pos.y }, 'right');
            this._sierpinski(n - 1, board, { x: pos.x - parseInt(this._getStepW(n - 1) / 2) - parseInt(this._getStepW(1) / 2), y: pos.y }, 'left');
        }
    }

    create(n, config) {
        if (n === undefined || n < this.CONFIG.MIN_N) {
            return [];
        }

        let board = Utils.createBoard(this.getWidth(n), this.getHeight(n));
        this._sierpinski(n, board, { x: parseInt(this.getWidth(n) / 2.0), y: parseInt(this.getHeight(n) / 2.0) } );
        return board.reverse();
    }

}

module.exports = {
    SierpinskiCurve: SierpinskiCurve,
}