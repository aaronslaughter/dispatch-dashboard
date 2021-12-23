const mongoose  = require('mongoose')
const CustomerSchema = require('./customer')
const TicketSchema = require('./ticket')
const TechnicianSchema = require('./technician')

const Customer = mongoose.model('customers', CustomerSchema)
const Ticket = mongoose.model('tickets', TicketSchema)
const Technician = mongoose.model('technicians', TechnicianSchema)

module.exports = {
  Customer,
  Ticket,
  Technician
}