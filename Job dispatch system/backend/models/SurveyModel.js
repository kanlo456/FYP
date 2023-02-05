// tutorial Workout.js = Ticket.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const surveySchema = new Schema(
  {
    friendStfLV: {
      type: Number,
      required: true,
    },
    knowlegStfLV: {
      type: Number,
      required: true,
    },
    quickStfLV: {
      type: Number,
      required: true,
    },
    useAgain: {
      type: Number,
      required: true,
    },
    improve: {
      type: String,
    },
    user_id: {
      type: String,
    },
    ticket_id: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("survey", surveySchema);
