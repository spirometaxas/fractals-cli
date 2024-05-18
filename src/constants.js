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

SPACE = ' '

module.exports = {
    Rotations: Rotations,
    Modes: Modes,
    Shapes: Shapes,
    Lines: Lines,
    LineTypes: LineTypes,
    SPACE: SPACE,
}