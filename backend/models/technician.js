const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Technician = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        seniorityLevel: { type: Number, required: true },
        status: { type: String, required: true },
        assignedTicket: {type: Schema.Types.ObjectId, ref: 'ticket'}
    },
    { timestamps: true },
)

module.exports = Technician