const { Utils } = require('./utils.js');
const { Renderer } = require('./renderer.js');
const { Colors } = require('./colors.js');
const { Shapes, PanelKeys, Text } = require('./constants.js');
const { PanelType } = require('./panels.js');

class Layout {

    static PANEL_WIDTH = 36;
    static PANEL_LEFT_BUFFER = 1;
    static PANEL_RIGHT_BUFFER = 1;
    static VIEWER_RIGHT_BUFFER = 1;
    static MIN_PANEL_OPEN_HEIGHT = 11;

    static TITLE = [
        ' __  __       __ ___         __ ',
        '|__ |__)  ▲  /    |   ▲  |  (__ ',
        '|   |  \\ ▲ ▲ \\__  |  ▲ ▲ |__ __)',
        '              CLI               ',
    ];

    static MIN_TITLE_WINDOW_HEIGHT = Layout.MIN_PANEL_OPEN_HEIGHT + Layout.TITLE.length + 2;
    static FULL_PANEL_WIDTH = Layout.PANEL_LEFT_BUFFER + Layout.PANEL_WIDTH + Layout.PANEL_RIGHT_BUFFER;
}

class Dashboard {

    BG_COLOR = Colors.BLACK;
    FG_COLOR = Colors.WHITE;

    constructor(viewController, panels) {
        this.viewController = viewController;
        this.panels = panels;
        this.board = [];
    }

    _createBoard(w, h) {
        let board = [];
        for (let i = 0; i < h; i++) {
            let row = [];
            for (let j = 0; j < w; j++) {
                row.push({ 
                    character: Shapes.SPACE,
                    config: { 
                        backgroundColor: this.BG_COLOR.BG,
                        foregroundColor: this.FG_COLOR.FG,
                    },
                });
            }
            board.push(row);
        }
        return board;
    }

    getNumberOfLines() {
        return this.board.length;
    }

    _makeBold(x, y, length) {
        for (var c = 0; c < length; c++) {
            if (this.board[y] && this.board[y][x + c]) {
                this.board[y][x + c].config.bold = true;
            }
        }
    }

    _setTextColor(x, y, length, color, bold) {
        for (var c = 0; c < length; c++) {
            if (this.board[y] && this.board[y][x + c]) {
                this.board[y][x + c].config.foregroundColor = color.FG;
                this.board[y][x + c].config.bold = bold;
            }
        }
    }

    _setHighlightColor(x, y, length, color) {
        for (var c = 0; c < length; c++) {
            if (this.board[y] && this.board[y][x + c]) {
                this.board[y][x + c].config.backgroundColor = color.BG;
                this.board[y][x + c].config.foregroundColor = Colors.BLACK.FG;
            }
        }
    }

    _setText(x, y, text, maxLength=undefined, type=undefined) {
        var offset = 0;
        if (maxLength !== undefined && type !== undefined) {
            if (type === 'center') {
                offset = Math.max(Math.ceil((maxLength - text.length) / 2), 0);
            } else if (type === 'right') {
                offset = Math.max(maxLength - text.length, 0);
            }
        }
        let textLength = maxLength ? Math.min(text.length, maxLength) : text.length;
        for (var i = 0; i < textLength; i++) {
            this._insertCharacter({ x: x + offset + i, y: y }, '' + text[i]);
        }
    }

    _insertCharacter(pos, character) {
        if (this.board[pos.y] && this.board[pos.y][pos.x]) {
            this.board[pos.y][pos.x].character = character;
        }
    }

    _drawBox(pos, w, h) {
        this._insertCharacter({ x: pos.x, y: pos.y }, '┌');
        this._insertCharacter({ x: pos.x + w - 1, y: pos.y }, '┐');
        this._insertCharacter({ x: pos.x, y: pos.y + h - 1 }, '└');
        this._insertCharacter({ x: pos.x + w - 1, y: pos.y + h - 1 }, '┘');

        for (let i = 1; i < w - 1; i++) {
            this._insertCharacter({ x: pos.x + i, y: pos.y }, '─');
            this._insertCharacter({ x: pos.x + i, y: pos.y + h - 1 }, '─');
        }

        for (let i = 1; i < h - 1; i++) {
            this._insertCharacter({ x: pos.x, y: pos.y + i }, '│');
            this._insertCharacter({ x: pos.x + w - 1, y: pos.y + i }, '│');
        }
    }

