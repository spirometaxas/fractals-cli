const { Dashboard } = require('./dashboard.js');
const { StateController } = require('./statecontroller.js');
const { ViewController } = require('./viewcontroller.js');
const { PanelManager } = require('./panels.js');

const KeyMap = {
    CTRL_C: '\u0003',
    ESC: '\u001B',
    UP: '\u001b[A',
    DOWN: '\u001b[B',
    RIGHT: '\u001b[C',
    LEFT: '\u001b[D',
    // SLASH: '\u002F',
    // BACKSLASH: '\u005C',
    BACKSPACE: '\u0008',
    DELETE: '\u007F',
    ENTER_LF: '\u000A',
    ENTER_CR: '\u000D',
    LETTER_F: 'F',
    LETTER_I: 'I',
    LETTER_M: 'M',
    LETTER_N: 'N',
    LETTER_P: 'P',
    LETTER_R: 'R',
    LETTER_S: 'S',
    // LETTERS: [
    //     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // ],
    // NUMBERS: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
    // SPECIAL_CHARACTERS: [ '-', ' ' ],
}

const DEGUG_MODE = true;  // TODO: Set to false

class App {

    start(config) {
        let viewController = new ViewController();
        let panels = PanelManager.initPanels();

        this.dashboard = new Dashboard(viewController, panels);
        this.stateController = new StateController(config, viewController, panels);

        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdout.write('\u001b[?1049h');  // Enter alternate screen mode
        process.stdout.write('\u001B[?25l');    // Hise cursor
        this._initHandlers();
        this._draw(true);
    }

    _draw(full) {
        const renderConfig = this.stateController.getRenderConfig();
        this._clearScreen(full);
        process.stdout.write(this.dashboard.render(renderConfig));
    }

    _clearScreen(full) {
        if (full) {
            process.stdout.write('\u001b[2J');  // Clear screen
        }
        process.stdout.write('\u001b[H');   // Move cursor to home position
    }

    _initHandlers() {
        process.stdin.on('data', key => {
            try {
                var handled = false;
                if (key === KeyMap.CTRL_C || key === KeyMap.ESC) {
                    this.exit();
                } else if (key === KeyMap.UP) {
                    handled = this.stateController.processUp();
                } else if (key === KeyMap.DOWN) {
                    handled = this.stateController.processDown();
                } else if (key === KeyMap.LEFT) {
                    handled = this.stateController.processLeft();
                } else if (key === KeyMap.RIGHT) {
                    handled = this.stateController.processRight();
                } else if (key === KeyMap.LETTER_F || key === KeyMap.LETTER_F.toLowerCase()) {
                    handled = this.stateController.processF();
                } else if (key === KeyMap.LETTER_N || key === KeyMap.LETTER_N.toLowerCase()) {
                    handled = this.stateController.processN(key === KeyMap.LETTER_N);
                } else if (key === KeyMap.LETTER_S || key === KeyMap.LETTER_S.toLowerCase()) {
                    handled = this.stateController.processS(key === KeyMap.LETTER_S);
                } else if (key === KeyMap.LETTER_I || key === KeyMap.LETTER_I.toLowerCase()) {
                    handled = this.stateController.processI();
                } else if (key === KeyMap.LETTER_R || key === KeyMap.LETTER_R.toLowerCase()) {
                    handled = this.stateController.processR();
                } else if (key === KeyMap.LETTER_M || key === KeyMap.LETTER_M.toLowerCase()) {
                    handled = this.stateController.processM();
                } else if (key === KeyMap.LETTER_P || key === KeyMap.LETTER_P.toLowerCase()) {
                    handled = this.stateController.processP();
                } else if (key === KeyMap.BACKSPACE || key === KeyMap.DELETE) {
                    handled = this.stateController.processBack();
                } else if (key === KeyMap.ENTER_CR || key === KeyMap.ENTER_LF) {
                    handled = this.stateController.processEnter();
                }

                if (handled) {
                    this._draw(false);
                }
            } catch(e) {
                if (DEGUG_MODE) {
                    this.exit(e.stack);
                } else {
                    this.exit('An error occurred, exiting.');
                }
            }
        });

        // On terminal resize
        process.on("SIGWINCH", () => {
            try {
                this.stateController.updateScrollingOnResize();
                this._draw(true);
                process.stdout.write('\u001B[?25l');  // Hise cursor
            } catch(e) {
                if (DEGUG_MODE) {
                    this.exit(e.stack);
                } else {
                    this.exit('An error occurred, exiting.');
                }
            }
        });
    }

    exit(message) {
        process.stdout.write('\u001b[?1049l');  // Exit altername screen mode
        process.stdout.write('\u001B[?25h');    // Show cursor
        if (message) {
            console.log(message);
        }
        process.exit();
    }

}

module.exports = {
    App: App,
}