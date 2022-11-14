import React from 'react'
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Component/RightSidebar/RightSidebar'
import HomeMainbar from '../../Component/HomeMainbar/HomeMainbar'
import '../../App.css'

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Questions