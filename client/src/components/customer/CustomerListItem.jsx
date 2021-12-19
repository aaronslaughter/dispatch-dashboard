import React, { useState} from 'react'
import CustomerTicketList from './CustomerTicketList'

export default function CustomerListItem(props) {

  const [clicked, setClicked] = useState(false)

  return (
    <div onClick={() => clicked ? setClicked(false) : setClicked(true)}>
      <p>{props.customer.name}</p>
      <p>{props.customer.location}</p>
      <p>{props.customer.tickets.length}</p>
      {clicked ? <CustomerTicketList customer={props.customer}/> : ''}
    </div>
  )
}
