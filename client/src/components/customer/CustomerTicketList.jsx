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
    <div>
      {matchingTickets.map((element, index) => (
        <div key={index}>
          <p>Status:</p>
          <p>{element.status}</p>
          <p>Priority:</p>
          <p>{element.priority}</p>
          <p>Description:</p>
          <p>{element.description}:</p>
        </div>
      ))}
      
    </div>
  )
}
