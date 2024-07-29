const { VerticalAlign, HorizontalAlign } = require('../constants');
const { Layout } = require('../dashboard');
const { BaseView } = require('./baseview.js');

class FractalView extends BaseView {

    constructor(scrollable=true) {
        super();
        this.scrolling = { x: 0, y: 0 };
        this.scrollable = scrollable;
        this.fractal = undefined;
        this.fractalMode = undefined;
        this.displayConfig = undefined;
    }

    scrollUp(showPanels) {
        if (!this.scrollable) {
            return false;
        }
        let rows = this._getDimensions(showPanels).rows;
        if (rows < this.fractal.length) {
            if (this.scrolling.y > 0) {
                this.scrolling.y--;
                return true;
            }
        }
        return false;
    }

    scrollDown(showPanels) {
        if (!this.scrollable) {
            return false;
        }
        let rows = this._getDimensions(showPanels).rows;
        if (rows < this.fractal.length) {
            if (this.scrolling.y + rows + 1 <= this.fractal.length) {
                this.scrolling.y++;
                return true;
            }
        }
        return false;
    }

    scrollLeft(showPanels) {
        if (!this.scrollable) {
            return false;
        }
        let columns = this._getDimensions(showPanels).columns;
        if (columns < this.fractal[0].length) {
            if (this.scrolling.x > 0) {
                this.scrolling.x--;
                return true;
            }
        }
        return false;
    }

    scrollRight(showPanels) {
        if (!this.scrollable) {
            return false;
        }
        let columns = this._getDimensions(showPanels).columns;
        if (columns < this.fractal[0].length) {
            if (this.scrolling.x + columns + 1 <= this.fractal[0].length) {
                this.scrolling.x++;
                return true;
            }
        }
        return false;
    }

    setFractal(fractal, mode, displayConfig, showPanels, reset=true) {
        this.fractal = fractal;
        this.fractalMode = mode;
        this.displayConfig = displayConfig;
        if (reset) {
            this._initScrolling(showPanels);
        }
    }

    _initScrolling(showPanels) {
        this.scrolling = { x: 0, y: 0 };

        let dimensions = this._getDimensions(showPanels);

        if (this.fractal.length > dimensions.rows) {
            if (this.displayConfig.DEFAULT_Y === VerticalAlign.TOP) {
                this.scrolling.y = 0;
            } else if (this.displayConfig.DEFAULT_Y === VerticalAlign.CENTER) {
                this.scrolling.y = Math.floor((this.fractal.length - dimensions.rows) / 2);
            } else {
                this.scrolling.y = this.fractal.length - dimensions.rows;
            }
        }

        if (this.fractal[0].length > dimensions.columns) {
            if (this.displayConfig.DEFAULT_X === HorizontalAlign.RIGHT) {
                this.scrolling.x = this.fractal[0].length - dimensions.columns;
            } else if (this.displayConfig.DEFAULT_X === HorizontalAlign.CENTER) {
                this.scrolling.x = Math.floor((this.fractal[0].length - dimensions.columns) / 2);
            } else {
                this.scrolling.x = 0;
            }
        }
    }

    doesFractalFit(fractalDimensions, showPanels) {
        let dimensions = this._getDimensions(showPanels);
        return fractalDimensions.rows <= dimensions.rows && fractalDimensions.columns <= dimensions.columns;
    }

    updateScrollingOnResize(showPanels) {
        let dimensions = this._getDimensions(showPanels);
        if (this.scrolling.y + dimensions.rows > this.fractal.length) {
            this.scrolling.y = Math.max(this.fractal.length - dimensions.rows, 0);
        }
        if (this.scrolling.x + dimensions.columns > this.fractal[0].length) {
            this.scrolling.x = Math.max(this.fractal[0].length - dimensions.columns, 0);
        }
    }

    draw(board, styleConfig, showPanels) {
        let startX = showPanels ? Layout.FULL_PANEL_WIDTH : Layout.PANEL_LEFT_BUFFER;
        let startY = 0;
        let dimensions = this._getDimensions(showPanels);

        if (this.fractal.length <= dimensions.rows) {
            startY += Math.floor((dimensions.rows - this.fractal.length) / 2);
        }

        if (this.fractal[0].length <= dimensions.columns) {
            startX += Math.floor((dimensions.columns - this.fractal[0].length) / 2);
        }

        for (let r = 0; r < Math.min(this.fractal.length, dimensions.rows); r++) {
            for (let c = 0; c < Math.min(this.fractal[0].length, dimensions.columns); c++) {
                board[startY + r][startX + c].character = this.fractal[r + this.scrolling.y][c + this.scrolling.x];
            }
        }
    }

}

module.exports = {
    FractalView: FractalView,
}