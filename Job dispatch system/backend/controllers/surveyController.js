const Survey = require('../models/SurveyModel')
const mongoose = require('mongoose')


//get all tickets 
const getSurveys = async(req,res)=>{
    const surveys = await Survey.find({}).sort({createdAt:-1})

    res.status(200).json(surveys)
}

//get a single ticket
const getSurvey = async(req,res)=>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Survey, ID error'})
    }

    const survey = await Survey.findById(id)

    if(!survey){
        return res.status(404).json({error:'No such Survey, can not find the Survey'})
    }
    res.status(200).json(survey)
}

//create new ticket 
const createSurvey = async(req,res)=>{
    //add doc to db
    const user_id = req.user._id
    const {friendStfLV,knowlegStfLV,quickStfLV,useAgain,improve,ticket_id} = req.body
    const survey = await Survey.create({friendStfLV,knowlegStfLV,quickStfLV,useAgain,improve,user_id,ticket_id})
    res.status(200).json(survey)
}

//delete a ticket
const deleteSurvey = async(req,res)=>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Survey, ID error'})
    }

    const survey = await Survey.findOneAndDelete({_id : id})

    if(!survey){
        return res.status(404).json({error:'No such Survey, can not delete the Survey'})
    }
    res.status(200).json(survey)
}

//update a ticke
const updateSurvey =  async(req,res)=>{
    const{id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Survey, ID error'})
    }

    const survey = await Survey.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!survey){
        return res.status(404).json({error:'No such Survey, can not update the Survey'})
    }
    res.status(200).json(survey)
}


module.exports ={
    getSurveys,
    getSurvey,
    createSurvey,
    deleteSurvey,
    updateSurvey
}