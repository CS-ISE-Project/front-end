import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Shared/Footer'
import Navbar from './Navbar'
import Table from './Table'
import SecondTable from './SecondTable'

function AdminLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
  )
}

export default AdminLayout