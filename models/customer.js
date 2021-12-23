const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        tickets: [{type: Schema.Types.ObjectId, ref: 'ticket'}]
    },
    { timestamps: true },
)

module.exports = Customer