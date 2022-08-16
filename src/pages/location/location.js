import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/mainLayout'
import { useParams } from 'react-router-dom'

function Location() {
  const params = useParams()
  const locationId = params.id

  const [setError] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('../data/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          let currentLocation = result.find(location => location.id === locationId)
          setData(currentLocation)
        },
        (error) => {
          setError(error)
        }
      )
  }, [])
  console.log('data', data)

  return (
    <MainLayout>
      {/* <div className="container">{this.props}</div> */}
    </MainLayout>
  )
}
export default Location
