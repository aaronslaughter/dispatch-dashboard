const { Customer, Ticket, Technician } = require('../models');

const createCustomer = async (req, res) => {
    try {
        const customer = await new Customer(req.body)
        await customer.save()
        return res.status(201).json({
            customer,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCustomer,
}