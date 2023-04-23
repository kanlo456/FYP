const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const Ticket = require('../models/TicketModel')

const createToken = (_id) => { //id, secret code , the date/time will save 
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

//login user
const loginUser = async(req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.login(username, password)
        const role = await User.distinct( "role", {username:username} )

        //create a token
        const token = createToken(user._id)

        // res.status(200).json({email,user})
        res.status(200).json({ username,role,token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // res.json({ message: 'login user' })
};

//cretae staff account
const createStaff = async(req, res) => {
    const { username, password, email, firstname, lastname, role } = req.body
    try {
        const user = await User.signup(username, password, email, firstname, lastname, role)

        //create a token
        const token = createToken(user._id)

        // res.status(200).json({email,user})
        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

//signup user
const signUser = async(req, res) => {
    const { username, password, email, firstname, lastname} = req.body
    try {
        const user = await User.signup(username, password, email, firstname, lastname)

        //create a token
        const token = createToken(user._id)

        // res.status(200).json({email,user})
        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

//get user info by username
const getUserInfo = async(req, res) => {
    const { username } = req.body
    const info = [];
    try {
        //get the role of the user
        // const role = await User.find({username:username});
        const role = await User.distinct( "role", {username:username} )
        //get the number of tickets of the user
        // const qtyofticket = await Ticket.find({assignedTo:username,status:"Progress",status:"Holding"}).count();
        const qtyofticket = await Ticket.find({assignedTo:username,status:["Progress","Holding"]}).count();

        info.push({username:username,
                   role:role,  
                   NoOfTicket:qtyofticket});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    // const objStatus = Object.fromEntries(info)
    res.status(200).json(info)
};

//get handle ticked
const getHandleTicket= async(req, res) => {
    const { username } = req.body
    const tickets = await Ticket.find({assignedTo:username,status:["Progress","Holding"]},{_id:1,ticket_id:1})

    res.status(200).json(tickets)

};

const getCustomerTickets = async(req,res)=>{
    const { username } = req.body
    const tickets = await Ticket.find({caller:username}).sort({createdAt:-1})

    res.status(200).json(tickets)
}

//get No of staff tickets
const getNoOfTickets = async(req,res)=>{
    const { username } = req.params
    const tickets = await Ticket.find({assignedTo:username,status:["Progress","Holding"]}).count();
    res.status(200).json(tickets)
}

module.exports = { loginUser,createStaff, signUser,getUserInfo ,getHandleTicket,getCustomerTickets,getNoOfTickets}
