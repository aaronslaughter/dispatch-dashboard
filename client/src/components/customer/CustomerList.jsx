import React from 'react'
import CustomerListItem from './CustomerListItem'

export default function CustomerList(props) {
  return (
    <div>
      <div>Account:</div>
      <div>Location:</div>
      <div>Open Tickets:</div>
      {props.customers.map((element, index) => (
        <div key={index}>
          <CustomerListItem customer={element}/>
        </div>
      ))}
    </div>
  )
}
