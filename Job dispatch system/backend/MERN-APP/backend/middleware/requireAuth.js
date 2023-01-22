const jwt = require('jsonwebtoken')
// const User = require('../models/userModel')
const User = require('../models/custModel')

const requireAuth = async (req,res,next)=>{
    //verify authentication
    const{authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization token required'})
    }
    //get the part after ' ' in authorization e.g. 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…MzN30.HVSjhSFjw3LAXXZQ1yoRyKfhd1UVTJOOCZBruxvwbBc'
    const token = authorization.split(' ')[1]

    try{
        const{_id} = jwt.verify(token,process.env.SECRET)
        
        req.user = await User.findOne({_id}).select('_id')
        next()

    }catch(error){
        console.log(error)
        res.status(401).json({error:'Request is not authoriztion'})
    }
}

module.exports = requireAuth