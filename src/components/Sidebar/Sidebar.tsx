import React from 'react'
import "./Sidebar.scss"
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarLeft />
      <SidebarRight />
    </div>
  )
}

export default Sidebar
