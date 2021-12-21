import React, {useState, useEffect} from 'react'

export default function DispatchCard(props) {

  const [availableTechs, setAvailableTechs] = useState(0)
  const [unassignedTickets, setUnassignedTickets] = useState(0)

  useEffect(() => {
    setAvailableTechs(props.technicians.filter((element) => element.status === 'Available').length)
    setUnassignedTickets(props.tickets.filter((element) => element.status === 'Open' && !element.assignedTech).length)
  }, [props.technicians, props.tickets])

  return (
    <section>
      <p>Available Techs: {availableTechs}</p>
      <p>Unassigned Tickets: {unassignedTickets}</p>
    </section>
  )
}
