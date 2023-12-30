import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Shared/Footer'
import Navbar from './Navbar'
import Table from './Table'


function AdminLayout() {
  return (
    <div className='p-10'>
        <Navbar />
        <Outlet />
        <Table />
        {/* <Footer />     */}
      </div>
  )
}

export default AdminLayout