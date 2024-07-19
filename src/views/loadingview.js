const { Layout } = require('../dashboard');
const { BaseView } = require('./baseview.js');

class LoadingView extends BaseView {

    draw(board, styleConfig, showPanels) {
        let startX = showPanels ? Layout.FULL_PANEL_WIDTH : Layout.PANEL_LEFT_BUFFER;
        let startY = 0;
        let dimensions = this._getDimensions(showPanels);

        let loading;
        if (dimensions.rows >= Layout.LOADING_LARGE.length && dimensions.columns >= Layout.LOADING_LARGE[0].length) {
            loading = Layout.LOADING_LARGE;
        } else if (dimensions.rows >= Layout.LOADING_MEDIUM.length && dimensions.columns >= Layout.LOADING_MEDIUM[0].length) {
            loading = Layout.LOADING_MEDIUM;
        } else {
            loading = Layout.LOADING_SMALL;
        }

        if (loading.length <= dimensions.rows) {
            startY += Math.floor((dimensions.rows - loading.length) / 2);
        }

        if (loading[0].length <= dimensions.columns) {
            startX += Math.floor((dimensions.columns - loading[0].length) / 2);
        }

        for (let r = 0; r < Math.min(loading.length, dimensions.rows); r++) {
            for (let c = 0; c < Math.min(loading[0].length, dimensions.columns); c++) {
                board[startY + r][startX + c].character = loading[r][c];
            }
        }
    }

}

module.exports = {
    LoadingView: LoadingView,
}