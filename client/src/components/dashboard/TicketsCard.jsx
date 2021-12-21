import React, {useState, useEffect} from 'react'

export default function TicketsCard(props) {

  const [highPriority, setHighPriority] = useState(0)
  const [mediumPriority, setMediumPriority] = useState(0)
  const [lowPriority, setLowPriority] = useState(0)
  const [resolved, setResolved] = useState(0)

  useEffect(() => {
    setHighPriority(props.tickets.filter((element) => element.priority === 'High' && element.status !== 'Resolved').length)
    setMediumPriority(props.tickets.filter((element) => element.priority === 'Medium' && element.status !== 'Resolved').length)
    setLowPriority(props.tickets.filter((element) => element.priority === 'Low' && element.status !== 'Resolved').length)
    setResolved(props.tickets.filter((element) => element.status === 'Resolved').length)
  }, [props.tickets])

  return (
    <section>
      <p>High Priority Tickets: {highPriority}</p>
      <p>Medium Priority Tickets: {mediumPriority}</p>
      <p>Low Priority Tickets: {lowPriority}</p>
      <p>Resolved Tickets: {resolved}</p>
    </section>
  )
}
