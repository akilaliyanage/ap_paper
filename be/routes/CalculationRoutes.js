const { json } = require('body-parser');
const express = require('express');
const catagory = require('../models/catagory');
const {workerData, Worker, isMainThread,parentPort}  = require('worker_threads')
const router = express.Router()
const vehicle = require('../models/vehicle')

router.post('/', async(req, res) => {
    if (isMainThread) {
        console.log("sending the data from the main thread");
        const veh = await vehicle.findById(req.body.vahId);
        const cat = await catagory.findById(req.body.catId);
        console.log("akila,",cat.soldPrice);

        const workder = new Worker(__dirname + '/calculator.js', {
            workerData: {
                data: req.body,
                vahPrice: veh.solidPrice,
                catPrice : cat.soldPrice
            }
        })

        workder.on('message', (val) => {
            console.log(val);
            res.json(val)
    })

         workder.on('error', (err) => {
            res.status({ status: 500 }).send({ message: err.message });
        });

         workder.on('exit', (code) => {
            if (code !== 0) {
            res.status({ status: 500 }).json({ message: code });
            }
         });
        
        workder.postMessage('get the calculatios')
    }
})

module.exports = router;