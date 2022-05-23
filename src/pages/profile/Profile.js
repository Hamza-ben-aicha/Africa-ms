import React from 'react'
import Header from '../../components/ProfileNav/Header'
import {  Outlet } from 'react-router-dom'


const Profile = () => {
  
  return (
<>
      <Header/>   
      <Outlet/>
</>
  )
}

export default Profile