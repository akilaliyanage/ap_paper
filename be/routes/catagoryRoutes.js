const { json } = require('body-parser');
const express = require('express');
const catagory = require('../models/catagory');
const router = express.Router()
const vehicle = require('../models/vehicle')

router.post('/',async(req,res)=>{
    const data  = req.body;
    console.log(req.body);

    const newCat = await catagory.create(data);

    await vehicle.updateMany({_id:newCat.vehicles},{$push:{catagories:newCat._id}})
    return res.send(newCat)
})

router.get('/get/:id',async(req,res)=>{
    const id = req.params.id;

    const cat = await catagory.findOne({_id:id}).populate('vehicles')
    res.send(cat)
})
router.get('/', async(req,res)=> {
    const items = await catagory.find();
    res.json(items)

})



module.exports = router;