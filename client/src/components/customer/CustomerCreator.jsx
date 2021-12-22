import React from 'react'

export default function CustomerCreator(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.insertNewCustomer()
    props.setShowList(true)
  }

  return (
    <div className="customer-creator">
      <form onSubmit={handleSubmit} className="customer-creator-form">
        <input type="text" 
          value={props.newCustomer.name} 
          onChange={props.handleChange} 
          name={'name'} 
          placeholder="Name" 
          autoComplete="off"
        />
        <input type="text" 
          value={props.newCustomer.location}
          onChange={props.handleChange}
          name={'location'}
          placeholder="Location"
          autoComplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
