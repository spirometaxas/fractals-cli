const { Fractal } = require('./Fractal');
const { FractalKeys, FractalData, PanelKeys, ViewKeys, Modes } = require('./constants');
const { Cache } = require('./cache');
const { Worker } = require('worker_threads');

class SelectModes {
    static VIEWER = 'viewer';
    static PANEL  = 'panel';
}

class GenerateFractalTask {

    workerThread = undefined;
    data = undefined;

    constructor(fractalKey, nStep, config, cacheKey, reset) {
        this.fractalKey = fractalKey;
        this.nStep = nStep;
        this.config = config;
        this.cacheKey = cacheKey;
        this.reset = reset;
    }

    getWorkerData() {
        return {
            fractalKey: this.fractalKey,
            nStep: this.nStep,
            config: this.config,
        };
    }

}

class StateController {

    PANEL_ORDER = [
        PanelKeys.FRACTAL,
        PanelKeys.N_STEP,
        PanelKeys.STEP,
        PanelKeys.MODE,
        PanelKeys.INVERSE,
        PanelKeys.ROTATION,
        PanelKeys.CONTROLS,
    ];

    fractals = {};
    currentFractalKey = FractalKeys.SIERPINSKI_TRIANGLE;  // Default to Sierpinski Triangle

    constructor(config, views, panels) {
        this.views = views;
        this.panels = panels;
        this.cache = new Cache();
        this.loadingTask = undefined;

        this.currentFocus = { type: SelectModes.VIEWER };
        this.showPanels = true;

        // Fractal Shapes
        this.fractals[FractalKeys.SIERPINSKI_TRIANGLE] = new Fractal(FractalKeys.SIERPINSKI_TRIANGLE);
        this.fractals[FractalKeys.SIERPINSKI_CARPET]   = new Fractal(FractalKeys.SIERPINSKI_CARPET);
        this.fractals[FractalKeys.SIERPINSKI_HEXAGON]  = new Fractal(FractalKeys.SIERPINSKI_HEXAGON);
        this.fractals[FractalKeys.HEXAFLAKE]           = new Fractal(FractalKeys.HEXAFLAKE);
        this.fractals[FractalKeys.KOCH_SNOWFLAKE]      = new Fractal(FractalKeys.KOCH_SNOWFLAKE);
        this.fractals[FractalKeys.KOCH_ANTISNOWFLAKE]  = new Fractal(FractalKeys.KOCH_ANTISNOWFLAKE);
        this.fractals[FractalKeys.TRIFLAKE]            = new Fractal(FractalKeys.TRIFLAKE);

        this._initViewController();
        this._updatePanels(true);
    }

    _initViewController() {
        for (let key of Object.values(FractalKeys)) {
            let fractal = this.fractals[key];
            while (this.views[ViewKeys.FRACTAL].doesFractalFit({ rows: fractal.impl.getHeight(fractal.nStep + 1), columns: fractal.impl.getWidth(fractal.nStep + 1) }, this.showPanels)) {
                fractal.nStep++;

                if (this.fractals[this.currentFractalKey].supportsStep()) {
                    fractal.step = fractal.nStep;
                }
            }
        }

        this._onFractalConfigChange();
    }

