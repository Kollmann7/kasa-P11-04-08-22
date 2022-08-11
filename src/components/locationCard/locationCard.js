import React from 'react'
import { Link } from 'react-router-dom'
import './locationCard.css'

export default class LocationCard extends React.Component {
  render() {
    const { id, title, cover } = this.props.location
    return (
      <li>
        <Link to={`/location/${id}`} className="locationCard">
          <div>
            <img src={cover} alt={title} />
          </div>
          <h3>{title}</h3>
        </Link>
      </li>
    )
  }
}