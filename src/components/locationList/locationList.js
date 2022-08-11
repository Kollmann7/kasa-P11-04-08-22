import React from 'react'
import LocationCard from '../locationCard/locationCard'

export default class LocationList extends React.Component {
  render() {
    return (
      <section className="locationList">
        <ul>
          {this.props.data.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </ul>
      </section>
    )
  }
}
