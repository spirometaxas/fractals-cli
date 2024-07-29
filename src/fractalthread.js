const { parentPort, workerData } = require('worker_threads');
const { FractalConfig } = require('./fractal');

let response = {};

for (let task of workerData.tasks) {
    let fractalImpl = new FractalConfig[task.fractalKey].impl();
    let board = fractalImpl.create(task.nStep, task.config);
    response[task.cacheKey] = board;
}

parentPort.postMessage({ response: response });