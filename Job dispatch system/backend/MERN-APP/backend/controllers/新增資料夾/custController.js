const Customer = require('../models/custModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{ //id, secret code set in .env , the date/time will save 
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'1d'})
}

//login customer
const loginCust = async(req,res)=>{
    const { username,password} = req.body

    try {
        const customer = await Customer.login(username, password) //custModel return customer, so use customer

        //create a token
        const token = createToken(customer._id)
       
        // res.status(200).json({email,user})
        res.status(200).json({username,token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//signup customer
const signCust = async(req,res)=>{
    const { username,password,email,firstname,lastname } = req.body
    try {
        const customer = await Customer.signup(username,password,email,firstname,lastname)

        //create a token
        const token = createToken(customer._id)
       
        // res.status(200).json({email,user})
        res.status(200).json({username,token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports={loginCust,signCust}