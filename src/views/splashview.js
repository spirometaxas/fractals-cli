const { FractalView } = require('./fractalview.js');

class SplashView extends FractalView {

    constructor() {
        super(false);
        this.fractalSet = [];
    }

    setFractalSet(fractalSet, mode, displayConfig) {
        this.fractalSet = fractalSet;
        this.fractalMode = mode;
        this.displayConfig = displayConfig;
    }

    draw(board, styleConfig, showPanels) {
        for (let fractal in fractalSet) {
            if (this.doesFractalFit({ rows: fractal.length, columns: fractal[0].length }, showPanels)) {
                this.fractal = fractal;
            } else {
                break;
            }
        }
        super._initScrolling(showPanels);
        super.draw(board, styleConfig, showPanels);
    }

}

module.exports = {
    SplashView: SplashView,
}