import React from 'react'

export default function OpenTicketListItem(props) {

  const ticketCallback = () => {
    props.ticketSelector(props.ticket._id)
  }

  return (
    <div className="open-ticket-list-item">
      <button onMouseDown={ticketCallback} type="submit" disabled={!props.newAssignment.technician_id}>Assign</button>
      <p>{props.customers.find((element) => element._id === props.ticket.customer_id).name}</p>
      <p>{props.ticket.assignedTech ? props.ticket.assignedTech : 'Not Assigned'}</p>
      <p>{props.ticket.status}</p>
      <p>{props.ticket.priority}</p>
      <p>{props.ticket.description}</p>
      <p>{props.ticket.resolution}</p>
    </div>
  )
}
