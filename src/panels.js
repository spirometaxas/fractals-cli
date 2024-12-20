const { Text, FractalKeys, PanelKeys, Modes, Rotations } = require('./constants.js');
const { CharacterMap, LineTypes } = require('./characters.js');
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

const PanelOptionType = {
    LIST_ITEM: 'LIST_ITEM',
    GRID_ITEM: 'GRID_ITEM',
    EMPTY:     'EMPTY',
}

class PanelOption {

    constructor(value, key, type, selectable=true) {
        this.value = value;
        this.key = key;
        this.type = type;
        this.selectable = selectable;
    }

}

class ListItem extends PanelOption {

    constructor(value, key, selectable=true) {
        super(value, key, PanelOptionType.LIST_ITEM, selectable);
    }

}

class GridItem extends PanelOption {

    constructor(value, key, selectable=true) {
        super(value, key, PanelOptionType.GRID_ITEM, selectable);
    }

}

class TitleItem extends PanelOption {

    constructor(value) {
        super(value, undefined, PanelOptionType.LIST_ITEM, false);
    }

}

class EmptyItem extends PanelOption {

    constructor() {
        super('', undefined, PanelOptionType.EMPTY, false);
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

class GridPanel extends OpenablePanel {

    constructor(title, keycode, grid) {
        super(title, keycode, PanelType.CHARACTER);
        this.grid = grid;
        this.currentIndex = { row: 0, col: 0 };
        while (!this.grid[this.currentIndex.row][0].selectable) {
            this.currentIndex.row++;
            if (this.currentIndex.row >= this.grid.length) {
                this.currentIndex.row = 0;
                break;
            }
        }
        this.focusIndex = { row: this.currentIndex.row, col: 0 };
    }

    getOptions() {
        return this.grid;
    }

    getCurrentDisplayValue() {
        let currentItem = this.grid[this.currentIndex.row][this.currentIndex.col];
        if (currentItem.key === CharacterMap.DEFAULT) {
            return Text.DEFAULT;
        } else {
            return this.grid[this.currentIndex.row][this.currentIndex.col].value;
        }
    }

    getCurrentKey() {
        return this.grid[this.currentIndex.row][this.currentIndex.col];
    }

    getFocusKey() {
        return this.grid[this.focusIndex.row][this.focusIndex.col];
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
        while (!this.grid[this.focusIndex.row][0].selectable) {
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
        while (!this.grid[this.focusIndex.row][0].selectable) {
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
            while (!this.grid[this.focusIndex.row][0].selectable) {
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
            while (!this.grid[this.focusIndex.row][0].selectable) {
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
            this.onEnterCallback(this.getCurrentKey());
        }
    }

    processOpen() {
        if (this.onFocusCallback) {
            this.onFocusCallback(this.getCurrentKey());
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
            new TitleItem(Text.FRACTAL_SHAPES),
            new ListItem(FractalConfig[FractalKeys.SIERPINSKI_TRIANGLE].name, FractalKeys.SIERPINSKI_TRIANGLE),
            new ListItem(FractalConfig[FractalKeys.SIERPINSKI_CARPET].name, FractalKeys.SIERPINSKI_CARPET),
            new ListItem(FractalConfig[FractalKeys.SIERPINSKI_HEXAGON].name, FractalKeys.SIERPINSKI_HEXAGON),
            new ListItem(FractalConfig[FractalKeys.HEXAFLAKE].name, FractalKeys.HEXAFLAKE),
            new ListItem(FractalConfig[FractalKeys.KOCH_SNOWFLAKE].name, FractalKeys.KOCH_SNOWFLAKE),
            new ListItem(FractalConfig[FractalKeys.KOCH_ANTISNOWFLAKE].name, FractalKeys.KOCH_ANTISNOWFLAKE),
            new ListItem(FractalConfig[FractalKeys.TRIFLAKE].name, FractalKeys.TRIFLAKE),

            new EmptyItem(),
            new TitleItem(Text.FRACTAL_PATTERNS),
            new ListItem(FractalConfig[FractalKeys.CANTOR_SET].name, FractalKeys.CANTOR_SET),
            new ListItem(FractalConfig[FractalKeys.CANTOR_DUST].name, FractalKeys.CANTOR_DUST),
            new ListItem(FractalConfig[FractalKeys.FIBONACCI_WORD_FRACTAL].name, FractalKeys.FIBONACCI_WORD_FRACTAL),
            new ListItem(FractalConfig[FractalKeys.H_TREE].name, FractalKeys.H_TREE),
            new ListItem(FractalConfig[FractalKeys.MINKOWSKI_SAUSAGE].name, FractalKeys.MINKOWSKI_SAUSAGE),
            new ListItem(FractalConfig[FractalKeys.SIERPINSKI_MAZE].name, FractalKeys.SIERPINSKI_MAZE),
            new ListItem(FractalConfig[FractalKeys.T_SQUARE].name, FractalKeys.T_SQUARE),
            new ListItem(FractalConfig[FractalKeys.VICSEK_FRACTAL].name, FractalKeys.VICSEK_FRACTAL),
            new ListItem(FractalConfig[FractalKeys.V_TREE].name, FractalKeys.V_TREE),

            new EmptyItem(),
            new TitleItem(Text.SPACE_FILLING_CURVES),
            new ListItem(FractalConfig[FractalKeys.DRAGON_CURVE].name, FractalKeys.DRAGON_CURVE),
            new ListItem(FractalConfig[FractalKeys.HILBERT_CURVE].name, FractalKeys.HILBERT_CURVE),
            new ListItem(FractalConfig[FractalKeys.MOORE_CURVE].name, FractalKeys.MOORE_CURVE),
            new ListItem(FractalConfig[FractalKeys.PEANO_CURVE].name, FractalKeys.PEANO_CURVE),
            new ListItem(FractalConfig[FractalKeys.GREEK_CROSS].name, FractalKeys.GREEK_CROSS),
            new ListItem(FractalConfig[FractalKeys.GOSPER_CURVE].name, FractalKeys.GOSPER_CURVE),
            new ListItem(FractalConfig[FractalKeys.SIERPINSKI_ARROWHEAD].name, FractalKeys.SIERPINSKI_ARROWHEAD),
            new ListItem(FractalConfig[FractalKeys.SIERPINSKI_CURVE].name, FractalKeys.SIERPINSKI_CURVE),
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
            new ListItem(Text.SHAPES, Modes.SHAPES),
            new ListItem(Text.BLOCKS, Modes.BLOCKS),
            new ListItem(Text.LINES, Modes.LINES),
        ];
        let modePanel = new ListPanel(Text.MODE, 'm', modeOptions);
        panelMap[PanelKeys.MODE] = modePanel;

        // Inverse Panel
        let inversePanel = new ValuePanel(Text.INVERSE, 'i');
        panelMap[PanelKeys.INVERSE] = inversePanel;

        // Rotation Panel
        let rotationOptions = [
            new ListItem(Text.STANDARD, Rotations.STANDARD),
            new ListItem(Text.LEFT, Rotations.LEFT),
            new ListItem(Text.RIGHT, Rotations.RIGHT),
            new ListItem(Text.FLIP, Rotations.FLIP),
            new ListItem(Text.DIAGONAL, Rotations.DIAGONAL),
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
            new ListItem(Text.STANDARD, LineTypes.STANDARD),
            new ListItem(Text.BOLD, LineTypes.BOLD),
            new ListItem(Text.DOUBLE, LineTypes.DOUBLE),
        ];
        let lineTypePanel = new ListPanel(Text.LINE_TYPE, 'l', lineTypeOptions);
        panelMap[PanelKeys.LINE_TYPE] = lineTypePanel;

        // Character Panel
        let characterGrid = [
            [ new ListItem(CharacterMap.DEFAULT, CharacterMap.DEFAULT) ],
            [ new EmptyItem() ],
            ...CharacterMap.UPPERCASE_LETTERS.map(row => row.map(character => new GridItem(character, character))),
            [ new EmptyItem() ],
            ...CharacterMap.LOWERCASE_LETTERS.map(row => row.map(character => new GridItem(character, character))),
            [ new EmptyItem() ],
            ...CharacterMap.NUMBERS.map(row => row.map(character => new GridItem(character, character))),
            [ new EmptyItem() ],
            ...CharacterMap.SPECIAL.map(row => row.map(character => new GridItem(character, character))),
        ];
        let characterPanel = new GridPanel(Text.CHARACTER, 'k', characterGrid);
        panelMap[PanelKeys.CHARACTER] = characterPanel;

        return panelMap;
    }

}

module.exports = {
    PanelManager: PanelManager,
    PanelType: PanelType,
    PanelOptionType: PanelOptionType,
}