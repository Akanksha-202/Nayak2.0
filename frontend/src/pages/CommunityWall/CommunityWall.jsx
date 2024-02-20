import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ComplaintCard from '../../components/Card/ComplaintCard'


export const CommunityWall = () => {
  return (
    <div className='bg-[#f3f6f2]'>
        <Navbar />
        <div className='m-3'>
          <ComplaintCard />
        </div>
        <Footer/>
    </div>
  )
}
