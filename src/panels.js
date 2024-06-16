const { Text, FractalKeys, FractalData, PanelKeys, Modes, Rotations } =  require('./constants.js');

class PanelType {
    static VALUE   = 'VALUE';
    static LIST    = 'LIST';
    static DISPLAY = 'DISPLAY';
}

class Panel {

    constructor(title, keycode, type) {
        this.title = title;
        this.keycode = keycode;
        this.type = type;
        this.visible = true;
    }

    drawOpen(maxHeight) {}

    drawClosed() {}

}

class ListOption {

    constructor(name, key, selectable=true) {
        this.name = name;
        this.key = key;
        this.selectable = selectable;
    }

}

class ListPanel extends Panel {

    constructor(title, keycode, supportedItems) {
        super(title, keycode, PanelType.LIST);
        this.options = supportedItems;
        this.supported = {};
        for (let option of supportedItems) {
            if (option.selectable) {
                this.supported[option.key] = option;
            }
        }

        // Init indecies
        this.currentOptionIndex = 0;
        while (this.currentOptionIndex < this.options.length) {
            if (this.options[this.currentOptionIndex].selectable) {
                break;
            } else {
                this.currentOptionIndex++;
            }
        }
        this.currentFocusIndex = this.currentOptionIndex;
        this.onEnterCallback = undefined;
    }

    setOptionByKey(optionKey) {
        this.currentOptionIndex = 0;
        this.currentFocusIndex = 0;
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].selectable && this.options[i].key === optionKey) {
                this.currentOptionIndex = i;
                this.currentFocusIndex = i;
                break;
            }
        }
    }

    updateOptionsByKey(optionKeys, currentKey) {
        this.options = [];
        this.currentOptionIndex = 0;
        var counter = 0;
        for (let optionKey of optionKeys) {
            if (this.supported[optionKey]) {
                this.options.push(this.supported[optionKey]);
                if (optionKey === currentKey) {
                    this.currentOptionIndex = counter;
                }
                counter++;
            }
        }
        this.currentFocusIndex = this.currentOptionIndex;
    }

    getCurrentKey() {
        return this.options[this.currentOptionIndex].key;
    }

    getCurrentIndex() {
        return this.currentOptionIndex;
    }

    getFocusedKey() {
        return this.options[this.currentFocusIndex].key;
    }

    getFocusIndex() {
        return this.currentFocusIndex;
    }

    getValue() {
        return this.options[this.currentFocusIndex].name;
    }

    getOptions() {
        return this.options;
    }

    processUp() {
        if (this.options.length === 0) {
            return;
        }

        this.currentFocusIndex--;
        if (this.currentFocusIndex < 0) {
            this.currentFocusIndex = this.options.length - 1;
        }
        while (!this.options[this.currentFocusIndex].selectable) {
            this.currentFocusIndex--;
            if (this.currentFocusIndex < 0) {
                this.currentFocusIndex = this.options.length - 1;
            }
        }
    }

    processDown() {
        if (this.options.length === 0) {
            return;
        }

        this.currentFocusIndex++;
        if (this.currentFocusIndex >= this.options.length) {
            this.currentFocusIndex = 0;
        }
        while (!this.options[this.currentFocusIndex].selectable) {
            this.currentFocusIndex++;
            if (this.currentFocusIndex >= this.options.length) {
                this.currentFocusIndex = 0;
            }
        }
    }

    setOnEnterCallback(callback) {
        this.onEnterCallback = callback;
    }

    processEnter() {
        if (this.options.length === 0) {
            return;
        }
        
        let previous = this.currentOptionIndex;
        this.currentOptionIndex = this.currentFocusIndex;
        if (previous !== this.currentOptionIndex && this.onEnterCallback) {
            this.onEnterCallback(this.getCurrentKey());
        }
    }

    processExit() {
        this.currentFocusIndex = this.currentOptionIndex;
    }

}

class ValuePanel extends Panel {

