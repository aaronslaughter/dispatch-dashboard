import React, {useState} from 'react'
import TechnicianCreator from '../components/technician/TechnicianCreator'
import TechnicianList from '../components/technician/TechnicianList'
import TicketResolver from '../components/technician/TicketResolver'

export default function TechsPage(props) {

  const [activeTab, setActiveTab] = useState(0)

  return (
    <main>
      <div onClick={() => setActiveTab(0)}>Technician List</div>
      <div onClick={() => setActiveTab(1)}>New Technician</div>
      <div onClick={() => setActiveTab(2)}>Ticket Resolver</div>
      {activeTab === 0 ? <TechnicianList technicians={props.technicians} tickets={props.tickets}/> 
      : activeTab === 1 ? <TechnicianCreator newTechnician={props.newTechnician} 
      handleTechnicianChange={props.handleTechnicianChange}
      insertNewTechnician={props.insertNewTechnician}
      setActiveTab={setActiveTab}/> 
      : <TicketResolver technicians={props.technicians}
      tickets={props.tickets}
      customers={props.customers}
      handleTicketUpdateChange={props.handleTicketUpdateChange}
      updateTicket={props.updateTicket}
      setActiveTab={setActiveTab}/>}
    </main>
  )
}