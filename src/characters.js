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

    static DEFAULT = 'DEFAULT';

}

const Lines = {
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

const Shapes = {
    TRIANGLE_UP:   '▲',
    TRIANGLE_DOWN: '▼',
    BLOCK:         '█',
    SPACE:         ' ',
}

const LineTypes = {
    STANDARD: 'STANDARD',
    BOLD:     'BOLD',
    DOUBLE:   'DOUBLE',
}

module.exports = {
    CharacterMap: CharacterMap,
    Lines: Lines,
    LineTypes: LineTypes,
    Shapes: Shapes,
}