const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{ //id, secret code , the date/time will save 
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

//login user
const loginUser = async (req, res) => {
    const{username,password} = req.body

    try {
        const user = await User.login(username, password)

        //create a token
        const token = createToken(user._id)
       
        // res.status(200).json({email,user})
        res.status(200).json({username,token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // res.json({ message: 'login user' })
};

//signup user
const signUser = async (req, res) => {
    const {username,password,email,firstname,lastname,role} = req.body
    try {
        const user = await User.signup(username,password,email,firstname,lastname,role)

        //create a token
        const token = createToken(user._id)
       
        // res.status(200).json({email,user})
        res.status(200).json({username,token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
 
module.exports = {loginUser,signUser}