    _addTitle() {
        this._drawBox({ x: Layout.PANEL_LEFT_BUFFER, y: 0 }, Layout.PANEL_WIDTH, Layout.TITLE.length + 2);
        for (let i = 0; i < Layout.TITLE.length; i++) {
            this._setText(Layout.PANEL_LEFT_BUFFER + 1, i + 1, Layout.TITLE[i], Layout.PANEL_WIDTH - 2, 'center');
            this._makeBold(Layout.PANEL_LEFT_BUFFER + 1, i + 1, Layout.PANEL_WIDTH - 2);
        }
    }

    _getTitleHeight() {
        return Layout.TITLE.length + 2;
    }

    _drawOpenPanel(panel, pos, maxY) {
        let height = Math.max(Layout.MIN_PANEL_OPEN_HEIGHT, maxY - pos.y);
        this._insertCharacter({ x: pos.x, y: pos.y }, '┌');
        this._insertCharacter({ x: pos.x, y: pos.y + 1 }, '│');
        this._insertCharacter({ x: pos.x, y: pos.y + 2 }, '├');
        this._insertCharacter({ x: pos.x, y: pos.y + height - 1 }, '└');

        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y }, '┐');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + 1 }, '│');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + 2 }, '┤');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + height - 1 }, '┘');

        for (let i = 1; i < Layout.PANEL_WIDTH - 1; i++) {
            this._insertCharacter({ x: pos.x + i, y: pos.y }, '─');
            this._insertCharacter({ x: pos.x + i, y: pos.y + 2 }, '─');
            this._insertCharacter({ x: pos.x + i, y: pos.y + height - 1 }, '─');
        }

        for (let i = 3; i < height - 1; i++) {
            this._insertCharacter({ x: pos.x, y: pos.y + i }, '│');
            this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + i }, '│');
        }

        this._setText(pos.x + 2, pos.y + 1, panel.title, Layout.PANEL_WIDTH - 2, 'left');
        this._setHighlightColor(pos.x + 1, pos.y + 1, Layout.PANEL_WIDTH - 2, Colors.DARK_GRAY);
        this._setTextColor(pos.x + 1, pos.y + 1, Layout.PANEL_WIDTH - 2, Colors.WHITE, true);

        // Draw controls
        let firstLineText = Text.NAVIGATE + ':<' + Text.UP.toUpperCase() + '|' + Text.DOWN.toUpperCase() + '>';
        this._setText(pos.x + 2, pos.y + height - 3, firstLineText, Layout.PANEL_WIDTH - 4, 'center');
        this._setTextColor(pos.x + 2, pos.y + height - 3, Layout.PANEL_WIDTH - 4, Colors.MEDIUM_GRAY, false);
        this._setTextColor(pos.x + 18, pos.y + height - 3, Text.UP.length + Text.DOWN.length + 3, Colors.SKY_BLUE, false);

        let secondLineText = Text.SELECT + ':<' + Text.ENTER.toUpperCase() + '>  ' + Text.EXIT + ':<' + Text.BACKSPACE.toUpperCase() +  '>';
        this._setText(pos.x + 2, pos.y + height - 2, secondLineText, Layout.PANEL_WIDTH - 4, 'center');
        this._setTextColor(pos.x + 2, pos.y + height - 2, Layout.PANEL_WIDTH - 4, Colors.MEDIUM_GRAY, false);
        this._setTextColor(pos.x + 9, pos.y + height - 2, Text.ENTER.length + 2, Colors.SKY_BLUE, false);
        this._setTextColor(pos.x + 23, pos.y + height - 2, Text.BACKSPACE.length + 2, Colors.SKY_BLUE, false);

        // Draw items
        let currentYPos = 3;
        let scrollWindowSize = height - 7;

        if (!panel.visible) {
            this._setText(pos.x + 2, pos.y + currentYPos, Text.NOT_SUPPORTED, Layout.PANEL_WIDTH - 4, 'center');
            this._setTextColor(pos.x + 2, pos.y + currentYPos, Layout.PANEL_WIDTH - 4, Colors.MEDIUM_GRAY, false);
            return;
        }

        let startIndex = 0
        if (panel.getFocusIndex() + 1 > scrollWindowSize) {
            startIndex = (panel.getFocusIndex() + 1) - scrollWindowSize;
        }

        for (let i = 0; i < Math.min(panel.getOptions().length, scrollWindowSize); i++) {
            let option = panel.getOptions()[i + startIndex];
            if (option.selectable) {
                this._setText(pos.x + 2, pos.y + currentYPos, String(option.name), Layout.PANEL_WIDTH - 4, 'left');
                if ((i + startIndex) === panel.getCurrentIndex()) {
                    this._setTextColor(pos.x + 1, pos.y + currentYPos, Layout.PANEL_WIDTH - 2, Colors.FOCUS_GOLD, true);
                }
                if ((i + startIndex) === panel.getFocusIndex()) {
                    this._setHighlightColor(pos.x + 1, pos.y + currentYPos, Layout.PANEL_WIDTH - 2, Colors.WHITE);
                }
            } else {
                this._setText(pos.x + 2, pos.y + currentYPos, option.name ? '── ' + String(option.name) + ' ──' : '', Layout.PANEL_WIDTH - 4, 'center');
                this._setTextColor(pos.x + 2, pos.y + currentYPos, Layout.PANEL_WIDTH - 4, Colors.MEDIUM_GRAY, false);
            }
            currentYPos++;
        }

        if (scrollWindowSize < panel.getOptions().length && panel.getFocusIndex() < (panel.getOptions().length - 1)) {
            this._setText(pos.x + 2, pos.y + height - 4, '..' + Text.MORE.toLowerCase(), Layout.PANEL_WIDTH - 4, 'left');
            this._setTextColor(pos.x + 2, pos.y + height - 4, Layout.PANEL_WIDTH - 4, Colors.DARK_GRAY, false);
        }
    }

    _drawPanel(panel, pos, isFirst=false) {
        this._insertCharacter({ x: pos.x, y: pos.y }, isFirst ? '┌' : '╞');
        this._insertCharacter({ x: pos.x, y: pos.y + 1 }, '│');
        this._insertCharacter({ x: pos.x, y: pos.y + 2 }, '│');
        this._insertCharacter({ x: pos.x, y: pos.y + 3 }, '└');

        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y }, isFirst ? '┐' : '╡');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + 1 }, '│');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + 2 }, '│');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + 3 }, '┘');

        for (let i = 1; i < Layout.PANEL_WIDTH - 1; i++) {
            this._insertCharacter({ x: pos.x + i, y: pos.y }, isFirst ? '─' : '═');
            this._insertCharacter({ x: pos.x + i, y: pos.y + 3 }, '─');
        }

        this._setText(pos.x + 2, pos.y + 1, panel.title, Layout.PANEL_WIDTH - 2, 'left');
        this._setHighlightColor(pos.x + 1, pos.y + 1, Layout.PANEL_WIDTH - 2, Colors.DARK_GRAY);
        this._setTextColor(pos.x + 1, pos.y + 1, Layout.PANEL_WIDTH - 2, Colors.WHITE, true);

        if (panel.type === PanelType.LIST) {
            this._setText(pos.x + Layout.PANEL_WIDTH - 5, pos.y + 1, '<' + panel.keycode.toUpperCase() + '>', 3, 'right');
            this._setTextColor(pos.x + Layout.PANEL_WIDTH - 5, pos.y + 1, 3, Colors.SKY_BLUE, true);
        } else if (panel.type === PanelType.VALUE) {
            if (panel.increment) {
                this._setText(pos.x + Layout.PANEL_WIDTH - 13, pos.y + 1, '+:<' + panel.keycode.toLowerCase() + '> -:<' + panel.keycode.toUpperCase() + '>', 11, 'right');
                this._setTextColor(pos.x + Layout.PANEL_WIDTH - 5, pos.y + 1, 3, Colors.SKY_BLUE, true);
                this._setTextColor(pos.x + Layout.PANEL_WIDTH - 11, pos.y + 1, 3, Colors.SKY_BLUE, true);
                this._setTextColor(pos.x + Layout.PANEL_WIDTH - 6, pos.y + 1, 1, Colors.LIGHT_GRAY, true);
                this._setTextColor(pos.x + Layout.PANEL_WIDTH - 12, pos.y + 1, 1, Colors.LIGHT_GRAY, true);
            } else {
                this._setText(pos.x + Layout.PANEL_WIDTH - 5, pos.y + 1, '<' + panel.keycode.toUpperCase() + '>', 3, 'right');
                this._setTextColor(pos.x + Layout.PANEL_WIDTH - 5, pos.y + 1, 3, Colors.SKY_BLUE, true);
            }
        }

        if (panel.getValue() !== undefined) {
            let value = panel.getValue();
            if (value === true) {
                value = Text.ON;
            } else if (value === false) {
                value = Text.OFF;
            }
            this._setText(pos.x + 2, pos.y + 2, String(value), Layout.PANEL_WIDTH - 4, 'center');
        }

        return 4;
    }

    _drawDisplayPanel(panel, pos, maxY) {
        let height = maxY - pos.y;
        if (height < 2) {
            return 0;
        }
        this._insertCharacter({ x: pos.x, y: pos.y }, '┌');
        this._insertCharacter({ x: pos.x, y: pos.y + height - 1 }, '└');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y }, '┐');
        this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + height - 1 }, '┘');

        for (let i = 1; i < Layout.PANEL_WIDTH - 1; i++) {
            this._insertCharacter({ x: pos.x + i, y: pos.y }, '─');
            this._insertCharacter({ x: pos.x + i, y: pos.y + height - 1 }, '─');
        }

        for (let i = 1; i < height - 1; i++) {
            this._insertCharacter({ x: pos.x, y: pos.y + i }, '│');
            this._insertCharacter({ x: pos.x + Layout.PANEL_WIDTH - 1, y: pos.y + i }, '│');
        }

        // TODO: Add Controls content

        return height;
    }

    _addPanels(config, maxY) {
        let currentY = maxY >= Layout.MIN_TITLE_WINDOW_HEIGHT ? this._getTitleHeight() : 0;
        if (config.panels) {
            for (let i = 0; i < config.panels.length; i++) {
                let panelKey = config.panels[i];
                if (currentY >= maxY) {
                    break;
                }

                let panel = this.panels[panelKey];
                if (panel.type === PanelType.DISPLAY) {
                    currentY += this._drawDisplayPanel(panel, { x: Layout.PANEL_LEFT_BUFFER, y: currentY + 1 }, maxY);
                } else {
                    currentY += this._drawPanel(panel, { x: Layout.PANEL_LEFT_BUFFER, y: currentY }, i === 0) - 1;
                }
            }
        } else if (config.openPanel) {
            this._drawOpenPanel(this.panels[config.openPanel], { x: Layout.PANEL_LEFT_BUFFER, y: currentY }, maxY);
        }
    }

    _draw() {
        // TODO: Generate Optimized
        // return Renderer.generateStandard(this.board);
        return Renderer.generateOptimized(this.board);
    }

    render(config) {
        let dimensions = { rows: process.stdout.rows, columns: process.stdout.columns };
        this.board = this._createBoard(dimensions.columns, dimensions.rows);

        if (config.showPanels) {
            if (dimensions.rows >= Layout.MIN_TITLE_WINDOW_HEIGHT) {
                this._addTitle();
            }
            this._addPanels(config, dimensions.rows);
        }

        this.viewController.drawFractal(this.board, {}, config.showPanels);
        return this._draw();
    }

}

module.exports = {
    Dashboard: Dashboard,
    Layout: Layout,
}