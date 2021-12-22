import React from 'react'

export default function TechnicianCreator(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.insertNewTechnician()
    props.setActiveTab(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          value={props.newTechnician.firstName} 
          onChange={props.handleTechnicianChange} 
          name={'firstName'} 
          placeholder="First Name" 
          autoComplete="off"
        />
        <input type="text" 
          value={props.newTechnician.lastName}
          onChange={props.handleTechnicianChange}
          name={'lastName'}
          placeholder="Last Name"
          autoComplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
