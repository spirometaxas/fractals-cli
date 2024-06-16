const { Shapes } = require('./constants');

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
}

module.exports = {
    Utils: Utils,
}