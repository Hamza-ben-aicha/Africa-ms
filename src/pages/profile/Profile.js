import React from 'react'
import Header from '../../components/ProfileNav/Header'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Notifications from '../../components/notifications/notifications'


const Profile = () => {
  
  return (
<>
      <Header/>   
      <Outlet/>
</>
  )
}

export default Profile