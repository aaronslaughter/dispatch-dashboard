import React, {useState, useEffect} from 'react'

export default function TicketCreator(props) {

  const [invalidInput, setInvalidInput] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.insertNewTicket()
    props.setShowList(true)
  }

  useEffect(() => {
    if (!(props.newTicket.priority === "" || 
    props.newTicket.customer_id === "" || 
    props.newTicket.description === "")) {
      setInvalidInput(false)
    }
    else {
      setInvalidInput(true)
    }
  }, [props.newTicket])

  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-creator-form">
        <select name="customer_id" onChange={props.handleChange}>
          <option value="">Customer...</option>
          {props.customers.map((element, index) => (
            <option value={element._id} key={index}>{element.name}</option>
          ))}
        </select>
        <select name="priority" onChange={props.handleChange}>
          <option value="">Priority...</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input type="text" 
          value={props.newTicket.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder="Description..."
          rows="5"
          cols="30"
        />
        <button disabled={invalidInput}>Submit</button>
      </form>
    </div>
  )
}