    _updatePanels(init=false) {
        let fractalConfig = this.fractals[this.currentFractalKey];

        // Fractal Panel
        this.panels[PanelKeys.FRACTAL].setOptionByKey(this.currentFractalKey);
        if (init) {
            this.panels[PanelKeys.FRACTAL].setOnEnterCallback((selectedKey) => {
                this._onFractalChange(selectedKey);
            });
        }
        
        // N Panel
        this.panels[PanelKeys.N_STEP].setValue(fractalConfig.nStep);

        // Mode Panel
        let currentFractalModeKey = fractalConfig.mode;
        this.panels[PanelKeys.MODE].updateOptionsByKey(fractalConfig.getSupportedModes(), currentFractalModeKey);
        this.panels[PanelKeys.MODE].visible = fractalConfig.supportsMultipleModes();
        if (init) {
            this.panels[PanelKeys.MODE].setOnEnterCallback((selectedKey) => {
                this._onModeChange(selectedKey);
            });
        }

        // Step Panel
        if (fractalConfig.supportsStep(currentFractalModeKey)) {
            this.panels[PanelKeys.STEP].setValue(fractalConfig.step);
            this.panels[PanelKeys.STEP].visible = true;
        } else {
            this.panels[PanelKeys.STEP].visible = false;
        }

        // Inverse Panel
        if (fractalConfig.supportsInverse(currentFractalModeKey)) {
            this.panels[PanelKeys.INVERSE].setValue(fractalConfig.inverse);
            this.panels[PanelKeys.INVERSE].visible = true;
        } else {
            this.panels[PanelKeys.INVERSE].visible = false;
        }

        // Rotations Panel
        if (fractalConfig.supportsRotations(currentFractalModeKey)) {
            this.panels[PanelKeys.ROTATION].updateOptionsByKey(fractalConfig.getSupportedRotations(currentFractalModeKey), fractalConfig.rotation);
            this.panels[PanelKeys.ROTATION].visible = true;
        } else {
            this.panels[PanelKeys.ROTATION].updateOptionsByKey([], undefined);
            this.panels[PanelKeys.ROTATION].visible = false;
        }
        if (init) {
            this.panels[PanelKeys.ROTATION].setOnEnterCallback((selectedKey) => {
                this._onRotationChange(selectedKey);
            });
        }
    }

    _onFractalChange(newFractalKey) {
        this.currentFractalKey = newFractalKey;
        this._updatePanels();
        this._onFractalConfigChange();
    }

    _onRotationChange(newRotationKey) {
        this.fractals[this.currentFractalKey].setRotation(newRotationKey);
        this._onFractalConfigChange();
    }

    _onModeChange(newModeKey) {
        this.fractals[this.currentFractalKey].setMode(newModeKey);
        this._updatePanels();
        this._onFractalConfigChange();
    }

    _onFractalConfigChange(reset=true) {
        let currentFractal = this.fractals[this.currentFractalKey];

        let cacheKey = Cache.createCacheKey(currentFractal.key, currentFractal.nStep, currentFractal.getConfig());
        let board = this.cache.get(cacheKey);

        if (board) {
            this.views[ViewKeys.FRACTAL].setFractal(
                board,
                currentFractal.mode, 
                currentFractal.getDefaultDisplay(), 
                this.showPanels,
                reset);
        } else {
            this.loadingTask = new GenerateFractalTask(this.currentFractalKey, currentFractal.nStep, currentFractal.getConfig(), cacheKey, reset);
        }
    }

    runLoadingTask(onFinished, onError) {
        this.loadingTask.workerThread = new Worker('./fractalthread.js', { workerData: this.loadingTask.getWorkerData() });
        this.loadingTask.workerThread.on('message', (data) => {
            this.loadingTask.data = data;
        });
        this.loadingTask.workerThread.on('exit', (code) => {
            if (code !== 0) {
                onError();
            } else {
                let board = this.loadingTask.data.board;
                this.cache.put(this.loadingTask.cacheKey, board);
                let loadedFractal = this.fractals[this.loadingTask.fractalKey];
                this.views[ViewKeys.FRACTAL].setFractal(
                    board,
                    loadedFractal.mode, 
                    loadedFractal.getDefaultDisplay(),
                    this.showPanels,
                    this.loadingTask.reset);
                onFinished();
            }
        });
        this.loadingTask.workerThread.on('error', (error) => {
            onError();
        });
    }

    isLoading() {
        return this.loadingTask !== undefined;
    }

    isRunning() {
        return this.loadingTask !== undefined && this.loadingTask.workerThread !== undefined;
    }

    clearLoadingTask() {
        if (this.loadingTask && this.loadingTask.workerThread) {
            this.loadingTask.workerThread.terminate();
        }
        this.loadingTask = undefined;
    }

