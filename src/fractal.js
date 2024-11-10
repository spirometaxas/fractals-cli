const { FractalKeys, Rotations } = require('./constants');
const { Utils } = require('./utils');

// Fractals
const { SierpinskiTriangle } = require('./fractals/SierpinskiTriangle');
const { SierpinskiCarpet } = require('./fractals/SierpinskiCarpet');
const { SierpinskiHexagon } = require('./fractals/SierpinskiHexagon');
const { Hexaflake } = require('./fractals/hexaflake');
const { KochSnowflake } = require('./fractals/kochSnowflake');
const { KochAntiSnowflake } = require('./fractals/kochAntiSnowflake');
const { Triflake } = require('./fractals/triflake');
const { CantorSet } = require('./fractals/cantorSet');
const { CantorDust } = require('./fractals/cantorDust');
const { HTree } = require('./fractals/hTree');
const { MinkowskiSausage } = require('./fractals/minkowskiSausage');
const { TSquare } = require('./fractals/tSquare');
const { VicsekFractal } = require('./fractals/vicsekFractal');
const { VTree } = require('./fractals/vTree');

const FractalConfig = {
    [FractalKeys.SIERPINSKI_TRIANGLE]: {
        name: 'Sierpinski Triangle',
        description: '',
        impl: SierpinskiTriangle,
    },
    [FractalKeys.SIERPINSKI_CARPET]: {
        name: 'Sierpinski Carpet',
        description: '',
        impl: SierpinskiCarpet,
    },
    [FractalKeys.SIERPINSKI_HEXAGON]: {
        name: 'Sierpinski Hexagon',
        description: '',
        impl: SierpinskiHexagon,
    },
    [FractalKeys.HEXAFLAKE]: {
        name: 'Hexaflake',
        description: '',
        impl: Hexaflake,
    },
    [FractalKeys.KOCH_SNOWFLAKE]: {
        name: 'Koch Snowflake',
        description: '',
        impl: KochSnowflake,
    },
    [FractalKeys.KOCH_ANTISNOWFLAKE]: {
        name: 'Koch Anti-Snowflake',
        description: '',
        impl: KochAntiSnowflake,
    },
    [FractalKeys.TRIFLAKE]: {
        name: 'Triflake',
        description: '',
        impl: Triflake,
    },
    [FractalKeys.CANTOR_SET]: {
        name: 'Cantor Set',
        description: '',
        impl: CantorSet,
    },
    [FractalKeys.CANTOR_DUST]: {
        name: 'Cantor Dust',
        description: '',
        impl: CantorDust,
    },
    [FractalKeys.H_TREE]: {
        name: 'H-Tree',
        description: '',
        impl: HTree,
    },
    [FractalKeys.MINKOWSKI_SAUSAGE]: {
        name: 'Minkowski Sausage',
        description: '',
        impl: MinkowskiSausage,
    },
    [FractalKeys.T_SQUARE]: {
        name: 'T-Square Fractal',
        description: '',
        impl: TSquare,
    },
    [FractalKeys.VICSEK_FRACTAL]: {
        name: 'Vicsek Fractal',
        description: '',
        impl: VicsekFractal,
    },
    [FractalKeys.V_TREE]: {
        name: 'V-Tree',
        description: '',
        impl: VTree,
    },
};

class Fractal {

    constructor(key) {
        this.key = key;
        this.name = FractalConfig[key].name;
        this.description = FractalConfig[key].description;
        this.impl = new FractalConfig[key].impl();

        this._initConfig();
    }


    _initConfig() {
        this.nStep = undefined;  // Will be set dynamically based on screen size
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

    getMaxPreviewN() {
        return this.impl.CONFIG.MAX_PREVIEW_N;
    }

    getSupportedModes() {
        return this.impl.CONFIG.MODES;
    }

    getDefaultMode() {
        return this.getSupportedModes()[0];
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

    getDefaultRotation() {
        if (this.supportsRotations(this.getDefaultMode())) {
            return this.getSupportedRotations(this.getDefaultMode())[0];
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

    getDefaultDisplay(defaultMode=false) {
        if (!defaultMode && this.supportsRotations()) {
            return {
                DEFAULT_X: Utils.rotateDefaultX(this.impl.DISPLAY.DEFAULT_X, this.impl.DISPLAY.DEFAULT_Y, this.rotation),
                DEFAULT_Y: Utils.rotateDefaultY(this.impl.DISPLAY.DEFAULT_X, this.impl.DISPLAY.DEFAULT_Y, this.rotation),
            };
        }
        return this.impl.DISPLAY;
    }

    getConfig() {
        return {
            step: this.step,
            mode: this.mode,
            inverse: this.inverse,
            rotation: this.rotation,
        };
    }

    getDefaultConfig(nStep) {
        return {
            step: this.supportsStep(this.getDefaultMode()) ? nStep : undefined,
            mode: this.getDefaultMode(),
            inverse: this.supportsInverse(this.getDefaultMode()) ? false : undefined,
            rotation: this.getDefaultRotation(),
        };
    }

}

module.exports = {
    Fractal: Fractal,
    FractalConfig: FractalConfig,
}