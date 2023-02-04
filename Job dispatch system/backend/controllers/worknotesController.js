const Worknote = require('../models/worknotesModel')
const mongoose = require('mongoose')


//get all tickets 
const getWorknotes = async(req,res)=>{
    const worknotes = await Worknote.find({}).sort({createdAt:-1})

    res.status(200).json(worknotes)
}

//get a single ticket
const getWorknote = async(req,res)=>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such worknote, ID error'})
    }

    const worknote = await Worknote.findById(id)

    if(!worknote){
        return res.status(404).json({error:'No such worknote, can not find the worknote'})
    }
    res.status(200).json(worknote)
}

//create new ticket 
const createWorknote = async(req,res)=>{
    //add doc to db
    const user_id = req.user._id
    const {
        notes} = req.body
    
        const worknote = await Worknote.create({
            notes,user_id})
            res.status(200).json(worknote)

}

//delete a ticket
const deleteWorknote = async(req,res)=>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such worknote, ID error'})
    }

    const worknote = await Worknote.findOneAndDelete({_id : id})

    if(!worknote){
        return res.status(404).json({error:'No such worknote, can not delete the worknote'})
    }
    res.status(200).json(worknote)
}

//update a ticke
const updateWorknote =  async(req,res)=>{
    const{id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such worknote, ID error'})
    }

    const worknote = await Worknote.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!worknote){
        return res.status(404).json({error:'No such worknote, can not update the worknote'})
    }
    res.status(200).json(worknote)
}


module.exports ={
    getWorknotes,
    getWorknote,
    createWorknote,
    deleteWorknote,
    updateWorknote
}