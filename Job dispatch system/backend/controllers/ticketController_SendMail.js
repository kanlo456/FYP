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

//get report data
const getReport = async(req, res)=>{
    const status = [];

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

    res.status(200).json(status)
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
    const{id,email,status} = req.params

    function sendEmail(){
        return new Promise((resolve,reject)=>{
            var transporter = nodemailer.createTransport({
               service:'gmail',
            auth:{
                user:'acftestcodewu@gmail.com',
                pass:'xmbyiemcydfndldl'
            } 
            })
        const mail_configs = {
            from:'acftestcodewu@gmail.com',
            to:'fschllabwu@gmail.com',
            subject:'Testing coding 101 email',
            text:"Justing check if the email will be sent"
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
    if(status === "solved"){
        Ticket.find({email:email},{status:status},function(err,docs){
            if(!err){
                sendEmail();
                return resolve({message:"Email sent successfuly"})
            }else{
                return reject({message:`An error has occured`})
            }});
    }
    
    
    res.status(200).json(ticket)
}


module.exports ={
    getTickets,
    getTicket,
    getReport,
    createTicket,
    deleteTicket,
    updateTicket
}