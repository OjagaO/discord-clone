import React from 'react'
import "./Sidebar.scss"

const SidebarLeft = () => {
  return (
    <div className='sidebar_left'>
      <p className='server_icon'>
        <img src="/images/image.man.png" alt="" />
      </p>
      <p className='server_icon'>
        <img src="/images/image.notepc.png" alt="" />
      </p>
      <p className='server_icon'>
        <img src="/images/image.phone.png" alt="" />
      </p>
    </div>
  )
}

export default SidebarLeft
