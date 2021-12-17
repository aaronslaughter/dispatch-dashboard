const { Customer, Ticket, Technician } = require('../models');


/////////// POST //////////////////////////////////////////////
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

const createTicket = async (req, res) => {
    try {
        const ticket = await new Ticket(req.body)
        await ticket.save()
        return res.status(201).json({
            ticket
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const createTechnician = async (req, res) => {
    try {
        const technician = await new Technician(req.body)
        await technician.save()
        return res.status(201).json({
            technician
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

/////////// GET ///////////////////////////////////////////////
const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await customer.findById(id)
        if (customer) {
            return res.status(200).json({ customer });
        }
        return res.status(404).send('Customer with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find()
        return res.status(200).json({ customers })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCustomersByQuery = async (req, res) => {
    try {
        const customers = await Customer.find({
            $or: [
            { name: req.query.name }, 
            { location: req.query.location } 
        ]})
        return res.status(200).json({ customers })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTicketById = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await ticket.findById(id)
        if (ticket) {
            return res.status(200).json({ ticket });
        }
        return res.status(404).send('Ticket with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        return res.status(200).json({ tickets })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTicketsByQuery = async (req, res) => {
    try {
        const tickets = await Ticket.find({
            $or: [
            { status: req.query.status }, 
            { priority: req.query.priority }
        ]})
        return res.status(200).json({ tickets })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTicketsByCustomerId = async (req, res) => {
    try {
        const tickets = await Ticket.find({customer_id: req.query.customer_id})
        return res.status(200).json({ tickets })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTechnicianById = async (req, res) => {
    try {
        const { id } = req.params;
        const technician = await Technician.findById(id)
        if (technician) {
            return res.status(200).json({ technician });
        }
        return res.status(404).send('Technician with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTechnicians = async (req, res) => {
    try {
        const technicians = await Technician.find()
        return res.status(200).json({ technicians })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTechniciansByQuery = async (req, res) => {
    try {
        const technicians = await Technician.find({
            $or: [
            { firstName: req.query.firstName }, 
            { lastName: req.query.lastName },
            { seniorityLevel: req.query.seniorityLevel },
            { status: req.query.status }
        ]})
        return res.status(200).json({ technicians })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

/////////// PUT ///////////////////////////////////////////////

const updateTicket = async (req, res) => {
    try {
        const { id } = req.params;
        Ticket.findByIdAndUpdate(id, req.body, { new: true }, (err, ticket) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!ticket) {
                res.status(500).send('Ticket not found!');
            }
            return res.status(200).json(ticket);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateTechnician = async (req, res) => {
    try {
        const { id } = req.params;
        Technician.findByIdAndUpdate(id, req.body, { new: true }, (err, technician) => {
            if (err) {
                res.status(500).send(err);
        }
        if (!technician) {
                res.status(500).send('Technician not found!');
            }
            return res.status(200).json(ticket);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

/////////// DELETE ////////////////////////////////////////////

const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ticket.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ticket deleted");
        }
        throw new Error("Ticket not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTechnician = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Technician.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Technician deleted");
        }
        throw new Error("Technician not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createCustomer,
    createTicket,
    createTechnician,
    getCustomerById,
    getAllCustomers,
    getCustomersByQuery,
    getTicketById,
    getAllTickets,
    getTicketsByQuery,
    getTicketsByCustomerId,
    getTechnicianById,
    getAllTechnicians,
    getTechniciansByQuery,
    updateTicket,
    updateTechnician,
    deleteTicket,
    deleteTechnician
}