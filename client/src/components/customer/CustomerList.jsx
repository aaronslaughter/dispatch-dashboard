import React from 'react'

export default function CustomerList(props) {
  return (
    <div>
      <div>Account:</div>
      <div>Location:</div>
      <div>Open Tickets:</div>
      {props.customers.map((element, index) => (
        <div key={index}>
          <div>{element.name}</div>
          <div>{element.location}</div>
          <div>{element.tickets.length}</div>
        </div>
      ))}
    </div>
  )
}
