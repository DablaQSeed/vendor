import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Short from './Short'
import Map from './Map/Map'

const Feed = () => {
  return (
    <div>
        <Link to='/feed/short'>Short</Link>
        <Link to='/feed/map'>map</Link>

        <h1>FEED</h1>
        <Routes>
            <Route path='/short' element={<Short />}/>
            <Route path='/map' element={<Map />}/>

        </Routes>
    </div>
  )
}

export default Feed