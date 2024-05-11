import React from 'react'
import Home from '../page/Home'
import Login from '../page/Login'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/Login"  element={<Login/>}/>
      
      
    </Routes>
  )
}

export default AllRoute