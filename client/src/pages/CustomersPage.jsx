import React, { useState } from 'react'
import CustomerList from '../components/customer/CustomerList'
import CustomerCreator from '../components/customer/CustomerCreator'

export default function CustomersPage(props) {

  const [showList, setShowList] = useState(true)

  return (
    <main>
      <div onClick={() => setShowList(true)}>Customer List</div>
      <div onClick={() => setShowList(false)}>New Customer</div>
      {showList ? <CustomerList customers={props.customers}/> : 
        <CustomerCreator
          newCustomer={props.newCustomer} 
          handleChange={props.handleChange}
          insertNewCustomer={props.insertNewCustomer}
          setShowList={setShowList}/>}
    </main>
  )
}
