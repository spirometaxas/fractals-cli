FractalKeys = {
    SIERPINSKI_TRIANGLE:    'sierpinski_triangle',
    SIERPINSKI_CARPET:      'sierpinski_carpet',
    SIERPINSKI_HEXAGON:     'sierpinski_hexagon',
    HEXAFLAKE:              'hexaflake',
    KOCH_SNOWFLAKE:         'koch_snowflake',
    KOCH_ANTISNOWFLAKE:     'koch_antisnowflake',
    TRIFLAKE:               'triflake',
    CANTOR_SET:             'cantor_set',
    CANTOR_DUST:            'cantor_dust',
    FIBONACCI_WORD_FRACTAL: 'fibonacci_word_fractal',
    H_TREE:                 'h_tree',
    MINKOWSKI_SAUSAGE:      'minkowski_sausage',
    SIERPINSKI_MAZE:        'sierpinski_maze',
    T_SQUARE:               't_square',
    VICSEK_FRACTAL:         'vicsek_fractal',
    V_TREE:                 'v_tree',
    DRAGON_CURVE:           'dragon_curve',
    HILBERT_CURVE:          'hilbert_curve',
    MOORE_CURVE:            'moore_curve',
    PEANO_CURVE:            'peano_curve',
    GREEK_CROSS:            'greek_cross',
    GOSPER_CURVE:           'gosper_curve',
    SIERPINSKI_ARROWHEAD:   'sierpinski_arrowhead',
    SIERPINSKI_CURVE:       'sierpinski_curve',
}

PanelKeys = {
    FRACTAL:  'fractal',
    N_STEP:   'n_step',
    STEP:     'step',
    MODE:     'mode',
    INVERSE:  'inverse',
    ROTATION: 'rotation',

    LINE_TYPE: 'line_type',
    CHARACTER: 'character',

    SCROLL:   'scroll',
    CONTROLS: 'controls',
}

ViewKeys = {
    FRACTAL: 'fractal',
    SPLASH:  'splash',
    LOADING: 'loading',
}

Menus = {
    GENERAL:   'general',
    DESIGN:    'design',
    ANIMATION: 'animation',
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
    '╱': {
        STANDARD: '╱',
        BOLD:     '\u001b[1m╱\u001b[22m',
    },
    '╲': {
        STANDARD: '╲',
        BOLD:     '\u001b[1m╲\u001b[22m',
    },
    '_': {
        STANDARD: '_',
        BOLD:     '\u001b[1m_\u001b[22m',
    }
}

LineTypes = {
    STANDARD: 'STANDARD',
    BOLD:     'BOLD',
    DOUBLE:   'DOUBLE',
}

CharacterType = {
    DEFAULT: 'DEFAULT',
    CUSTOM: 'CUSTOM',
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
    LINE_TYPE: 'Line Type',
    BOLD: 'Bold',
    DOUBLE: 'Double',
    GENERAL_MENU: 'General Menu',
    DESIGN_MENU: 'Design Menu',
    ANIMATION_MENU: 'Animation Menu',
    CHARACTER: 'Character',
    DEFAULT: 'Default',
    ARROWS: 'Arrows',
}

module.exports = {
    FractalKeys: FractalKeys,
    PanelKeys: PanelKeys,
    ViewKeys: ViewKeys,
    Menus: Menus,
    Rotations: Rotations,
    Modes: Modes,
    Shapes: Shapes,
    Lines: Lines,
    LineTypes: LineTypes,
    CharacterType: CharacterType,
    Text: Text,
    VerticalAlign,
    HorizontalAlign,
}