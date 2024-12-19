const { Text, FractalKeys, PanelKeys, Modes, Rotations, CharacterType } = require('./constants.js');
const { FractalConfig } = require('./fractal.js');

class PanelType {
    static VALUE   = 'VALUE';
    static LIST    = 'LIST';
    static DISPLAY = 'DISPLAY';
    static SCROLL  = 'SCROLL';
    static CHARACTER = 'CHARACTER';
}

class Panel {

    constructor(title, keycode, type) {
        this.title = title;
        this.keycode = keycode;
        this.type = type;
        this.visible = true;
    }

    getCurrentDisplayValue() {}

}

class OpenablePanel extends Panel {

    getCurrentKey() {}

    getCurrentIndex() {}

    getFocusKey() {}

    getFocusIndex() {}

    getOptions() {}

    processUp() {
        return false;
    }

    processDown() {
        return false;
    }

    processLeft() {
        return false;
    }

    processRight() {
        return false;
    }

    setOnEnterCallback(callback) {
        this.onEnterCallback = callback;
    }

    setOnFocusCallback(callback) {
        this.onFocusCallback = callback;
    }

    setOnExitCallback(callback) {
        this.onExitCallback = callback;
    }

    processEnter() {}

    processOpen() {}

    processExit() {}

}

class PanelOption {

    constructor(value, key, selectable=true) {
        this.value = value;
        this.key = key;
        this.selectable = selectable;
    }

}

