import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from './globals'
import { Route, Switch } from 'react-router'
import CustomersPage from './pages/CustomersPage'
import DispatchPage from './pages/DispatchPage'
import TechsPage from './pages/TechsPage'
import TicketsPage from './pages/TicketsPage'
import Header from './components/Header'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {

  const [customers, setCustomers] = useState([])
  const [tickets, setTickets] = useState([])
  const [technicians, setTechnicians] = useState([])
  const [newCustomer, setNewCustomer] = useState({name: '', location: ''})
  const [newTicket, setNewTicket] = useState({status: 'Open', priority: '', description: '', customer_id: ''})
  const [newAssignment, setNewAssignment] = useState({technician_id: ''})
  const [newTechnician, setNewTechnician] = useState({firstName: '', lastName: '', status: 'Available', seniorityLevel: 0})
  const [updatedTicket, setUpdatedTicket] = useState({status: 'Resolved'})

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios.get(`${BASE_URL}/customer`)
      setCustomers(response.data.customers)
    }

    const getTickets = async () => {
      const response = await axios.get(`${BASE_URL}/ticket`)
      setTickets(response.data.tickets)
    }

    const getTechnicians = async() => {
      const response = await axios.get(`${BASE_URL}/technician`)
      setTechnicians(response.data.technicians)
    }

    getCustomers()
    getTickets()
    getTechnicians()
  }, [])

  const handleAssignmentChange = (e) => {
    setNewAssignment({...newAssignment, [e.target.name]: e.target.value})
  }

  const handleTechnicianChange = (e) => {
    setNewTechnician({...newTechnician, [e.target.name]: e.target.value})
  }

  const handleCustomerChange = (e) => {
    setNewCustomer({...newCustomer, [e.target.name]: e.target.value})
  }

  const handleTicketChange = (e) => {
    setNewTicket({...newTicket, [e.target.name]: e.target.value})
  }

  const handleTicketUpdateChange = (e) => {
    setUpdatedTicket({...updatedTicket, [e.target.name]: e.target.value})
  }

  const updateNewAssignment = (ticket_id) => {

    // update the ticket, then update the tech, then get and set all tickets, then get and set all techs
    const update = async ()=> {
      try {
        await axios.put(`${BASE_URL}/ticket/${ticket_id}`, {assignedTech: newAssignment.technician_id})
      } catch (err) {
        console.log(err);
      }

      try {
        await axios.put(`${BASE_URL}/technician/${newAssignment.technician_id}`, {assignedTicket: ticket_id, status: 'En Route'})
      } catch (err) {
        console.log(err);
      }

      try {
        const ticketResponse = await axios.get(`${BASE_URL}/ticket`)
        setTickets(ticketResponse.data.tickets)
      } catch (err) {
        console.log(err);
      }

      try {
        const techResponse = await axios.get(`${BASE_URL}/technician`)
        setTechnicians(techResponse.data.technicians)
      } catch (err) {
        console.log(err);
      }
    }
      update()
  }

  const updateTicket = (id) => {
    const update = async () => {
      try {
        await axios.put(`${BASE_URL}/ticket/${id}`, updatedTicket)
      } catch (err) {
        console.log(err);
      }

      const matchingTech = technicians.filter((element) => element.assignedTicket === id)[0]

      try {
        await axios.put(`${BASE_URL}/technician/${matchingTech._id}`, {assignedTicket: null, status: 'Available'})
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await axios.get(`${BASE_URL}/technician`)
        setTechnicians(response.data.technicians)
      } catch (err){
        console.log(err);
      }

      try { 
        const response = await axios.get(`${BASE_URL}/ticket`)
        setTickets(response.data.tickets)
      } catch (err) {
        console.log(err);
      }
      
    }
    update()
  }

  const insertNewTechnician = () => {
    const insert = async () => {
      try {
        await axios.post(`${BASE_URL}/technician`, newTechnician)
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await axios.get(`${BASE_URL}/technician`)
        setTechnicians(response.data.technicians)
        setNewTechnician({firstName: '', lastName: '', status: 'Available', seniorityLevel: 0})

      } catch (err) {
        console.log(err);
      }
    }
    insert()
  }

  const insertNewCustomer = () => {
    const insert = async () => {
      await axios.post(`${BASE_URL}/customer`, newCustomer).then(async (res) => {
        const response = await axios.get(`${BASE_URL}/customer`)
        setCustomers(response.data.customers)
      })
    }
    insert()    
  }

  const insertNewTicket = () => {

    const tempNewTicket = newTicket
    setNewTicket({status: 'Open', priority: '', description: '', customer_id: ''})

    const insert = async () => {
      await axios.post(`${BASE_URL}/ticket`, tempNewTicket).then(async (res) => {
        const response = await axios.get(`${BASE_URL}/ticket`)
        setTickets(response.data.tickets)
      })
    }
    insert()
  }
  
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path="/" render={(props) =>
          <Dashboard
            tickets={tickets}
            technicians={technicians}
            customers={customers}/>
          }>
        </Route>
        <Route path="/dispatch" render={(props) => 
          <DispatchPage
            {...props}
            tickets={tickets}
            technicians={technicians}
            customers={customers}
            handleChange={handleAssignmentChange}
            updateNewAssignment={updateNewAssignment}
            newAssignment={newAssignment}
            setNewAssignment={setNewAssignment}/>
          }>
        </Route>
        <Route path="/tickets" render={(props) => 
          <TicketsPage
            tickets={tickets}
            customers={customers}
            technicians={technicians}
            newTicket={newTicket}
            handleChange={handleTicketChange}
            insertNewTicket={insertNewTicket}/>
          }>
        </Route>
          <Route path="/technicians" render={(props) => 
            <TechsPage
              technicians={technicians}
              tickets={tickets}
              customers={customers}
              newTechnician={newTechnician}
              updatedTicket={updatedTicket}
              handleTechnicianChange={handleTechnicianChange}
              handleTicketUpdateChange={handleTicketUpdateChange}
              insertNewTechnician={insertNewTechnician}
              updateTicket={updateTicket}
            />
          }>
        </Route>
        <Route path="/customers" render={(props) => 
          <CustomersPage
            customers={customers} 
            tickets={tickets}
            newCustomer={newCustomer}
            handleChange={handleCustomerChange}
            insertNewCustomer={insertNewCustomer}
            newTicket={newTicket}
          />}>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
