#!/usr/bin/env node
const fractals = require('./index.js');

const printUsage = function(showIntro) {
    if (showIntro) {
        console.log('\n Print the fractals to the console!');
    }
    console.log('\n' + 
                ' Usage:\n' + 
                '   $ fractals-cli <name> <n>\n' + 
                '   $ fractals-cli <name> <n> <size>\n' + 
                '\n' + 
                ' Supported Names:\n' + 
                '   sierpinski-triangle, sierpinski-carpet, sierpinski-hexagon,\n' +
                '   hexaflake, koch-snowflake, koch-antisnowflake,\n' +
                '   t-square, triflake, vicsek-fractal\n' +
                '\n' + 
                ' Options:\n' + 
                '   --inverse, -i            Draw the inverse fractal\n' + 
                '   --blocks, -b             Draw using block characters\n' + 
                '   --diagonal, -d           Draw the diagonal version (Vicsek Fractal only)\n' + 
                '   --character=<character>  Draw using 1 specific character\n');
}

const getFlags = function(params) {
    let flags = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (params[i].startsWith('-')) {
                flags.push(params[i]);
            }
        }
    }
    return flags;
}

const getValues = function(params) {
    let values = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (!params[i].startsWith('-')) {
                values.push(params[i]);
            }
        }
    }
    return values;
}

const drawInverse = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && (flags[i].toLowerCase() === '-i' || flags[i].toLowerCase() === '--inverse')) {
            return true;
        }
    }
    return false;
}

const drawBlocks = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase() === '-b' || flags[i].toLowerCase() === '--blocks') {
            return true;
        }
    }
    return false;
}

const getCharacter = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase().startsWith('--character=')) {
            const character = flags[i].substring(12);
            if (character) {
                if (character.length === 1) {
                    return character;
                } else {
                    console.log('\n Warning: Please provide just 1 character.  Example: --character=*');
                }
            } else {
                console.log('\n Warning: Please provide 1 character.  Example: --character=*');
            }
        }
    }
    return undefined;
}

const drawDiagonal = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && (flags[i].toLowerCase() === '--diagonal' || flags[i].toLowerCase() === '-d')) {
            return true;
        }
    }
    return false;
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    const values = getValues(params);
    const flags = getFlags(params);

    const name = values[0];
    if (!name || !fractals.SUPPORTED_NAMES.includes(name.toLowerCase())) {
        console.log('\n <name> should be a supported fractal name');
        printUsage(false);
        return;
    }
    if (values[1] && !isNaN(values[1]) && parseInt(values[1]) >= 0) {
        var n = parseInt(values[1]);
        var s = undefined;
        if (values[2]) {
            if (!isNaN(values[2]) && parseInt(values[2]) >= n) {
                s = parseInt(values[2]);
            } else {
                console.log('\n <size> should be a number greater than or equal to <n>');
                printUsage(false);
            }
        } else {
            s = n;
        }
        if (n !== undefined && s !== undefined) {
            const character = drawBlocks(flags) ? '█' : getCharacter(flags);
            console.log(fractals.create(name, n, { size: s, inverse: drawInverse(flags), character: character, diagonal: drawDiagonal(flags) }));
        }
    } else {
        console.log('\n <n> should be a number greater than or equal to 0');
        printUsage(false);
    }
} else {
    printUsage(true);
}