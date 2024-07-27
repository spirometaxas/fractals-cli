#!/usr/bin/env node
const { App } = require('./app.js');
const { version } = require('../package.json');

const MODES = {
    APP:     'APP',
    DISPLAY: 'DISPLAY',
};

const printUsage = function(showIntro) {
    if (showIntro) {
        console.log('\n An interactive fractal viewing app for the console!');
    }
    console.log('\n' + 
                ' Usage:\n' + 
                '   $ fractals-cli <name> <n>\n' + 
                '   $ fractals-cli <name> <n> [options]\n' + 
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

const getMode = function(flags) {
    const prefix = '--mode=';
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase().startsWith(prefix)) {
            const modeString = flags[i].substring(prefix.length);
            if (modeString !== undefined && MODES[modeString.toUpperCase()] !== undefined) {
                return MODES[modeString.toUpperCase()];
            }
        }
    }
    return MODES.APP;  // Default to APP
}

const isHelp = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && (flags[i].toLowerCase() === '--help' || flags[i].toLowerCase() === '-h')) {
            return true;
        }
    }
    return false;
}

const isVersion = function(flags, mode) {
    if (mode !== MODES.APP) {
        return false;
    }
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && (flags[i].toLowerCase() === '--version' || flags[i].toLowerCase() === '-v')) {
            return true;
        }
    }
    return false;
}

var mode = MODES.APP;

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    mode = getMode(params);

    if (isHelp(params)) {
        printUsage();
        process.exit();
    } else if (isVersion(params, mode)) {
        console.log('\n ' + getVersion() + '\n');
        process.exit();
    } else if (mode === MODES.DISPLAY) {
        console.log(' TODO: Implement');
        process.exit();
    }
    // TODO: --cache-mode=<enable|disable>  --thread-mode=<hybrid|always|never>
}

if (!process.stdout.isTTY) {
    console.log(' Error: Interactive mode is only supported within a terminal screen.');
    process.exit();
}

new App().start({});