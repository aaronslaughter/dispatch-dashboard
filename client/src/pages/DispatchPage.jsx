import React from 'react'
import OpenTicketList from '../components/dispatch/OpenTicketList'

export default function DispatchPage(props) {

  const ticketIsOpen = (ticket) => {
    if (ticket.status === 'Open' && !ticket.assignedTech) {
      return true
    } else {
      return false
    }
  }

  const techIsAvailable = (technician) => {
    if (technician.status === 'Available' && !technician.assignedTicket) {
      return true
    } else {
      return false
    }
  }

  return (
    <main>
      <div className="main-dispatch-headers">
        <div></div>
        <div>Customer:</div>
        <div>Assigned Tech:</div>
        <div>Status:</div>
        <div>Priority:</div>
        <div>Description:</div>    
      </div>
      <OpenTicketList
        {...props}
        handleChange={props.handleChange}
        newAssignment={props.newAssignment}
        setNewAssignment={props.setNewAssignment}
        updateNewAssignment={props.updateNewAssignment}
        availableTechs={props.technicians.filter((element) => techIsAvailable(element))}
        openTickets={props.tickets.filter((element) => ticketIsOpen(element))}
        customers={props.customers}
      />
    </main>
  )
}