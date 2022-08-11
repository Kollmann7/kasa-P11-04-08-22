import React from 'react'
import MainLayout from '../../layout/mainLayout'
import Banner from '../../components/banner/banner'


export default class Home extends React.Component {
    render(){
        return(
            <MainLayout>
                <main className="home">
                    <Banner />
                </main>
            </MainLayout>
        )
    }
}
