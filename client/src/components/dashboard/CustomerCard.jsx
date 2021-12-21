import React, {useState, useEffect} from 'react'

export default function CustomerCard(props) {

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

  const [hotSite, setHotSites] = useState({name: '', tickets: []})

  useEffect(() => {
    setHotSites(getHotSite())
  }, [props.customers])

  return (
    <section>
      <p>Hot Site:</p>
      <p>{hotSite.name}</p>
      <p>{hotSite.tickets.length} Tickets Open</p>
    </section>
  )
}
