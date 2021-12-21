import React, {useState, useEffect} from 'react'
import OpenTicketListItem from './OpenTicketListItem'

export default function OpenTicketList(props) {

  const [selectedTicket, setSelectedTicket] = useState({example: 'my examples'})

  const ticketSelector = (id) => {
    setSelectedTicket(id)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateNewAssignment(selectedTicket)
  }

  useEffect(() => {
    return () => {
      props.setNewAssignment({technician_id: ''})
    }
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="technician_id" onChange={props.handleChange}>
          <option value="">Technician...</option>
          {props.availableTechs.map((element, index) => (
            <option value={element._id} key={index}>{element.firstName} {element.lastName}</option>
          ))}
        </select>
        {props.openTickets.map((element, index) => (
        <div key={index}>
          <OpenTicketListItem
            ticketSelector={ticketSelector}
            ticket={element} 
            customers={props.customers} 
            newAssignment={props.newAssignment}
          />
        </div>
      ))}
      </form>
      
    </div>
  )
}