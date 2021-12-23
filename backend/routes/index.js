const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/customer/query/', controllers.getCustomersByQuery)
router.get('/customer/:id', controllers.getCustomerById)
router.get('/customer', controllers.getAllCustomers)
router.post('/customer', controllers.createCustomer)
router.put('/customer/:id', controllers.updateCustomer)

router.get('/ticket/customer/', controllers.getTicketsByCustomerId)
router.get('/ticket/query/', controllers.getTicketsByQuery)
router.get('/ticket/:id', controllers.getTicketById)
router.get('/ticket', controllers.getAllTickets)
router.post('/ticket', controllers.createTicket)
router.put('/ticket/:id', controllers.updateTicket)
router.delete('/ticket/:id', controllers.deleteTicket)

router.get('/technician/query/', controllers.getTechniciansByQuery)
router.get('/technician/:id', controllers.getTechnicianById)
router.get('/technician', controllers.getAllTechnicians)
router.post('/technician', controllers.createTechnician)
router.put('/technician/:id', controllers.updateTechnician)
router.delete('/technician/:id', controllers.deleteTechnician)

module.exports = router;