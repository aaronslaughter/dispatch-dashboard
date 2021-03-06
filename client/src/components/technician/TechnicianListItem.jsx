import React, {useState, useEffect} from 'react'

export default function TechnicianListItem(props) {

  const [assignedTicket, setAssingedTicket] = useState('')

  useEffect(() => {
    let ticket = props.tickets.filter((element) => props.technician.assignedTicket === element._id)
    if (ticket.length > 0) {
      setAssingedTicket(ticket[0]._id)
    }
    
  }, [])

  return (
    <div className="technician-list-item">
      <div>{props.technician.firstName} {props.technician.lastName}</div>
      <div>{props.technician.status}</div>
      <div>{assignedTicket === '' ? 'No Ticket Assigned' : 
      props.customers.find((element) => element.tickets.includes(assignedTicket)).name}</div>
    </div>
  )
}
