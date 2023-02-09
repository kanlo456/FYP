const Ticket = require('../models/TicketModel')
const Count = require('../models/TicketModel')
const mongoose = require('mongoose')


//get all tickets 
const getTickets = async(req,res)=>{
    const tickets = await Ticket.find({}).sort({createdAt:-1})

    res.status(200).json(tickets)
}

//get a single ticket
const getTicket = async(req,res)=>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout, ID error'})
    }

    const ticket = await Ticket.findById(id)

    if(!ticket){
        return res.status(404).json({error:'No such ticket, can not find the ticket'})
    }
    res.status(200).json(ticket)
}

//create new ticket 
const createTicket = async(req,res)=>{
    //add doc to db
    const user_id = req.user._id
    const {
        caller,category,subcategory,service,offering,configItem,contactType,status,
        impact,priority,assignmentGroup,assignedTo,description,
        shortDescription,limitDate} = req.body
    
        const ticket = await Ticket.create({
            caller,category,subcategory,service,offering,configItem,contactType,status,
            impact,priority,assignmentGroup,assignedTo,description,
            shortDescription,limitDate,user_id})
            res.status(200).json(ticket)

}

//delete a ticket
const deleteTicket = async(req,res)=>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout, ID error'})
    }

    const ticket = await Ticket.findOneAndDelete({_id : id})

    if(!ticket){
        return res.status(404).json({error:'No such ticket, can not delete the ticket'})
    }
    res.status(200).json(ticket)
}

//update a ticke
const updateTicket =  async(req,res)=>{
    const{id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout, ID error'})
    }

    const ticket = await Ticket.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!ticket){
        return res.status(404).json({error:'No such ticket, can not update the ticket'})
    }
    res.status(200).json(ticket)
}


module.exports ={
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}