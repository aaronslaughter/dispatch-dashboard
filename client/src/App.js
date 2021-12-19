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

  const handleCustomerChange = (e) => {
    setNewCustomer({...newCustomer, [e.target.name]: e.target.value})
  }

  const handleTicketChange = (e) => {
    setNewTicket({...newTicket, [e.target.name]: e.target.value})
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
        <Route exact path="/" component={ Dashboard }></Route>
        <Route exact path="/dispatch" component={ DispatchPage }></Route>
        <Route path="/tickets" render={(props) => 
          <TicketsPage
            tickets={tickets}
            customers={customers}
            newTicket={newTicket}
            handleChange={handleTicketChange}
            insertNewTicket={insertNewTicket}/>
          }>
        </Route>
        <Route exact path="/technicians" component={ TechsPage }></Route>
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
