import React from "react"
import MainLayout from '../../layout/mainLayout'
import Banner from '../../components/banner/banner'

export default class About extends React.Component {
    render() {
        return(
            <MainLayout>
                <main className="about">
                    <Banner />
                </main>
            </MainLayout>
        )
    }
}