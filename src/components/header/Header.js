import './header.css'
import React from 'react'
import Logo from '../logo/logo'
import Navigation from '../navigation/Nav'


export default class Header extends React.Component {
  render(){
    return(
      <header>
        <Logo />
        <Navigation />
      </header>
    )
  }
}
