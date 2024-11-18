FractalKeys = {
    SIERPINSKI_TRIANGLE: 'sierpinski_triangle',
    SIERPINSKI_CARPET:   'sierpinski_carpet',
    SIERPINSKI_HEXAGON:  'sierpinski_hexagon',
    HEXAFLAKE:           'hexaflake',
    KOCH_SNOWFLAKE:      'koch_snowflake',
    KOCH_ANTISNOWFLAKE:  'koch_antisnowflake',
    TRIFLAKE:            'triflake',
    CANTOR_SET:          'cantor_set',
    CANTOR_DUST:         'cantor_dust',
    H_TREE:              'h_tree',
    MINKOWSKI_SAUSAGE:   'minkowski_sausage',
    T_SQUARE:            't_square',
    VICSEK_FRACTAL:      'vicsek_fractal',
    V_TREE:              'v_tree',
    HILBERT_CURVE:       'hilbert_curve',
    MOORE_CURVE:         'moore_curve',
    PEANO_CURVE:         'peano_curve',
}

PanelKeys = {
    FRACTAL:  'fractal',
    N_STEP:   'n_step',
    STEP:     'step',
    MODE:     'mode',
    INVERSE:  'inverse',
    ROTATION: 'rotation',
    SCROLL:   'scroll',
    CONTROLS: 'controls',
}

ViewKeys = {
    FRACTAL: 'fractal',
    SPLASH:  'splash',
    LOADING: 'loading',
}

Rotations = {
    STANDARD: 'standard',
    FLIP:     'flip',
    LEFT:     'left',
    RIGHT:    'right',
    DIAGONAL: 'diagonal',
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

VerticalAlign = {
    TOP:    'TOP',
    CENTER: 'CENTER',
    BOTTOM: 'BOTTOM',
}

HorizontalAlign = {
    LEFT:   'LEFT',
    CENTER: 'CENTER',
    RIGHT:  'RIGHT',
}

Text = {
    FRACTAL: 'Fractal',
    FRACTAL_SHAPES: 'Fractal Shapes',
    FRACTAL_PATTERNS: 'Fractal Patterns',
    SPACE_FILLING_CURVES: 'Space-Filling Curves',
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
    DIAGONAL: 'Diagonal',
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
    SCROLL: 'Scroll',
}

module.exports = {
    FractalKeys: FractalKeys,
    PanelKeys: PanelKeys,
    ViewKeys: ViewKeys,
    Rotations: Rotations,
    Modes: Modes,
    Shapes: Shapes,
    Lines: Lines,
    LineTypes: LineTypes,
    Text: Text,
    VerticalAlign,
    HorizontalAlign,
}