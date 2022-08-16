import React,{ useState, useEffect} from 'react'
import MainLayout from '../../layout/mainLayout'
import Banner from '../../components/banner/banner'
import LocationList from '../../components/locationList/locationList'
import './home.css'

function Home () {
  const [setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./data/data.json')
    .then((res) => res.json())
      .then((result) => {
        setData(result)
        console.log('res', result)
      },(error) => {
        setError(error)
      }
      )
    }, [])
    return (
      <MainLayout>
        <main className="home">
          <Banner title='Chez vous, partout et ailleurs' />
          
          <LocationList data={data} />
        </main>
      </MainLayout>
    )
}
export default Home