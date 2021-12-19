import React from 'react'
import TicketListItem from './TicketListItem'

export default function TicketList(props) {
  return (
    <div>
      <div>Customer:</div>
      <div>Assigned Tech:</div>
      <div>Status:</div>
      <div>Priority:</div>
      <div>Description:</div>
      <div>Resolution:</div>      
      {props.tickets.map((element, index) => (
        <div key={index}>
          <TicketListItem ticket={element} customers={props.customers}/>
        </div>
      ))}
    </div>
  )
}
