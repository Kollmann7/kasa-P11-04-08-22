import React from 'react'
import Rating from '../rating/rating'
import './locationContent.css'

function locationContent(props) {
  const { title, location, host, tags, rating } = props.data
  return (
    <div className="location-content">
      <div className="location-information">
        <h3 className="title">{title}</h3>
        <p className="position"> {location}</p>
        <div className="tags">
          {tags.map((tag) => (
            <p key={tag} className="tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="profil">
        <div className="host">
          <p className="host-name">
            {host.name.split(' ')[0]} <br />
            {host.name.split(' ')[1]}
          </p>
          <img className="host-pp" src={host.picture} alt="host profil" />
        </div>
        <div className="rating">
          <div>
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default locationContent
