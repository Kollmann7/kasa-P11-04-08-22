import React from 'react'
import LocationCard from '../locationCard/locationCard'
import './locationList.css'

export default class LocationList extends React.Component {
  render() {
    return (
      <section className="location-list">
        <div className='location-wrapper'>
          {this.props.data.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>
    )
  }
}
