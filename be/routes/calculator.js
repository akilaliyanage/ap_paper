const { workerData, parentPort } = require('worker_threads')
const vehicle = require('../models/vehicle')
const catagory = require('../models/catagory');

function sum() {
    let rslt = 0;
    let vehPrice = workerData.vahPrice;
    let catPrice = workerData.catPrice;
    let hour = workerData.data.hour;
    let mins = workerData.data.mins;
    let secs = workerData.data.mins;

    const finalPrice = (vehPrice + catPrice + (parseFloat(hour) * 60 + mins + parseFloat(secs / 60)) * 10);
    console.log(finalPrice);

    return finalPrice;
}

parentPort.on('message', (param) => {
    console.log(workerData);
    const data = sum();
    parentPort.postMessage(data)
})