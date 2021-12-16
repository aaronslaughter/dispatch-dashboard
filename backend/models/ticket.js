const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
    {
        status: { type: String, required: true },
        priority: { type: String, required: true },
        description: { type: String, required: true },
        resolution: { type: String },
        customer_id: { type:Schema.Types.ObjectId, ref: 'customer', required: true},
        assignedTech: {type: Schema.Types.ObjectId, ref: 'technician'}
    },
    { timestamps: true },
)

module.exports = Ticket