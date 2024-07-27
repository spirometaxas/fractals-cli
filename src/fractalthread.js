const { parentPort, workerData } = require('worker_threads');
const { FractalConfig } = require('./fractal');


let fractalImpl = new FractalConfig[workerData.fractalKey].impl();

let board = fractalImpl.create(workerData.nStep, workerData.config);

parentPort.postMessage({ board: board });