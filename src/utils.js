const { Shapes, Rotations, VerticalAlign, HorizontalAlign } = require('./constants');

class Utils {

    static createBoard(w, h) {
        let board = [];
        for (let i = 0; i < h; i++) {
            let row = [];
            for (let j = 0; j < w; j++) {
                row.push(Shapes.SPACE);
            }
            board.push(row);
        }
        return board;
    }

    static rotateDefaultX(defaultX, defaultY, rotation) {
        if (rotation === Rotations.LEFT) {
            if (defaultY === VerticalAlign.BOTTOM) {
                return HorizontalAlign.RIGHT;
            } else if (defaultY === VerticalAlign.CENTER) {
                return HorizontalAlign.CENTER;
            } else if (defaultY === VerticalAlign.TOP) {
                return HorizontalAlign.LEFT;
            }
        } else if (rotation === Rotations.RIGHT) {
            if (defaultY === VerticalAlign.BOTTOM) {
                return HorizontalAlign.LEFT;
            } else if (defaultY === VerticalAlign.CENTER) {
                return HorizontalAlign.CENTER;
            } else if (defaultY === VerticalAlign.TOP) {
                return HorizontalAlign.RIGHT;
            }
        }
        return defaultX;
    }

    static rotateDefaultY(defaultX, defaultY, rotation) {
        if (rotation === Rotations.LEFT) {
            if (defaultX === HorizontalAlign.LEFT) {
                return VerticalAlign.BOTTOM;
            } else if (defaultX === HorizontalAlign.CENTER) {
                return VerticalAlign.CENTER;
            } else if (defaultX === HorizontalAlign.RIGHT) {
                return VerticalAlign.TOP;
            }
        } else if (rotation === Rotations.RIGHT) {
            if (defaultX === HorizontalAlign.LEFT) {
                return VerticalAlign.TOP;
            } else if (defaultX === HorizontalAlign.CENTER) {
                return VerticalAlign.CENTER;
            } else if (defaultX === HorizontalAlign.RIGHT) {
                return VerticalAlign.BOTTOM;
            }
        } else if (rotation === Rotations.FLIP) {
            if (defaultY === VerticalAlign.BOTTOM) {
                return VerticalAlign.TOP;
            } else if (defaultY === VerticalAlign.CENTER) {
                return VerticalAlign.CENTER;
            } else if (defaultY === VerticalAlign.TOP) {
                return VerticalAlign.BOTTOM;
            }
        }
        return defaultY;
    }

    static drawForTest(board) {
        var result = [];
        for (let i = 0; i < board.length; i++) {
            let line = '';
            for (let j = 0; j < board[i].length; j++) {
                line += board[i][j];
            }
            result.push(line);
        }
        return result;
    }
}

module.exports = {
    Utils: Utils,
}