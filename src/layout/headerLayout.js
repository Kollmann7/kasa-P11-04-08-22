import React from 'react'
import Header from '../components/header/Header'

export default class HeaderLayout extends React.Component {
    render(){
        return(
            <div>
                <div className='Wrapper'>
                    <Header />
                    {this.props.children}
                </div>
            </div>
        )
    }
}