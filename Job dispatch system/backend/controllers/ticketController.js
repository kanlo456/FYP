const Ticket = require('../models/TicketModel')
const Count = require('../models/TicketModel')
const User = require('../models/userModel')

const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

//get report data
const getReport = async(req, res)=>{
    const status = [];
    //count the status
    const onCreate_data = await Ticket.find({status:'On Create'}).count();
    const holding_data = await Ticket.find({status:'Holding'}).count();
    const progress_data = await Ticket.find({status:'Progress'}).count();
    const solved_data = await Ticket.find({status:'Solved'}).count();
    const cancel_data = await Ticket.find({status:'Cancel'}).count();

    status.push({
        onCreate:onCreate_data,
        holding:holding_data,
        progress:progress_data,
        solved:solved_data,
        cancel:cancel_data,

    })
    const objStatus = Object.fromEntries(status)
    res.status(200).json(status)

    // const graph = [];
    // const emp1 = await Ticket.find({status:'Solved'}).select('assignedTo')
    //

}
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
    //part for format ticket ID
    let ticket_id ;
    const ticket_count = await Ticket.count();

    if(ticket_count==0){
        ticket_id = TCKNum000001
    }else if(ticket_count<10){
        ticket_id = "TCKNum00000"+ticket_count
    }else if (ticket_count<100){
        ticket_id = "TCKNum0000"+ticket_count
    }else if (ticket_count<1000){
        ticket_id = "TCKNum000"+ticket_count
    }else if (ticket_count<10000){
        ticket_id = "TCKNum00"+ticket_count
    }else if (ticket_count<100000){
        ticket_id = "TCKNum0"+ticket_count
    }else if (ticket_count<1000000){
        ticket_id = "TCKNum"+ticket_count
    }  
    
    const {
        caller,category,subcategory,service,offering,configItem,contactType,status,
        impact,priority,assignmentGroup,assignedTo,description,
        shortDescription,limitDate} = req.body
    
        const ticket = await Ticket.create({
            caller,category,subcategory,service,offering,configItem,contactType,status,
            impact,priority,assignmentGroup,assignedTo,description,
            shortDescription,limitDate,user_id,ticket_id})
        
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
    const caller = req.body.caller
    const ticket_id = req.body.ticket_id
    const user_mail = await User.find({username:caller}).select('email')

    function sendEmail(){
        return new Promise((resolve,reject)=>{
            var transporter = nodemailer.createTransport({
               service:'gmail',
            auth:{
                user:process.env.MAILSENDER,
                pass:process.env.MAILSENDERPW
            } 
            })
        const mail_configs = {
            from:process.env.MAILSENDER,
            to:user_mail,
            subject:'Configs mail for ticket',
            text:"Hello "+caller+" your ticket "+ticket_id+" has been solved please check it"
        }
        transporter.sendMail(mail_configs,function(error,info){
        if(error){
            console.log(error)
            return reject({message:`An error has occured`})
        }
        return resolve({message:"Email sent successfuly"})
            })
        })
    }
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout, ID error'})
    }

    const ticket = await Ticket.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!ticket){
        return res.status(404).json({error:'No such ticket, can not update the ticket'})
    }
    if(req.body.status === "Solved"){
        sendEmail();
        // return resolve({message:"The ticket complete help us to improve our service"})
    }  
    res.status(200).json(ticket)
}


module.exports ={
    getReport,
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}
