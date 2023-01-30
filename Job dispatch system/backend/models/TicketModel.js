// tutorial Workout.js = Ticket.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    caller: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    subcategory:{
      type:String
    },
    service:{
      type:String,
      required: true
    },
    offering:{
      type:String
    },
    configItem:{
      type:String
    },
    contactType: {
      type: String,
      required: true
    },
    state:{
      type:String,
      required: true
    },
    impact:{
      type:String,
      required: true
    },
    priority:{
      type: Number,
      required: true
    },
    assignmentGroup:{
      type:String
    },
    assignedTo:{
      type:String
    },
    description:{
      type:String
    },
    shortDescription:{
      type:String
    },
    user_id:{
      type:String,
      required: true
    }
  }, { timestamps: true })
  
  module.exports = mongoose.model('ticket', ticketSchema)