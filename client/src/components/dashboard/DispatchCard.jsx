import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export default function DispatchCard(props) {

  const [availableTechs, setAvailableTechs] = useState(0)
  const [unassignedTickets, setUnassignedTickets] = useState(0)

  useEffect(() => {
    setAvailableTechs(props.technicians.filter((element) => element.status === 'Available').length)
    setUnassignedTickets(props.tickets.filter((element) => element.status === 'Open' && !element.assignedTech).length)
  }, [props.technicians, props.tickets])

  const graphState = {
    labels: ['Available Techs', 'Unassigned Tickets'],
    datasets: [
      {
        backgroundColor: ['rgba(50,255,50,0.75)', 'rgba(255,100,100,0.75)'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [availableTechs, unassignedTickets]
      }
    ]
  }

  return (
    <section>
      <Bar
        data={graphState}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Active Tickets'
            }
          }
        }}
      />
    </section>
  )
}
