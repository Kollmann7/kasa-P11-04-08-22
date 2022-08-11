import React from 'react'
import { Link } from 'react-router-dom'
import './locationCard.css'

export default class LocationCard extends React.Component {
  render() {
    const {  title, cover } = this.props.location
    console.log(title, cover)
    return (
      <li>
        <Link>
          <div>
            <img src={cover} alt={title} />
          </div>
          <h3>{title}</h3>
        </Link>
      </li>
    )
  }
}
