import React from 'react'
import { Link } from 'react-router-dom'
import './locationCard.css'

function LocationCard (props){
    const { id, title, cover } = props.location
    return (
      <div>
        <Link to={`/location/${id}`} className="location-card">
          <div>
            <img src={cover} alt={title} />
          </div>
          <h3>{title}</h3>
        </Link>
      </div>
    )
}

export default LocationCard