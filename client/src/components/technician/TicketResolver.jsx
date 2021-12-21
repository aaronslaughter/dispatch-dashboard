import React, {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

export default function TicketResolver(props) {

  const [assignedTicket, setAssignedTicket] = useState({_id: ''})
  const [matchingCustomer, setMatchingCustomer] = useState({name: ''}) 

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateTicket(assignedTicket._id)
    props.setActiveTab(0)
    // change the page to technicians main
  }

  const handleChange = (e) => {

    const matchingTech = props.technicians.filter((element) => element._id === e.target.value)[0]
    
    if (matchingTech.assignedTicket !== undefined) {
      const findMatchingTicket = async () => {
        try {
        const response = await axios.get(`${BASE_URL}/ticket/${matchingTech.assignedTicket}`)
        setAssignedTicket(response.data.ticket)
        let temp = props.customers.filter((element) => element.tickets.includes(response.data.ticket._id))
        setMatchingCustomer(temp[0])
        } catch (err) {
          setAssignedTicket({_id: ''})
          setMatchingCustomer({name: ''})
        }
      }
      findMatchingTicket()
    } else {
      setAssignedTicket({_id: ''})
      setMatchingCustomer({name: ''})
    }
  }

  return (
    <div>
      <form>
        <select onChange={handleChange}>
          <option value="">Technician...</option>
          {props.technicians.map((element, index) => (
            <option key={index} value={element._id}>{element.firstName} {element.lastName}</option>
          ))}
        </select>
      </form>
      {assignedTicket._id === '' ? <p>No Ticket Assigned</p> 
      : <div>
          <p>{matchingCustomer.name}</p>
          <p>{assignedTicket.status}</p>
          <p>{assignedTicket.priority}</p>
          <p>{assignedTicket.description}</p>
          <form onSubmit={handleSubmit}>
            <input type="text" 
              name={'resolution'} 
              placeholder="Resolution"
              onChange={props.handleTicketUpdateChange}>
            </input>
            <button>Resolve</button>
          </form>
        </div>}
    </div>
  )
}
