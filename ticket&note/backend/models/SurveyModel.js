// tutorial Workout.js = Ticket.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const surveySchema = new Schema({
    satisfactionLV: {
      type: Number,
      required: true
    },useAgain: {
        type: Number,
        required: true
      },improve: {
        type: String,
      },
    user_id:{
      type:String
    }
  }, { timestamps: true })
  
  module.exports = mongoose.model('survey', surveySchema)