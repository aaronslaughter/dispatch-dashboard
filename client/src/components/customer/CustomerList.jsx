import React from 'react'
import CustomerListItem from './CustomerListItem'

export default function CustomerList(props) {
  return (
    <div className="customer-list-headers">
      <div>Account:</div>
      <div>Location:</div>
      <div>Open Tickets:</div>
      <div>
        {props.customers.map((element, index) => (
          <div key={index}>
            <CustomerListItem customer={element}/>
          </div>
        ))}
      </div>
    </div>
  )
}
