const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const custSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }
})

//static signup method
custSchema.statics.signup = async function(username,password,email,firstname,lastname){

     //validation
    if(!username || !password || !email || !firstname || !lastname){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){ // password strong enough E.G.: ABCabc123! 
        throw Error('Password not strong enough')
    }

    const existsMail = await this.findOne({email})
    const existsUsername = await this.findOne({username})

    if(existsMail) {
        throw new Error('email already exists')
    }

    if(existsUsername) {
        throw new Error('User Name already exists')
    }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        const customer = await this.create({username, password: hash,email,firstname,lastname})
    return customer
}

//static login method
custSchema.statics.login = async function(username,password){
    if(!username || !password){
        throw Error('All fields must be filled')
    }

    const customer = await this.findOne({username})

    if(!customer) {
        throw new Error('Incorrect User name')
    }

    const match = await bcrypt.compare(password,customer.password)
    if(!match){throw Error('Incorrect password')}

    return customer
}

module.exports = mongoose.model('Customer', custSchema)