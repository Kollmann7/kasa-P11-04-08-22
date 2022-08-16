import React from 'react'
import './locationContent.css'

function locationContent(props) {
  const { title, location, host, tags, rating } = props.data
  console.log(props.data)
  return (
    <div className="location-content">
        <div>
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
      <div className='profil'>
        <div className='host'>
           <p className='host-name'>{host.name}</p>
           <img className='host-pp' src={host.picture} alt='host profil'/>
        </div>
        <div className='rating'>

        </div>
      </div>

    </div>
  )
}

export default locationContent
