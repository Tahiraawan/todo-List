import React from 'react'
import { Outlet } from 'react-router-dom'
function PageLayout() {
  return (
    <div>
    <h1 className='heading'>Todo List</h1>
    <Outlet />
    </div>
  )
}

export default PageLayout