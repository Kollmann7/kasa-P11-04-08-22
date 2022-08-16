import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/mainLayout'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/carousel/carousel'
import LocationContent from '../../components/locationContent/locationContent'
import './location.css'

function Location() {
  const params = useParams()
  const locationId = params.id

  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('../data/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          let currentLocation = result.find(
            (location) => location.id === locationId
          )
          setData(currentLocation)
        },
        (error) => {
          setError(error)
        }
      )
  }, [locationId])

  console.log('data', data)
  return (
    <MainLayout>
      <main className="location">
        <Carousel data={data.pictures} />
        <LocationContent data={data} />
      </main>
    </MainLayout>
  )
}
export default Location
