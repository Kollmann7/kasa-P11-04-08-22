import logoKasa  from '../../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo () {
    return(
      <h1>
        <Link to="/">
          <img src={logoKasa} alt="Kasa" />
        </Link>
      </h1>
    )
 
}

export default Logo
