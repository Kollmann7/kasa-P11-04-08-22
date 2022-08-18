import React from 'react'
import { ReactComponent as Star } from '../../assets/star.svg'

function Rating(props) {
  const stars = []
  let color = ''
  const ratingNumber = props.rating

  for (let i = 0; i < 5; i++) {
    ratingNumber > i ? (color = '#FF6060') : (color = '#E3E3E3')
    stars.push(<Star fill={color} key={i} />)
  }
  return <>{stars}</>
}

export default Rating
