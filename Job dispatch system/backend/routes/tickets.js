// *tutorial  workouts.js = tickets.js
const express = require("express");
const {
  getReport,
  getReport2,
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");
const requireAuth = require("../middleware/requireAuth"); //***

const router = express.Router();

// GET all tickes
router.get("/", getTickets);

//Generate report
router.get("/getReport", getReport);

//gen graph
router.get("/getReport2", getReport2);

//GET a single workout
router.get("/:id", getTicket);

//DELETE a ticket
router.delete("/:id", deleteTicket);

//UPDATE a ticket
router.patch("/:id", updateTicket);

//Use the token
router.use(requireAuth); //***

//POST a new ticket
router.post("/", createTicket);

module.exports = router;
