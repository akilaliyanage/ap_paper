const express = require('express');
const  mongoose  = require('mongoose');
const catagory = require('../models/catagory');
const router = express.Router()
const vehicle = require('../models/vehicle')

router.post('/',async(req,res)=>{
    const {data} = req.body;

    const newVehi = await vehicle.create(data);

    await catagory.updateMany({_id:newVehi.catagories},{$push:{vehicles:newVehi._id}})
    return res.send(newVehi)
})

router.get('/:id',async(req,res) =>{
    const id = req.params.id;

    const cat = catagory.findOne({ _id: id }).populate("vehicles", "code model type name").then(data => {
        console.log(data);
        res.status(200).send({ "vehicles": data });
    }).catch(err => {
        console.log(err);
    });
})

router.get('/', async(req,res)=> {
    const items = await vehicle.find();
    res.json(items)

})

// router.get('/cat/:id', async (req, res) => {
//     const id = req.params.id;
//     //console.log(id);
//     const vhs = vehicle.find({ catagories: {$in: } })
    
//    // console.log(vhs);
//})

module.exports = router;