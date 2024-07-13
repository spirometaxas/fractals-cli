const { Rotations } = require('./constants');
const { Utils } = require('./utils');

class Fractal {

    constructor(key, impl) {
        this.key = key;
        this.name = FractalData[key].name;
        this.description = FractalData[key].description;
        this.impl = impl;

        this._initConfig();
    }


    _initConfig() {
        this.nStep = this.impl.CONFIG.MIN_N;
        this.mode = this.impl.CONFIG.MODES[0];

        for (let modeKey of this.impl.CONFIG.MODES.slice().reverse()) {
            if (this.supportsStep(modeKey)) {
                this.step = this.nStep;
            }
            if (this.supportsInverse(modeKey)) {
                this.inverse = false;
            }
            if (this.supportsRotations(modeKey)) {
                this.rotation = this.impl.CONFIG.MODE_OPTIONS[modeKey].ROTATIONS[0];
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
            modeKey = this.mode;
        }
        return this.impl.CONFIG.MODE_OPTIONS[modeKey] && this.impl.CONFIG.MODE_OPTIONS[modeKey].SIZE;
    }

    supportsInverse(modeKey) {
        if (!modeKey) {
            modeKey = this.mode;
        }
        return this.impl.CONFIG.MODE_OPTIONS[modeKey] && this.impl.CONFIG.MODE_OPTIONS[modeKey].INVERSE;
    }

    supportsRotations(modeKey) {
        if (!modeKey) {
            modeKey = this.mode;
        }
        return this.impl.CONFIG.MODE_OPTIONS[modeKey] && this.impl.CONFIG.MODE_OPTIONS[modeKey].ROTATIONS;
    }

    setRotation(rotationKey) {
        if (this.getSupportedRotations().includes(rotationKey)) {
            this.rotation = rotationKey;
        }
    }

    getSupportedRotations(modeKey) {
        if (!modeKey) {
            modeKey = this.mode;
        }
        if (this.impl.CONFIG.MODE_OPTIONS[modeKey]) {
            return this.impl.CONFIG.MODE_OPTIONS[modeKey].ROTATIONS;
        }
    }

    setMode(modeKey) {
        if (this.getSupportedModes().includes(modeKey)) {
            this.mode = modeKey;
        }
    }

    supportsMultipleModes() {
        return this.getSupportedModes().length > 1;
    }

    getDefaultDisplay() {
        if (this.supportsRotations()) {
            return {
                DEFAULT_X: Utils.rotateDefaultX(this.impl.DISPLAY.DEFAULT_X, this.impl.DISPLAY.DEFAULT_Y, this.rotation),
                DEFAULT_Y: Utils.rotateDefaultY(this.impl.DISPLAY.DEFAULT_X, this.impl.DISPLAY.DEFAULT_Y, this.rotation),
            };
        }
        return this.impl.DISPLAY;
    }

}

module.exports = {
    Fractal: Fractal,
}