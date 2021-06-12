const mongoose = require('mongoose')
const vehicle = require('./vehicle')

const catagory = mongoose.Schema({
    name : String,
    vehicles : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'vehicle'
        }
    ],
    soldPrice: {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('catagory',catagory)