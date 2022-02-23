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
      {hotSite.tickets.length > 0 ? 
        <p><span className='non-zero-tickets'>{hotSite.tickets.length}</span> Tickets Open</p> :
        <p><span className='zero-tickets'>{hotSite.tickets.length}</span> Tickets Open</p>
      }
    </section>
  )
}
