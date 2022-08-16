import React, { useState } from 'react'
import Arrow from '../arrow/arrow'
import './carousel.css'

function Carousel(props) {
  const [current, setCurrent] = useState(0)

  const slideRight = () => {
    setCurrent(current === props.data.length - 1 ? 0 : current + 1)
  }
  const slideLeft = () => {
    setCurrent(current === 0 ? props.data.length - 1 : current - 1)
  }

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {props.data.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? 'carousel-card carousel-card-active'
                  : 'carousel-card'
              }
            >
              <img className="card-image" src={image} alt="" />
            </div>
          )
        })}
        <div className="carousel-arrow-left" onClick={slideLeft}>
          <Arrow />
        </div>
        <div className="carousel-arrow-right" onClick={slideRight}>
          <Arrow />
        </div>
        <div className="carousel_index">
          {`${current + 1}/${props.data.length}`}
        </div>
      </div>
    </div>
  )
}
export default Carousel
