const mongoose = require('mongoose')

const vehicle = mongoose.Schema({
    code : String,
    model : String,
    type : String,
    name : String,
    catagories : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'catagory'
        }
    ],
    solidPrice : Number
})
module.exports = mongoose.model('vehicle',vehicle)