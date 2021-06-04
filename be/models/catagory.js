const mongoose = require('mongoose')
const vehicle = require('./vehicle')

const catagory = mongoose.Schema({
    name : String,
    vehicles : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'vehicle'
        }
    ]
})

module.exports = mongoose.model('catagory',catagory)