import React from 'react'
import LocationCard from '../locationCard/locationCard'
import './locationList.css'

function LocationList(props) {
  return (
    <section className="location-list">
      <div className="location-wrapper">
        {props.data.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </section>
  )
}

export default LocationList
