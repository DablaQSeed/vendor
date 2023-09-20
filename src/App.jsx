import React from 'react'
import Map from './Components/Map/Map'
import Event from './Components/events/Event'
import Async from './Components/async/Async'
import Button from './Components/button/Button'
import Navbar from './Components/navbar/Navbar'
import Signup from './Components/auth/Signup'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Signin from './Components/auth/Signin'
import Dashboard from './Components/dashboard/Dashboard'
import Notfound from './notfound'
import About from './Components/about/About'
import Feed from './Components/Feed'
import Library from './Components/Library'
import Formik from './Formik'

const App = () => {
  let token = localStorage.getItem('token')
  return (
    <>
    <Routes>   
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/dashboard' element={token ?<Dashboard/>: <Navigate to='/signin'/>}/>
      <Route path='*' element={<Notfound />}/>
      <Route path='/about/:id' element={<About />}/>
      <Route path='/feed/*' element={<Feed />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/formik' element={<Formik />}/>
    </Routes>
    
    {/* <Map /> */}
    {/* <Event /> */}
    {/* <Async /> */}
    {/* <Button name='SEED' style='bg-danger text-white'/> */}
    {/* <Button name='ADUKE' style='bg-success text-white' /> */}
    {/* <Button name='Click Me'/> */}

    </>
  )
}

export default App