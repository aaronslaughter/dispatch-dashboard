import React, {useState} from 'react'
import TicketList from '../components/ticket/TicketList'
import TicketCreator from '../components/ticket/TicketCreator'

export default function TicketsPage(props) {

  const [showList, setShowList] = useState(true)

  return (
    <main>
      <div onClick={() => setShowList(true)}>Ticket List</div>
      <div onClick={() => setShowList(false)}>New Ticket</div>
      {showList ? <TicketList tickets={props.tickets} customers={props.customers}/> : 
        <TicketCreator
          newTicket={props.newTicket}
          customers={props.customers} 
          handleChange={props.handleChange}
          insertNewTicket={props.insertNewTicket}
          newTicket={props.newTicket}
          setShowList={setShowList}
        />}
    </main>
  )
}