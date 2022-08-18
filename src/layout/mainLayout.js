import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/footer'

function MainLayout(props) {
  return (
    <div>
      <div className="Wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
