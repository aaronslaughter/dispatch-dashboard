import React from 'react'
import CustomerCard from './dashboard/CustomerCard'
import DispatchCard from './dashboard/DispatchCard'
import TechsCard from './dashboard/TechsCard'
import TicketsCard from './dashboard/TicketsCard'

export default function Dashboard() {
  return (
    <main>
      <DispatchCard/>
      <TicketsCard/>
      <TechsCard/>
      <CustomerCard/>
    </main>
  )
}
