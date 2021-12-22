import React, {useState, useEffect} from 'react'

export default function CustomerCard(props) {

  const [hotSite, setHotSites] = useState({name: '', tickets: []})

  useEffect(() => {
    setHotSites(getHotSite())
  }, [props.customers])

  const getHotSite = () => {
    let hotSite = {name: '', tickets: []}
    let currentHigh = -1

    props.customers.forEach((element) => {
      if (element.tickets.length > currentHigh) {
        hotSite = element
        currentHigh = element.tickets.length
      }
    })
    return hotSite
  }

  return (
    <section>
      <p>Hot Site:</p>
      <p>{hotSite.name}</p>
      <p>{hotSite.tickets.length} Tickets Open</p>
    </section>
  )
}
