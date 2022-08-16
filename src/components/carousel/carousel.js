import React, { useState } from 'react'
import { pictures } from './data'
import Arrow from '../arrow/arrow'
import './carousel.css'

function Carousel() {
  const [current, setCurrent] = useState(0)

  const slideRight = () => {
    setCurrent(current + 1)
  }
  const slideLeft = () => {
    setCurrent(current + 1)
  }

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {pictures.map((image, index) => {
          console.log(image)
          return (
            <div
              key={index}
              className={
                index == current
                  ? 'carousel-card carousel-card-active'
                  : 'carousel-card'
              }
            >
              <img className="card-image" src={image.picture} alt="" />
            </div>
          )
        })}
        <div className="carousel-arrow-left" onClick={slideLeft}>
          <Arrow />
        </div>
        <div className="carousel-arrow-right" onClick={slideRight}>
          <Arrow />
        </div>
      </div>
    </div>
  )
}
export default Carousel
