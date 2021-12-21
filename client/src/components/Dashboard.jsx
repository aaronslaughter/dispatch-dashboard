import React from 'react'
import CustomerCard from './dashboard/CustomerCard'
import DispatchCard from './dashboard/DispatchCard'
import TechsCard from './dashboard/TechsCard'
import TicketsCard from './dashboard/TicketsCard'

export default function Dashboard(props) {
  return (
    <main>
      <DispatchCard 
        technicians={props.technicians}
        tickets={props.tickets}
      />
      <TicketsCard
        tickets={props.tickets}
      />
      <TechsCard
        technicians={props.technicians}
      />
      <CustomerCard
        customers={props.customers}
      />
    </main>
  )
}
