const { SierpinskiTriangle } = require('./fractals/SierpinskiTriangle');
const { SierpinskiCarpet } = require('./fractals/SierpinskiCarpet');
const { SierpinskiHexagon } = require('./fractals/SierpinskiHexagon');
const { Hexaflake } = require('./fractals/hexaflake');
const { KochSnowflake } = require('./fractals/kochSnowflake');
const { KochAntiSnowflake } = require('./fractals/kochAntiSnowflake');
const { Triflake } = require('./fractals/triflake');
const { FractalKeys, FractalData, PanelKeys } = require('./constants');

class SelectModes {
    static VIEWER = 'viewer';
    static PANEL  = 'panel';
}

class Fractal {

    constructor(key, impl) {
        this.name = FractalData[key].name;
        this.description = FractalData[key].description;
        this.impl = impl;
        this.config = {};

        this._initConfig();
    }


    _initConfig() {
        this.config.N_STEP = 3;  // TODO: Compute dynamically
        this.config.MODE = this.impl.CONFIG.MODES[0];

        for (let modeKey of this.impl.CONFIG.MODES.slice().reverse()) {
            if (this.supportsStep(modeKey)) {
                this.config.STEP = this.config.N_STEP;
            }
            if (this.supportsInverse(modeKey)) {
                this.config.INVERSE = false;
            }
            if (this.supportsRotations(modeKey)) {
                this.config.ROTATION = this.impl.CONFIG.MODE_OPTIONS[modeKey].ROTATIONS[0];
            }
        }
    }

    getMinN() {
        return this.impl.CONFIG.MIN_N;
    }

    getSupportedModes() {
        return this.impl.CONFIG.MODES;
    }

    supportsStep(modeKey) {
        if (!modeKey) {
            modeKey = this.config.MODE;
        }
        return this.impl.CONFIG.MODE_OPTIONS[modeKey] && this.impl.CONFIG.MODE_OPTIONS[modeKey].SIZE;
    }

    supportsInverse(modeKey) {
        if (!modeKey) {
            modeKey = this.config.MODE;
        }
        return this.impl.CONFIG.MODE_OPTIONS[modeKey] && this.impl.CONFIG.MODE_OPTIONS[modeKey].INVERSE;
    }

    supportsRotations(modeKey) {
        if (!modeKey) {
            modeKey = this.config.MODE;
        }
        return this.impl.CONFIG.MODE_OPTIONS[modeKey] && this.impl.CONFIG.MODE_OPTIONS[modeKey].ROTATIONS;
    }

    setRotation(rotationKey) {
        if (this.getSupportedRotations().includes(rotationKey)) {
            this.config.ROTATION = rotationKey;
        }
    }

    getSupportedRotations(modeKey) {
        if (!modeKey) {
            modeKey = this.config.MODE;
        }
        if (this.impl.CONFIG.MODE_OPTIONS[modeKey]) {
            return this.impl.CONFIG.MODE_OPTIONS[modeKey].ROTATIONS;
        }
    }

    setMode(modeKey) {
        if (this.getSupportedModes().includes(modeKey)) {
            this.config.MODE = modeKey;
        }
    }

