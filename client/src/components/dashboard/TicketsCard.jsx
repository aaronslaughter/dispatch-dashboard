import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement
);

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

  const graphState = {
    labels: ['High','Medium','Low','Resolved'],
    datasets: [
      {
        backgroundColor: ['rgba(255,100,100,0.75)','rgba(225,225,100,0.75)','rgba(50,255,50,0.75)', 'rgba(150,150,150,0.75)'],
        data: [highPriority, mediumPriority, lowPriority, resolved],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        hoverOffset: 30
      }
    ]
  }

  return (
    <section className='dashboard-card'>
      <Doughnut
        data={graphState}
        options={{
          layout: {
            padding: 10
          },
          plugins: {
            title: {
              display: true,
              text: 'Ticket Priorites'
            }
          }
        }}
      />
    </section>
  )
}