class ListPanel extends OpenablePanel {

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
        this.currentIndex = 0;
        while (this.currentIndex < this.options.length) {
            if (this.options[this.currentIndex].selectable) {
                break;
            } else {
                this.currentIndex++;
            }
        }
        this.focusIndex = this.currentIndex;
        this.onEnterCallback = undefined;
    }

    setOptionByKey(optionKey) {
        this.currentIndex = 0;
        this.focusIndex = 0;
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].selectable && this.options[i].key === optionKey) {
                this.currentIndex = i;
                this.focusIndex = i;
                break;
            }
        }
    }

    updateOptionsByKey(optionKeys, currentKey) {
        this.options = [];
        this.currentIndex = 0;
        var counter = 0;
        for (let optionKey of optionKeys) {
            if (this.supported[optionKey]) {
                this.options.push(this.supported[optionKey]);
                if (optionKey === currentKey) {
                    this.currentIndex = counter;
                }
                counter++;
            }
        }
        this.focusIndex = this.currentIndex;
    }

    getCurrentKey() {
        return this.options[this.currentIndex].key;
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getFocusKey() {
        return this.options[this.focusIndex].key;
    }

    getFocusIndex() {
        return this.focusIndex;
    }

    getCurrentDisplayValue() {
        return this.options[this.focusIndex].value;
    }

    getOptions() {
        return this.options;
    }

    processUp() {
        if (this.options.length === 0) {
            return false;
        }

        this.focusIndex--;
        if (this.focusIndex < 0) {
            this.focusIndex = this.options.length - 1;
        }
        while (!this.options[this.focusIndex].selectable) {
            this.focusIndex--;
            if (this.focusIndex < 0) {
                this.focusIndex = this.options.length - 1;
            }
        }
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
        return true;
    }

    processDown() {
        if (this.options.length === 0) {
            return false;
        }

        this.focusIndex++;
        if (this.focusIndex >= this.options.length) {
            this.focusIndex = 0;
        }
        while (!this.options[this.focusIndex].selectable) {
            this.focusIndex++;
            if (this.focusIndex >= this.options.length) {
                this.focusIndex = 0;
            }
        }
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
        return true;
    }

    processEnter() {
        if (this.options.length === 0) {
            return;
        }
        
        let previous = this.currentIndex;
        this.currentIndex = this.focusIndex;
        if (previous !== this.currentIndex && this.onEnterCallback) {
            this.onEnterCallback(this.getCurrentKey());
        }
    }

    processOpen() {
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
    }

    processExit() {
        this.focusIndex = this.currentIndex;
        if (this.onExitCallback) {
            this.onExitCallback(this.getCurrentKey());
        }
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

    getCurrentDisplayValue() {
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
        return this.value;
    }

    getCurrentDisplayValue() {
        return String(this.value) + ' / ' + String(this.getDenominator());
    }

}

class ScrollPanel extends ValuePanel {

    constructor(title, keycode) {
        super(title, keycode);
        this.value = undefined;
        this.type = PanelType.SCROLL;
    }

    setValue(scrollState) {
        this.value = scrollState;
    }

    getValue() {
        return this.value;
    }

    getCurrentDisplayValue() {
        let displayName = '';
        let scrollState = this.value;
        if (!scrollState) {
            return displayName;
        }
        if (scrollState.x !== undefined) {
            displayName += 'X: ' + parseInt(scrollState.x * 100) + '%';
            if (scrollState.x >= 0.1 && scrollState.x < 1.0) {
                displayName += ' ';
            } else if (scrollState.x < 0.1) {
                displayName += '  ';
            }
        }
        if (scrollState.y !== undefined) {
            if (scrollState.x !== undefined) {
                displayName += '  ';
            }
            displayName += 'Y: ' + parseInt(scrollState.y * 100) + '%';
            if (scrollState.y >= 0.1 && scrollState.y < 1.0) {
                displayName += ' ';
            } else if (scrollState.y < 0.1) {
                displayName += '  ';
            }
        }
        return displayName;
    }

}

class DisplayPanel extends Panel {

    constructor(title) {
        super(title, undefined, PanelType.DISPLAY);
    }

}

class CharacterMap {

    static UPPERCASE_LETTERS = [
        [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
        [ 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' ],
        [ 'U', 'V', 'W', 'X', 'Y', 'Z' ],
    ];

    static LOWERCASE_LETTERS = [
        [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ],
        [ 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ],
        [ 'u', 'v', 'w', 'x', 'y', 'z' ],
    ];

    static NUMBERS = [
        [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
    ];

    static SPECIAL = [
        [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')' ],
        [ '-', '_', '=', '+', '?', '|', '[', ']', '{', '}' ],
        [ ';', ':', '\'', '"', ',', '.', '<', '>', '/', '\\' ],
        [ '`', '~', 'Σ', 'π', '©', '®', '°', '¡', '¿', '±' ],
        [ '£', '€', '¥', '₿', '¢', '▲', '▼', '•', '●', '█' ],
    ];

    static PANEL_ORDER = [
        { type: CharacterType.DEFAULT },
        { type: undefined },
        { type: CharacterType.CUSTOM, values: CharacterMap.UPPERCASE_LETTERS },
        { type: undefined },
        { type: CharacterType.CUSTOM, values: CharacterMap.LOWERCASE_LETTERS },
        { type: undefined },
        { type: CharacterType.CUSTOM, values: CharacterMap.NUMBERS },
        { type: undefined },
        { type: CharacterType.CUSTOM, values: CharacterMap.SPECIAL },
    ];
    
    constructor(type, value=undefined) {
        this.type = type;
        this.value = value;
    }

    getCharacter() {
        return this.value;
    }

    getType() {
        return this.type;
    }
}

class GridPanel extends OpenablePanel {

    constructor(title, keycode) {
        super(title, keycode, PanelType.CHARACTER);
        this.currentIndex = { row: 0, col: 0 };
        this.focusIndex = { row: 0, col: 0 };
        this.grid = this._generateGrid();
    }

    _generateGrid() {
        let grid = [];
        for (let section of CharacterMap.PANEL_ORDER) {
            if (section.type === CharacterType.DEFAULT) {
                grid.push([ { type: CharacterType.DEFAULT } ]);
            } else if (section.type === CharacterType.CUSTOM) {
                for (let characterRow of section.values) {
                    let row = [];
                    for (let character of characterRow) {
                        row.push({ type: CharacterType.CUSTOM, key: character, value: character });
                    }
                    grid.push(row);
                }
            } else if (section.type === undefined) {
                grid.push([ { type: undefined } ]);
            }
        }
        return grid;
    }

    getOptions() {
        return this.grid;
    }

    getCurrentDisplayValue() {
        return new CharacterMap(
            this.grid[this.currentIndex.row][this.currentIndex.col].type,
            this.grid[this.currentIndex.row][this.currentIndex.col].value
        );
    }

    getCurrentKey() {
        return new CharacterMap(
            this.grid[this.currentIndex.row][this.currentIndex.col].type,
            this.grid[this.currentIndex.row][this.currentIndex.col].key
        );
    }

    getFocusKey() {
        return new CharacterMap(
            this.grid[this.focusIndex.row][this.focusIndex.col].type,
            this.grid[this.focusIndex.row][this.focusIndex.col].key
        );
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getFocusIndex() {
        return this.focusIndex;
    }

    processUp() {
        this.focusIndex.row--;
        if (this.focusIndex.row < 0) {
            this.focusIndex.row = this.grid.length - 1;
        }
        while (this.grid[this.focusIndex.row][0].type === undefined) {
            this.focusIndex.row--;
            if (this.focusIndex.row < 0) {
                this.focusIndex.row = this.grid.length - 1;
            }
        }
        if (this.focusIndex.col >= this.grid[this.focusIndex.row].length) {
            this.focusIndex.col = this.grid[this.focusIndex.row].length - 1;
        }
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
        return true;
    }

    processDown() {
        this.focusIndex.row++;
        if (this.focusIndex.row >= this.grid.length) {
            this.focusIndex.row = 0;
        }
        while (this.grid[this.focusIndex.row][0].type === undefined) {
            this.focusIndex.row++;
            if (this.focusIndex.row >= this.grid.length) {
                this.focusIndex.row = 0;
            }
        }
        if (this.focusIndex.col >= this.grid[this.focusIndex.row].length) {
            this.focusIndex.col = this.grid[this.focusIndex.row].length - 1;
        }
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
        return true;
    }

    processLeft() {
        this.focusIndex.col--;
        if (this.focusIndex.col < 0) {
            this.focusIndex.row--;
            if (this.focusIndex.row < 0) {
                this.focusIndex.row = this.grid.length - 1;
            }
            while (this.grid[this.focusIndex.row][0].type === undefined) {
                this.focusIndex.row--;
                if (this.focusIndex.row < 0) {
                    this.focusIndex.row = this.grid.length - 1;
                }
            }
            this.focusIndex.col = this.grid[this.focusIndex.row].length - 1;
        }
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
        return true;
    }

    processRight() {
        this.focusIndex.col++;
        if (this.focusIndex.col >= this.grid[this.focusIndex.row].length) {
            this.focusIndex.row++;
            if (this.focusIndex.row >= this.grid.length) {
                this.focusIndex.row = 0;
            }
            while (this.grid[this.focusIndex.row][0].type === undefined) {
                this.focusIndex.row++;
                if (this.focusIndex.row >= this.grid.length) {
                    this.focusIndex.row = 0;
                }
            }
            this.focusIndex.col = 0;
        }
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getFocusKey());
        }
        return true;
    }

    processEnter() {
        let previousValue = this.grid[this.currentIndex.row][this.currentIndex.col];
        let selectedValue = this.grid[this.focusIndex.row][this.focusIndex.col];
        this.currentIndex = { row: this.focusIndex.row, col: this.focusIndex.col };
        if ((previousValue.type !== selectedValue.type || previousValue.key !== selectedValue.key) && this.onEnterCallback) {
            this.onEnterCallback(new CharacterMap(
                this.grid[this.currentIndex.row][this.currentIndex.col].type,
                this.grid[this.currentIndex.row][this.currentIndex.col].key
            ));
        }
    }

    processOpen() {
        if (this.onFocusCallback) {
            this.onFocusCallback(new CharacterMap(
                this.grid[this.focusIndex.row][this.focusIndex.col].type,
                this.grid[this.focusIndex.row][this.focusIndex.col].key
            ));
        }
    }

    processExit() {
        this.focusIndex = { row: this.currentIndex.row, col: this.currentIndex.col };
        if (this.onExitCallback) {
            this.onExitCallback(this.getCurrentKey());
        }
    }

}

class PanelManager {

    static initPanels() {
        let panelMap = {};

        // Fractal Panel
        let fractalOptions = [
            new PanelOption(Text.FRACTAL_SHAPES, undefined, false),
            new PanelOption(FractalConfig[FractalKeys.SIERPINSKI_TRIANGLE].name, FractalKeys.SIERPINSKI_TRIANGLE),
            new PanelOption(FractalConfig[FractalKeys.SIERPINSKI_CARPET].name, FractalKeys.SIERPINSKI_CARPET),
            new PanelOption(FractalConfig[FractalKeys.SIERPINSKI_HEXAGON].name, FractalKeys.SIERPINSKI_HEXAGON),
            new PanelOption(FractalConfig[FractalKeys.HEXAFLAKE].name, FractalKeys.HEXAFLAKE),
            new PanelOption(FractalConfig[FractalKeys.KOCH_SNOWFLAKE].name, FractalKeys.KOCH_SNOWFLAKE),
            new PanelOption(FractalConfig[FractalKeys.KOCH_ANTISNOWFLAKE].name, FractalKeys.KOCH_ANTISNOWFLAKE),
            new PanelOption(FractalConfig[FractalKeys.TRIFLAKE].name, FractalKeys.TRIFLAKE),

            new PanelOption('', undefined, false),
            new PanelOption(Text.FRACTAL_PATTERNS, undefined, false),
            new PanelOption(FractalConfig[FractalKeys.CANTOR_SET].name, FractalKeys.CANTOR_SET),
            new PanelOption(FractalConfig[FractalKeys.CANTOR_DUST].name, FractalKeys.CANTOR_DUST),
            new PanelOption(FractalConfig[FractalKeys.FIBONACCI_WORD_FRACTAL].name, FractalKeys.FIBONACCI_WORD_FRACTAL),
            new PanelOption(FractalConfig[FractalKeys.H_TREE].name, FractalKeys.H_TREE),
            new PanelOption(FractalConfig[FractalKeys.MINKOWSKI_SAUSAGE].name, FractalKeys.MINKOWSKI_SAUSAGE),
            new PanelOption(FractalConfig[FractalKeys.SIERPINSKI_MAZE].name, FractalKeys.SIERPINSKI_MAZE),
            new PanelOption(FractalConfig[FractalKeys.T_SQUARE].name, FractalKeys.T_SQUARE),
            new PanelOption(FractalConfig[FractalKeys.VICSEK_FRACTAL].name, FractalKeys.VICSEK_FRACTAL),
            new PanelOption(FractalConfig[FractalKeys.V_TREE].name, FractalKeys.V_TREE),

            new PanelOption('', undefined, false),
            new PanelOption(Text.SPACE_FILLING_CURVES, undefined, false),
            new PanelOption(FractalConfig[FractalKeys.DRAGON_CURVE].name, FractalKeys.DRAGON_CURVE),
            new PanelOption(FractalConfig[FractalKeys.HILBERT_CURVE].name, FractalKeys.HILBERT_CURVE),
            new PanelOption(FractalConfig[FractalKeys.MOORE_CURVE].name, FractalKeys.MOORE_CURVE),
            new PanelOption(FractalConfig[FractalKeys.PEANO_CURVE].name, FractalKeys.PEANO_CURVE),
            new PanelOption(FractalConfig[FractalKeys.GREEK_CROSS].name, FractalKeys.GREEK_CROSS),
            new PanelOption(FractalConfig[FractalKeys.GOSPER_CURVE].name, FractalKeys.GOSPER_CURVE),
            new PanelOption(FractalConfig[FractalKeys.SIERPINSKI_ARROWHEAD].name, FractalKeys.SIERPINSKI_ARROWHEAD),
            new PanelOption(FractalConfig[FractalKeys.SIERPINSKI_CURVE].name, FractalKeys.SIERPINSKI_CURVE),
        ];
        let fractalPanel = new ListPanel(Text.FRACTAL, 'f', fractalOptions);
        panelMap[PanelKeys.FRACTAL] = fractalPanel;

        // N-Step Panel
        let nStepPanel = new ValuePanel(Text.N_STEP, 'n', true);
        panelMap[PanelKeys.N_STEP] = nStepPanel;

        // Step Panel
        let stepPanel = new StepValuePanel(Text.STEP, 's', () => { return nStepPanel.getValue() });
        panelMap[PanelKeys.STEP] = stepPanel;

        // Mode Panel
        let modeOptions = [
            new PanelOption(Text.SHAPES, Modes.SHAPES),
            new PanelOption(Text.BLOCKS, Modes.BLOCKS),
            new PanelOption(Text.LINES, Modes.LINES),
        ];
        let modePanel = new ListPanel(Text.MODE, 'm', modeOptions);
        panelMap[PanelKeys.MODE] = modePanel;

        // Inverse Panel
        let inversePanel = new ValuePanel(Text.INVERSE, 'i');
        panelMap[PanelKeys.INVERSE] = inversePanel;

        // Rotation Panel
        let rotationOptions = [
            new PanelOption(Text.STANDARD, Rotations.STANDARD),
            new PanelOption(Text.LEFT, Rotations.LEFT),
            new PanelOption(Text.RIGHT, Rotations.RIGHT),
            new PanelOption(Text.FLIP, Rotations.FLIP),
            new PanelOption(Text.DIAGONAL, Rotations.DIAGONAL),
        ];
        let rotationPanel = new ListPanel(Text.ROTATION, 'r', rotationOptions);
        panelMap[PanelKeys.ROTATION] = rotationPanel;

        // Scroll Panel
        let scrollPanel = new ScrollPanel(Text.SCROLL, 'arrows');
        panelMap[PanelKeys.SCROLL] = scrollPanel;

        // Controls Panel
        let controlsPanel = new DisplayPanel(Text.CONTROLS);
        panelMap[PanelKeys.CONTROLS] = controlsPanel;

        // Line Type Panel
        let lineTypeOptions = [
            new PanelOption(Text.STANDARD, LineTypes.STANDARD),
            new PanelOption(Text.BOLD, LineTypes.BOLD),
            new PanelOption(Text.DOUBLE, LineTypes.DOUBLE),
        ];
        let lineTypePanel = new ListPanel(Text.LINE_TYPE, 'l', lineTypeOptions);
        panelMap[PanelKeys.LINE_TYPE] = lineTypePanel;

        // Character Panel
        let characterPanel = new GridPanel(Text.CHARACTER, 'k');
        panelMap[PanelKeys.CHARACTER] = characterPanel;

        return panelMap;
    }

}

module.exports = {
    PanelManager: PanelManager,
    PanelType: PanelType,
}