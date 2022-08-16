import React from 'react'
import './banner.css'

function Banner(props) {
    return (
      <div className="banner-wrapper">
        <div className="banner">{props.title}</div>
      </div>
    )
  }
export default Banner
