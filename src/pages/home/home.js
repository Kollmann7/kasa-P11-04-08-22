import React from 'react'
import MainLayout from '../../layout/mainLayout'
import Banner from '../../components/banner/banner'
import LocationList from '../../components/locationList/locationList'
import './home.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.title = <h2>Chez vous, partout et ailleurs</h2>
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    }

  }
  componentDidMount() {
    fetch('./data/data.json')
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        // eslint-disable-next-line no-unused-expressions
        this.setState({
          isLoaded: true,
          data: result
        }),
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            })
          }
      })
  }
  
  render() {
    return (
      <MainLayout>
        <main className="home">
          <Banner title={this.title} />
          <LocationList data={this.state.data} />
        </main>
      </MainLayout>
    )
  }
}
