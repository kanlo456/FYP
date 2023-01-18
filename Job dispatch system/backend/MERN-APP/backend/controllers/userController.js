const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{ //id, secret code , the date/time will save 
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

//login user
const loginUser = async (req, res) => {
    res.json({ message: 'login user' })
};

//signup user
const signUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)

        //create a token
        const token = createToken(user._id)
       
        // res.status(200).json({email,user})
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
 
module.exports = {loginUser,signUser}