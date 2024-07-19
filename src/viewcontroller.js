const { ViewKeys } = require('./constants');
const { FractalView } = require('./views/fractalview.js');
const { LoadingView } = require('./views/loadingview.js');


class ViewController {

    views = {};

    constructor() {
        this.views[ViewKeys.FRACTAL] = new FractalView();
        this.views[ViewKeys.LOADING] = new LoadingView();
    }

    getViews() {
        return this.views;
    }

}

module.exports = {
    ViewController: ViewController,
}