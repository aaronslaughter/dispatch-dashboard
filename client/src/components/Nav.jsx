import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/dispatch">Dispatch</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/technicians">Technicians</Link>
        <Link to="/customers">Customers</Link>
    </nav>
  )
}
