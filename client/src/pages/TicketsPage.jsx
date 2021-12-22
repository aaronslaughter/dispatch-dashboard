import React, {useState} from 'react'
import TicketList from '../components/ticket/TicketList'
import TicketCreator from '../components/ticket/TicketCreator'

export default function TicketsPage(props) {

  const [showList, setShowList] = useState(true)

  return (
    <main className="ticket-page-main">
      <h3 onClick={() => setShowList(true)} className={showList ? 'active-tab' : "inactive-tab"}>Ticket List</h3>
      <h3 onClick={() => setShowList(false)} className={showList ? "inactive-tab" : 'active-tab'}>New Ticket</h3>
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