    supportsMultipleModes() {
        return this.getSupportedModes().length > 1;
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

    constructor(config, viewController, panels) {
        this.viewController = viewController;
        this.panels = panels;

        this.currentFocus = { type: SelectModes.VIEWER };

        // Fractal Shapes
        this.fractals[FractalKeys.SIERPINSKI_TRIANGLE] = new Fractal(FractalKeys.SIERPINSKI_TRIANGLE, new SierpinskiTriangle());
        this.fractals[FractalKeys.SIERPINSKI_CARPET]   = new Fractal(FractalKeys.SIERPINSKI_CARPET,   new SierpinskiCarpet());
        this.fractals[FractalKeys.SIERPINSKI_HEXAGON]  = new Fractal(FractalKeys.SIERPINSKI_HEXAGON,  new SierpinskiHexagon());
        this.fractals[FractalKeys.HEXAFLAKE]           = new Fractal(FractalKeys.HEXAFLAKE,           new Hexaflake());
        this.fractals[FractalKeys.KOCH_SNOWFLAKE]      = new Fractal(FractalKeys.KOCH_SNOWFLAKE,      new KochSnowflake());
        this.fractals[FractalKeys.KOCH_ANTISNOWFLAKE]  = new Fractal(FractalKeys.KOCH_ANTISNOWFLAKE,  new KochAntiSnowflake());
        this.fractals[FractalKeys.TRIFLAKE]            = new Fractal(FractalKeys.TRIFLAKE,            new Triflake());

        this._updatePanels(true);
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
        this.panels[PanelKeys.N_STEP].setValue(fractalConfig.config.N_STEP);

        // Mode Panel
        let currentFractalModeKey = fractalConfig.config.MODE;
        this.panels[PanelKeys.MODE].updateOptionsByKey(fractalConfig.getSupportedModes(), currentFractalModeKey);
        this.panels[PanelKeys.MODE].visible = fractalConfig.supportsMultipleModes();
        if (init) {
            this.panels[PanelKeys.MODE].setOnEnterCallback((selectedKey) => {
                this._onModeChange(selectedKey);
            });
        }

        // Step Panel
        if (fractalConfig.supportsStep(currentFractalModeKey)) {
            this.panels[PanelKeys.STEP].setValue(fractalConfig.config.STEP);
            this.panels[PanelKeys.STEP].visible = true;
        } else {
            this.panels[PanelKeys.STEP].visible = false;
        }

        // Inverse Panel
        if (fractalConfig.supportsInverse(currentFractalModeKey)) {
            this.panels[PanelKeys.INVERSE].setValue(fractalConfig.config.INVERSE);
            this.panels[PanelKeys.INVERSE].visible = true;
        } else {
            this.panels[PanelKeys.INVERSE].visible = false;
        }

        // Rotations Panel
        if (fractalConfig.supportsRotations(currentFractalModeKey)) {
            this.panels[PanelKeys.ROTATION].updateOptionsByKey(fractalConfig.getSupportedRotations(currentFractalModeKey), fractalConfig.config.ROTATION);
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
    }

    _onRotationChange(newRotationKey) {
        this.fractals[this.currentFractalKey].setRotation(newRotationKey);
    }

    _onModeChange(newModeKey) {
        this.fractals[this.currentFractalKey].setMode(newModeKey);
    }

    processUp() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processUp();
            return true;
        }
        return false;
    }

    processDown() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processDown();
            return true;
        }
        return false;
    }

    processLeft() {

    }

    processRight() {
        
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
                if (currentFractal.config.N_STEP <= currentFractal.getMinN()) {
                    return false;
                }
                currentFractal.config.N_STEP--;
            } else {
                currentFractal.config.N_STEP++;
            }
            currentFractal.config.STEP = currentFractal.config.N_STEP;

            this.panels[PanelKeys.N_STEP].setValue(currentFractal.config.N_STEP);
            this.panels[PanelKeys.STEP].setValue(currentFractal.config.STEP);
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
                    if (currentFractal.config.STEP <= currentFractal.getMinN()) {
                        return false;
                    }
                    currentFractal.config.STEP--;
                } else {
                    if (currentFractal.config.STEP < currentFractal.config.N_STEP) {
                        currentFractal.config.STEP++;
                    }
                }
                this.panels[PanelKeys.STEP].setValue(currentFractal.config.STEP);
            }
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
                currentFractal.config.INVERSE = !currentFractal.config.INVERSE;
                this.panels[PanelKeys.INVERSE].setValue(currentFractal.config.INVERSE);
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

    processBack() {
        if (this.currentFocus.type === SelectModes.PANEL) {
            this.panels[this.currentFocus.id].processExit();
            this.currentFocus = { type: SelectModes.VIEWER, id: undefined };
            return true;
        }
        return false;
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
        };
    }

}

module.exports = {
    StateController: StateController,
}