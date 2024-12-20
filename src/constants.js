const FractalKeys = {
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

const PanelKeys = {
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

const ViewKeys = {
    FRACTAL: 'fractal',
    SPLASH:  'splash',
    LOADING: 'loading',
}

const Menus = {
    GENERAL:   'general',
    DESIGN:    'design',
    ANIMATION: 'animation',
}

const Rotations = {
    STANDARD: 'standard',
    FLIP:     'flip',
    LEFT:     'left',
    RIGHT:    'right',
    DIAGONAL: 'diagonal',
}

const Modes = {
    BLOCKS: 'blocks',
    LINES:  'lines',
    SHAPES: 'shapes',
}

const VerticalAlign = {
    TOP:    'TOP',
    CENTER: 'CENTER',
    BOTTOM: 'BOTTOM',
}

const HorizontalAlign = {
    LEFT:   'LEFT',
    CENTER: 'CENTER',
    RIGHT:  'RIGHT',
}

const Text = {
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
    Text: Text,
    VerticalAlign,
    HorizontalAlign,
}