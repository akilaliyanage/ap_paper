const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const router = express.Router()
const cors = require('cors')

const vehicleRoutes = require('./routes/vehicleRoutes')
const catagoryRoutes = require('./routes/catagoryRoutes')


app.use(bodyparser.json())
app.use(cors())
app.use('/vehicle',vehicleRoutes)
app.use('/catagory',catagoryRoutes)



mongoose.connect('mongodb://localhost:27017/paper?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () =>{
    console.log('connected to database')
})

app.listen(3000, () =>{
    console.log('server is runnig at port 3000')
})