FractalKeys = {
    SIERPINSKI_TRIANGLE: 'sierpinski_triangle',
    SIERPINSKI_CARPET:   'sierpinski_carpet',
    SIERPINSKI_HEXAGON:  'sierpinski_hexagon',
    HEXAFLAKE:           'hexaflake',
    KOCH_SNOWFLAKE:      'koch_snowflake',
    KOCH_ANTISNOWFLAKE:  'koch_antisnowflake',
    TRIFLAKE:            'triflake',
}

FractalData = {
    'sierpinski_triangle': {
        name: 'Sierpinski Triangle',
        description: '',
    },
    'sierpinski_carpet': {
        name: 'Sierpinski Carpet',
        description: '',
    },
    'sierpinski_hexagon': {
        name: 'Sierpinski Hexagon',
        description: '',
    },
    'hexaflake': {
        name: 'Hexaflake',
        description: '',
    },
    'koch_snowflake': {
        name: 'Koch Snowflake',
        description: '',
    },
    'koch_antisnowflake': {
        name: 'Koch Anti-Snowflake',
        description: '',
    },
    'triflake': {
        name: 'Triflake',
        description: '',
    },
}

PanelKeys = {
    FRACTAL:  'FRACTAL',
    N_STEP:   'N_STEP',
    STEP:     'STEP',
    MODE:     'MODE',
    INVERSE:  'INVERSE',
    ROTATION: 'ROTATION',
    CONTROLS: 'CONTROLS',
}

Rotations = {
    STANDARD: 'standard',
    FLIP:     'flip',
    LEFT:     'left',
    RIGHT:    'right',
}

Modes = {
    BLOCKS: 'blocks',
    LINES:  'lines',
    SHAPES: 'shapes',
}

Shapes = {
    TRIANGLE_UP:   '▲',
    TRIANGLE_DOWN: '▼',
    BLOCK:         '█',
    SPACE:         ' ',
}

Lines = {
    '─': {
        STANDARD: '─',
        BOLD:     '━',
        DOUBLE:   '═',
    },
    '│': {
        STANDARD: '│',
        BOLD:     '┃',
        DOUBLE:   '║',
    },
    '┌': {
        STANDARD: '┌',
        BOLD:     '┏',
        DOUBLE:   '╔',
    },
    '┐': {
        STANDARD: '┐',
        BOLD:     '┓',
        DOUBLE:   '╗',
    },
    '┘': {
        STANDARD: '┘',
        BOLD:     '┛',
        DOUBLE:   '╝',
    },
    '└': {
        STANDARD: '└',
        BOLD:     '┗',
        DOUBLE:   '╚',
    },
    '┴': {
        STANDARD: '┴',
        BOLD:     '┻',
        DOUBLE:   '╩',
    },
    '├': {
        STANDARD: '├',
        BOLD:     '┣',
        DOUBLE:   '╠',
    },
    '┤': {
        STANDARD: '┤',
        BOLD:     '┫',
        DOUBLE:   '╣',
    },
    '┬': {
        STANDARD: '┬',
        BOLD:     '┳',
        DOUBLE:   '╦',
    },
    '┼': {
        STANDARD: '┼',
        BOLD:     '╋',
        DOUBLE:   '╬',
    },
}

LineTypes = {
    STANDARD: 'STANDARD',
    BOLD:     'BOLD',
    DOUBLE:   'DOUBLE',
}

Text = {
    FRACTAL: 'Fractal',
    FRACTAL_SHAPES: 'Fractal Shapes',
    FRACTAL_PATTERNS: 'Fractal Patterns',
    N_STEP: 'N-Step',
    STEP: 'Step',
    MODE: 'Mode',
    BLOCKS: 'Blocks',
    LINES: 'Lines',
    SHAPES: 'Shapes',
    INVERSE: 'Inverse',
    ROTATION: 'Rotation',
    STANDARD: 'Standard',
    LEFT: 'Left',
    RIGHT: 'Right',
    FLIP: 'Flip',
    ON: 'On',
    OFF: 'Off',
    CONTROLS: 'Controls',
    NAVIGATE: 'Navigate',
    SELECT: 'Select',
    EXIT: 'Exit',
    UP: 'Up',
    DOWN: 'Down',
    ENTER: 'Enter',
    BACKSPACE: 'Backspace',
    NOT_SUPPORTED: 'Not Supported',
    MORE: 'More',
}

module.exports = {
    FractalKeys: FractalKeys,
    FractalData: FractalData,
    PanelKeys: PanelKeys,
    Rotations: Rotations,
    Modes: Modes,
    Shapes: Shapes,
    Lines: Lines,
    LineTypes: LineTypes,
    Text: Text,
}