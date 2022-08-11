import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Home from './pages/home/home'
import About from './pages/about/about'
import Error from './pages/error/error'
import Location from './pages/location/location'

export default class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/location' element={<Location />}></Route>
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
