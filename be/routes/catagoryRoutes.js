const express = require('express');
const catagory = require('../models/catagory');
const router = express.Router()
const vehicle = require('../models/vehicle')

router.post('/',async(req,res)=>{
    const {data} = req.body;

    const newCat = await catagory.create(data);

    await vehicle.updateMany({_id:newCat.vehicles},{$push:{catagories:newCat._id}})
    return res.send(newCat)
})

module.exports = router;