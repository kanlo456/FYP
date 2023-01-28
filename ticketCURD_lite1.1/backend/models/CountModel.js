const mongoose = require('mongoose')

const Schema = mongoose.Schema


//conter table 
const counterSchema={
    id:{
        type:String
    },
    seq:{
        type:Number
    }
}
const countermodel = mongoose.model("counter",counterSchema)