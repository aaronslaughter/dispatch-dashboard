import React, {useState, useEffect} from 'react'

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

  return (
    <section>
      <p>Techs on site: {onSite}</p>
      <p>Techs en route: {enRoute}</p>
      <p>Techs available: {available}</p>
      <p>Techs offline: {offline}</p>
    </section>
  )
}
