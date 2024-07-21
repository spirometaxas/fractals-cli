const { parentPort, workerData } = require('worker_threads');
const { Fractal } = require('./fractal');


let fractal = Fractal.getImpl(workerData.fractalKey);

let board = fractal.create(workerData.nStep, workerData.config);

parentPort.postMessage({ board: board });