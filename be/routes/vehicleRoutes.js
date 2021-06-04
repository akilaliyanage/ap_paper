const express = require('express');
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

    const cat = catagory.findOne({_id:id});
    const vehis = await vehicle.find({_id:{$in: cat.vehicles}})
    return res.json(vehis)
})

module.exports = router;