import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

export default function CustomerTicketList(props) {

  const [matchingTickets, setMatchingTickets] = useState([])

  useEffect(() => {
    const findMatches = async () => {
      const response = await axios.get(`${BASE_URL}/ticket/customer/?customer_id=${props.customer._id}`)
      setMatchingTickets(response.data.tickets)
    }
    findMatches()
  }, [])

  return (
    <div className="customer-ticket-list-item">
      {matchingTickets.map((element, index) => (
        <div key={index} className="customer-ticket-list-single-item">
          <p>Status: {element.status}</p>
          <p>Priority: {element.priority}</p>
          <p>Description: {element.description}</p>
        </div>
      ))}
      
    </div>
  )
}
