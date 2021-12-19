import React, {useEffect} from 'react'

export default function TicketListItem(props) {
  return (
    <div>
      <p>{props.customers.find((element) => element._id === props.ticket.customer_id).name}</p>
      <p>{props.ticket.assignedTech ? props.ticket.assignedTech : 'Not Assigned'}</p>
      <p>{props.ticket.status}</p>
      <p>{props.ticket.priority}</p>
      <p>{props.ticket.description}</p>
      <p>{props.ticket.resolution}</p>
    </div>
  )
}
