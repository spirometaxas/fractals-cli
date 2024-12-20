const { Shapes } = require('../characters.js');
const { Layout } = require('../dashboard');

class BaseView {

    _createBoard(w, h) {
        let board = [];
        for (let i = 0; i < h; i++) {
            let row = [];
            for (let j = 0; j < w; j++) {
                row.push({ 
                    character: Shapes.SPACE,
                    config: {},
                });
            }
            board.push(row);
        }
        return board;
    }

    _getDimensions(showPanels) {
        let columnsWithPanels = process.stdout.columns - Layout.FULL_PANEL_WIDTH - Layout.VIEWER_RIGHT_BUFFER;
        let columnsWithoutPanels = process.stdout.columns - Layout.PANEL_LEFT_BUFFER - Layout.VIEWER_RIGHT_BUFFER;
        return {
            rows: process.stdout.rows,
            columns: showPanels ? columnsWithPanels : columnsWithoutPanels,
        };
    }

    getScrollingState(showPanels) {
        return {};
    }

    draw(board, styleConfig, showPanels) {
        // Override
    }

}

module.exports = {
    BaseView: BaseView,
}