import React from 'react'
import Header from '../../components/ProfileNav/Header'
import {  Outlet } from 'react-router-dom'
import AdminNav from '../../components/admin/AdminNav'


const Profile = () => {
  
  return (
<>  
      
      {/* <AdminNav/> */}
      <Header/>   
      <Outlet/>
</>
  )
}

export default Profile