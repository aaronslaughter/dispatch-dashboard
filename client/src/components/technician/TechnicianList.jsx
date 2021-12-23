import React from 'react'
import TechnicianListItem from './TechnicianListItem'

export default function TechnicianList(props) {
  return (
    <div className="technician-list-headers">
      <div>Name:</div>
      <div>Status:</div>
      <div>Assigned Ticket:</div>
      <div>
        {props.technicians.map((element, index) => 
          <div key={index}>
            <TechnicianListItem technician={element} tickets={props.tickets} customers={props.customers}></TechnicianListItem>
          </div>
        )}
      </div>
    </div>
  )
}
