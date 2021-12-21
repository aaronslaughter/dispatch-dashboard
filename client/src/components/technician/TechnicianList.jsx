import React from 'react'
import TechnicianListItem from './TechnicianListItem'

export default function TechnicianList(props) {
  return (
    <div>
      <div>Name:</div>
      <div>Seniority:</div>
      <div>Status:</div>
      <div>Assigned Ticket:</div>
      {props.technicians.map((element, index) => 
        <div key={index}>
          <TechnicianListItem technician={element} tickets={props.tickets}></TechnicianListItem>
        </div>
      )}
    </div>
  )
}
