import React from 'react'
import TicketListItem from './TicketListItem'

export default function TicketList(props) {
  return (
    <div className="ticket-list-headers">
      <div>Customer:</div>
      <div>Assigned Tech:</div>
      <div>Status:</div>
      <div>Priority:</div>
      <div>Description:</div>
      <div>Resolution:</div>
      <div className="ticket-list"> 
        {props.tickets.map((element, index) => (
          <div key={index}>
            <TicketListItem ticket={element} customers={props.customers} technicians={props.technicians}/>
          </div>
        ))}
      </div>
    </div>
  )
}
