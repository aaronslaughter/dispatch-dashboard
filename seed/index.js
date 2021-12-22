const db = require('../db')
const faker = require('faker')
const { Customer, Ticket, Technician } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const dropCollections = async () => {
    await Ticket.collection.drop()
    await Customer.collection.drop()
    await Technician.collection.drop()
  }

  const customers = [...Array(10)].map((element) => {
    return new Customer({
      name: faker.company.companyName(),
      location: faker.address.cityName()
    })
  })

  const tickets = [...Array(15)].map((element, index) => {
    return new Ticket({
      status: "Open",
      priority: Math.floor(Math.random() * 2) > 0 ? "Medium" : "Low",
      description: faker.hacker.phrase(),
      customer_id: customers[index % customers.length]._id
    })
  })

  // matches tickets to their parent customer
  customers.forEach((customer) => {
    tickets.forEach(ticket => {
      if (ticket.customer_id === customer._id) {
        customer.tickets.push(ticket._id)
      }
    })
  })

  const technicians = [...Array(5)].map((element) => {
    return new Technician({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      seniorityLevel: Math.floor(Math.random() * 2),
      status: Math.floor(Math.random() * 2) > 0 ? "Available" : "Offline",
    })
  })

  await dropCollections()
  console.log('Dropped Collections!');

  await Ticket.insertMany(tickets)
  console.log('Created Tickets!');

  await Customer.insertMany(customers)
  console.log('Created Customers!')

  await Technician.insertMany(technicians)
  console.log('Created Technicians');
}

const run = async () => {
  await main()
  db.close()
}

run()