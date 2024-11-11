const { Fractal } = require('./Fractal');
const { FractalKeys, FractalData, PanelKeys, ViewKeys, Modes } = require('./constants');
const { Cache } = require('./cache');
const { Worker } = require('worker_threads');
const path = require('path');

class SelectModes {
    static VIEWER = 'viewer';
    static PANEL  = 'panel';
}

class GenerateTask {

    constructor(fractalKey, nStep, config, cacheKey, reset) {
        this.fractalKey = fractalKey;
        this.nStep = nStep;
        this.config = config;
        this.cacheKey = cacheKey;
    }

}

class GenerateFractalsTask {

    workerThread = undefined;
    data = undefined;
    tasks = [];
    reset = false;

    constructor(tasks, reset) {
        this.tasks = tasks;
        this.reset = reset;
    }

    getWorkerData() {
        let workerData = [];
        for (let task of this.tasks) {
            workerData.push({
                fractalKey: task.fractalKey,
                nStep: task.nStep,
                config: task.config,
                cacheKey: task.cacheKey,
            });
        }
        return {
            tasks: workerData,
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
        PanelKeys.SCROLL,
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

        this._initFractals();
        this._updatePanels(true);
    }

    _initFractals() {
        for (let key of Object.values(FractalKeys)) {
            this.fractals[key] = new Fractal(key);
        }

        let initTasks = [];
        for (let fractalKey of Object.values(FractalKeys)) {
            let fractal = this.fractals[fractalKey];
            for (let nStep = fractal.getMinN(); nStep <= fractal.getMaxPreviewN(); nStep++) {
                let cacheKey = Cache.createCacheKey(fractalKey, nStep, fractal.getDefaultConfig(nStep));
                initTasks.push(new GenerateTask(fractalKey, nStep, fractal.getDefaultConfig(nStep), cacheKey));
            }
        }

        this.loadingTask = new GenerateFractalsTask(initTasks, true);
        this._initCurrentFractal();
    }

    _initCurrentFractal() {
        let currentFractal = this.fractals[this.currentFractalKey];
        currentFractal.nStep = currentFractal.getMinN();
        if (currentFractal.supportsStep()) {
            currentFractal.step = currentFractal.getMinN();
        }
        for (let nStep = currentFractal.getMinN(); nStep <= currentFractal.getMaxPreviewN(); nStep++) {
            if (this.views[ViewKeys.FRACTAL].doesFractalFit({
                rows: currentFractal.impl.getHeight(nStep),
                columns: currentFractal.impl.getWidth(nStep),
            }, this._showPanels())) {
                currentFractal.nStep = nStep;
                if (currentFractal.supportsStep()) {
                    currentFractal.step = nStep;
                }
            } else {
                break;
            }
        }
    }

    _updatePanels(init=false) {
        let fractalConfig = this.fractals[this.currentFractalKey];

        // Fractal Panel
        this.panels[PanelKeys.FRACTAL].setOptionByKey(this.currentFractalKey);
        if (init) {
            this.panels[PanelKeys.FRACTAL].setOnEnterCallback((selectedKey) => {
                this._onFractalChange(selectedKey);
            });
            this.panels[PanelKeys.FRACTAL].setOnFocusCallback((selectedKey) => {
                this._onFractalFocusChange(selectedKey);
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
        this._onFractalConfigChange();
        this._updatePanels();
    }

    _onFractalFocusChange(fractalKey) {
        let focusFractal = this.fractals[fractalKey];
        let boards = [];
        for (let nStep = focusFractal.getMinN(); nStep <= focusFractal.getMaxPreviewN(); nStep++) {
            let cacheKey = Cache.createCacheKey(fractalKey, nStep, focusFractal.getDefaultConfig(nStep));
            boards.push(this.cache.get(cacheKey));
        }
        this.views[ViewKeys.SPLASH].setFractalSet(boards, focusFractal.getDefaultMode(), focusFractal.getDefaultDisplay(true));
    }

    _onRotationChange(newRotationKey) {
        this.fractals[this.currentFractalKey].setRotation(newRotationKey);
        this._onFractalConfigChange();
        this._updatePanels();
    }

    _onModeChange(newModeKey) {
        this.fractals[this.currentFractalKey].setMode(newModeKey);
        this._onFractalConfigChange();
        this._updatePanels();
    }

    _onFractalConfigChange(reset=true) {
        let currentFractal = this.fractals[this.currentFractalKey];
        if (currentFractal.nStep === undefined) {
            this._initCurrentFractal();
        }

        let cacheKey = Cache.createCacheKey(currentFractal.key, currentFractal.nStep, currentFractal.getConfig());
        let board = this.cache.get(cacheKey);

        if (board) {
            this.views[ViewKeys.FRACTAL].setFractal(
                board,
                currentFractal.mode, 
                currentFractal.getDefaultDisplay(), 
                this._showPanels(),
                reset);
        } else if (currentFractal.nStep <= currentFractal.getMaxPreviewN()) {
            board = currentFractal.impl.create(currentFractal.nStep, currentFractal.getConfig());
            this.cache.put(cacheKey, board);
            this.views[ViewKeys.FRACTAL].setFractal(
                board,
                currentFractal.mode, 
                currentFractal.getDefaultDisplay(), 
                this._showPanels(),
                reset);
        } else {
            this.loadingTask = new GenerateFractalsTask([
                new GenerateTask(this.currentFractalKey, currentFractal.nStep, currentFractal.getConfig(), cacheKey),
            ], reset);
        }
    }

    runLoadingTask(onFinished, onError) {
        this.loadingTask.workerThread = new Worker(path.join(__dirname, './fractalthread.js'), { workerData: this.loadingTask.getWorkerData() });
        this.loadingTask.workerThread.on('message', (data) => {
            this.loadingTask.data = data;
        });
        this.loadingTask.workerThread.on('exit', (code) => {
            if (code !== 0) {
                onError();
            } else {
                for (let cacheKey in this.loadingTask.data.response) {
                    let board = this.loadingTask.data.response[cacheKey];
                    this.cache.put(cacheKey, board);
                }

                let currentFractal = this.fractals[this.currentFractalKey];
                let cacheKey = Cache.createCacheKey(currentFractal.key, currentFractal.nStep, currentFractal.getConfig());
                let board = this.cache.get(cacheKey);
                if (board) {
                    this.views[ViewKeys.FRACTAL].setFractal(
                        board,
                        currentFractal.mode, 
                        currentFractal.getDefaultDisplay(),
                        this._showPanels(),
                        this.loadingTask.reset);
                }
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

    _showPanels() {
        return this.currentFocus.type === SelectModes.PANEL || this.showPanels;
    }

    processUp() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processUp();
            return true;
        } else if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollUp(this._showPanels());
        }
        return false;
    }

    processDown() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processDown();
            return true;
        } else if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollDown(this._showPanels());
        }
        return false;
    }

    processLeft() {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollLeft(this._showPanels());
        }
    }

    processRight() {
        if (this.currentFocus.type === SelectModes.VIEWER) {
            return this.views[ViewKeys.FRACTAL].scrollRight(this._showPanels());
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
            this.panels[PanelKeys.FRACTAL].processOpen();
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

    processV() {
        this.showPanels = !this.showPanels;
        this.updateScrollingOnResize();
        return true;
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
        this.views[ViewKeys.FRACTAL].updateScrollingOnResize(this._showPanels());
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

        let viewKey = ViewKeys.FRACTAL;
        if (this.isLoading()) {
            viewKey = ViewKeys.LOADING;
        } else if (this.currentFocus.type === SelectModes.PANEL && this.currentFocus.id === PanelKeys.FRACTAL) {
            viewKey = ViewKeys.SPLASH;
        }

        return {
            panels: panels,
            openPanel: openPanel,
            showPanels: this._showPanels(),
            view: viewKey,
        };
    }

}

module.exports = {
    StateController: StateController,
}