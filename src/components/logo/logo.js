import logoKasa  from '../../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Logo extends React.Component {
  render(){
    return(
      <h1>
        <Link to="/">
          <img src={logoKasa} alt="Kasa" />
        </Link>
      </h1>
    )
  }  
}
