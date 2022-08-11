import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/footer'

export default class MainLayout extends React.Component {
    render(){
        return(
            <div>
                <div className='Wrapper'>
                    <Header />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}