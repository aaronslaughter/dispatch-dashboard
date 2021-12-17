import React, { useState } from 'react'
import CustomerList from '../components/customer/CustomerList'
import CustomerCreator from '../components/customer/CustomerCreator'

export default function CustomersPage(props) {

  const [showList, setTab] = useState(true)

  return (
    <main>
      <div onClick={() => setTab(true)}>Customer List</div>
      <div onClick={() => setTab(false)}>New Customer</div>
      {showList ? <CustomerList customers={props.customers}/> : <CustomerCreator/>}
    </main>
  )
}