    processUp() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processUp();
            return true;
        } else if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollUp(this.showPanels);
        }
        return false;
    }

    processDown() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processDown();
            return true;
        } else if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollDown(this.showPanels);
        }
        return false;
    }

    processLeft() {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollLeft(this.showPanels);
        }
    }

    processRight() {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollRight(this.showPanels);
        }
    }

    processEnter() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processEnter();
            this.currentFocus = { type: SelectModes.VIEWER, id: undefined };
            return true;
        }
        return false;
    }

    processF() {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            this.currentFocus = { type: SelectModes.PANEL, id: PanelKeys.FRACTAL };
            return true;
        }
        return false;
    }

    processN(isUpperCase) {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            let currentFractal = this.fractals[this.currentFractalKey];
            if (isUpperCase) {
                if (currentFractal.nStep <= currentFractal.getMinN()) {
                    return false;
                }
                currentFractal.nStep--;
            } else {
                currentFractal.nStep++;
            }

            this.panels[PanelKeys.N_STEP].setValue(currentFractal.nStep);

            if (this.fractals[this.currentFractalKey].supportsStep()) {
                currentFractal.step = currentFractal.nStep;
                this.panels[PanelKeys.STEP].setValue(currentFractal.step);
            }

            this._onFractalConfigChange();
            return true;
        }
        return false;
    }

    processS(isUpperCase) {
        if (!this.fractals[this.currentFractalKey].supportsStep()) {
            return false;
        }

        if (this.currentFocus.type === SelectModes.VIEWER) {
            let currentFractal = this.fractals[this.currentFractalKey];
            if (currentFractal.supportsStep()) {
                if (isUpperCase) {
                    if (currentFractal.step <= currentFractal.getMinN()) {
                        currentFractal.step = currentFractal.nStep;
                    } else {
                        currentFractal.step--;
                    }
                } else {
                    if (currentFractal.step < currentFractal.nStep) {
                        currentFractal.step++;
                    } else {
                        currentFractal.step = currentFractal.getMinN();
                    }
                }
                this.panels[PanelKeys.STEP].setValue(currentFractal.step);
            }

            this._onFractalConfigChange(false);
            return true;
        }
        return false;
    }

    processI() {
        if (!this.fractals[this.currentFractalKey].supportsInverse()) {
            return false;
        }

        if (this.currentFocus.type === SelectModes.VIEWER) {
            let currentFractal = this.fractals[this.currentFractalKey];
            if (currentFractal.supportsInverse()) {
                currentFractal.inverse = !currentFractal.inverse;
                this.panels[PanelKeys.INVERSE].setValue(currentFractal.inverse);

                this._onFractalConfigChange(false);
                return true;
            }
        }
        return false;
    }

    processR() {
        if (!this.fractals[this.currentFractalKey].supportsRotations()) {
            return false;
        }

        if (this.currentFocus.type === SelectModes.VIEWER) {
            this.currentFocus = { type: SelectModes.PANEL, id: PanelKeys.ROTATION };
            return true;
        }
        return false;
    }

    processM() {
        if (!this.fractals[this.currentFractalKey].supportsMultipleModes()) {
            return false;
        }
        
        if (this.currentFocus.type === SelectModes.VIEWER) {
            this.currentFocus = { type: SelectModes.PANEL, id: PanelKeys.MODE };
            return true;
        }
        return false;
    }

    processP() {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            this.showPanels = !this.showPanels;
            this.updateScrollingOnResize();
            return true;
        }
        return false;
    }

    processBack() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processExit();
            this.currentFocus = { type: SelectModes.VIEWER, id: undefined };
            return true;
        }
        return false;
    }

    updateScrollingOnResize() {
        this.views[ViewKeys.FRACTAL].updateScrollingOnResize(this.showPanels);
    }

    getRenderConfig() {
        let panels;
        let openPanel;
        if (this.currentFocus.type === SelectModes.VIEWER) {
            panels = [];
            for (let panelKey of this.PANEL_ORDER) {
                if (this.panels[panelKey].visible) {
                    panels.push(panelKey);
                }
            }
        } else if (this.currentFocus.type === SelectModes.PANEL) {
            openPanel = this.currentFocus.id;
        }

        return {
            panels: panels,
            openPanel: openPanel,
            showPanels: this.showPanels,
            view: this.isLoading() ? ViewKeys.LOADING : ViewKeys.FRACTAL,
        };
    }

}

module.exports = {
    StateController: StateController,
}