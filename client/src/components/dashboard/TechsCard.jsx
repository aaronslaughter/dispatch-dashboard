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


export default function TechsCard(props) {

  const [onSite, setOnSite] = useState(0)
  const [enRoute, setEnRoute] = useState(0)
  const [available, setAvailable] = useState(0)
  const [offline, setOffline] = useState(0)

  useEffect(() => {
    setOnSite(props.technicians.filter((element) => element.status === 'On Site').length)
    setEnRoute(props.technicians.filter((element) => element.status === 'En Route').length)
    setAvailable(props.technicians.filter((element) => element.status === 'Available').length)
    setOffline(props.technicians.filter((element) => element.status === 'Offline').length)
  }, [props.technicians])

  const graphState = {
    labels: ['On Site', 'En Route', 'Available', 'Offline'],
    datasets: [
      {
        backgroundColor: ['rgba(255,100,100,0.75)','rgba(225,225,100,0.75)','rgba(100,255,100,0.75)', 'rgba(150,150,150,0.75)'],
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 2,
        data: [onSite, enRoute, available, offline]
      }
    ]
  }

  return (
    <section>
      <Bar
        data={graphState}
        options={{
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            title: {
              display: true,
              text: 'Tech Availability'
            }
          }
        }}
      />
    </section>
  )
}
