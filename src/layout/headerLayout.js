import React from 'react'
import Header from '../components/header/Header'

function HeaderLayout(props) {
  return (
    <div>
      <div className="Wrapper">
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default HeaderLayout
