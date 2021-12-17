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

  const [customers, setCustomers] = useState(null)
  const [tickets, setTickets] = useState(null)
  const [technicians, setTechnicians] = useState(null)

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

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={ Dashboard }></Route>
        <Route exact path="/dispatch" component={ DispatchPage }></Route>
        <Route exact path="/tickets" component={ TicketsPage }></Route>
        <Route exact path="/technicians" component={ TechsPage }></Route>
        <Route exact path="/customers" component={(props) => <CustomersPage {...props} customers={customers}/>}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
