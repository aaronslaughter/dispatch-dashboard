import React, {useState} from 'react'
import TechnicianCreator from '../components/technician/TechnicianCreator'
import TechnicianList from '../components/technician/TechnicianList'
import TicketResolver from '../components/technician/TicketResolver'

export default function TechsPage(props) {

  const [activeTab, setActiveTab] = useState(0)

  return (
    <main className="technician-page-main">
      <div onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active-tab' : 'inactive-tab'}>Technician List</div>
      <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active-tab' : 'inactive-tab'}>New Technician</div>
      <div onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active-tab' : 'inactive-tab'}>Ticket Resolver</div>
      {activeTab === 0 ? <TechnicianList technicians={props.technicians} tickets={props.tickets} customers={props.customers}/> 
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