    constructor(title, keycode, increment=false) {
        super(title, keycode, PanelType.VALUE);
        this.increment = increment;
        this.value = undefined;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

}

class StepValuePanel extends ValuePanel {

    constructor(title, keycode, getDenominator) {
        super(title, keycode, true);
        this.value = undefined;
        this.getDenominator = getDenominator;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return String(this.value) + ' / ' + String(this.getDenominator());
    }

}

class DisplayPanel extends Panel {

    constructor(title) {
        super(title, undefined, PanelType.DISPLAY);
    }

}

class PanelManager {

    static initPanels() {
        let panelMap = {};

        // Fractal Panel
        let fractalOptions = [
            new ListOption(Text.FRACTAL_SHAPES, undefined, false),
            new ListOption(FractalData[FractalKeys.SIERPINSKI_TRIANGLE].name, FractalKeys.SIERPINSKI_TRIANGLE),
            new ListOption(FractalData[FractalKeys.SIERPINSKI_CARPET].name, FractalKeys.SIERPINSKI_CARPET),
            new ListOption(FractalData[FractalKeys.SIERPINSKI_HEXAGON].name, FractalKeys.SIERPINSKI_HEXAGON),
            new ListOption(FractalData[FractalKeys.HEXAFLAKE].name, FractalKeys.HEXAFLAKE),
            new ListOption(FractalData[FractalKeys.KOCH_SNOWFLAKE].name, FractalKeys.KOCH_SNOWFLAKE),
            new ListOption(FractalData[FractalKeys.KOCH_ANTISNOWFLAKE].name, FractalKeys.KOCH_ANTISNOWFLAKE),
            new ListOption(FractalData[FractalKeys.TRIFLAKE].name, FractalKeys.TRIFLAKE),
            // new ListOption('', undefined, false),
            // new ListOption(Text.FRACTAL_PATTERNS, undefined, false),
        ];
        let fractalPanel = new ListPanel(Text.FRACTAL.toUpperCase(), 'f', fractalOptions);
        panelMap[PanelKeys.FRACTAL] = fractalPanel;

        // N-Step Panel
        let nStepPanel = new ValuePanel(Text.N_STEP.toUpperCase(), 'n', true);
        panelMap[PanelKeys.N_STEP] = nStepPanel;

        // Step Panel
        let stepPanel = new StepValuePanel(Text.STEP.toUpperCase(), 's', () => { return nStepPanel.getValue() });
        panelMap[PanelKeys.STEP] = stepPanel;

        // Mode Panel
        let modeOptions = [
            new ListOption(Text.SHAPES, Modes.SHAPES),
            new ListOption(Text.BLOCKS, Modes.BLOCKS),
            new ListOption(Text.LINES, Modes.LINES),
        ];
        let modePanel = new ListPanel(Text.MODE.toUpperCase(), 'm', modeOptions);
        panelMap[PanelKeys.MODE] = modePanel;

        // Inverse Panel
        let inversePanel = new ValuePanel(Text.INVERSE.toUpperCase(), 'i');
        panelMap[PanelKeys.INVERSE] = inversePanel;

        // Rotation Panel
        let rotationOptions = [
            new ListOption(Text.STANDARD, Rotations.STANDARD),
            new ListOption(Text.LEFT, Rotations.LEFT),
            new ListOption(Text.RIGHT, Rotations.RIGHT),
            new ListOption(Text.FLIP, Rotations.FLIP),
        ];
        let rotationPanel = new ListPanel(Text.ROTATION.toUpperCase(), 'r', rotationOptions);
        panelMap[PanelKeys.ROTATION] = rotationPanel;

        // Controls Panel
        let controlsPanel = new DisplayPanel(Text.CONTROLS.toUpperCase());
        panelMap[PanelKeys.CONTROLS] = controlsPanel;

        return panelMap;
    }

}

module.exports = {
    PanelManager: PanelManager,
    PanelType: PanelType,
}