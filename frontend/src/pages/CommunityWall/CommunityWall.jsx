import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactPopup from '../../components/ContactPopup/ContactPopup'
import CComplaint from '../../components/CComplaint/CComplaint'

export const CommunityWall = () => {
  return (
    <div className='bg-[#f3f6f2]'>
        <Navbar />
        <div className='w-screen bg-[#f3f6f2] mb-2'>
            <input placeholder="Search Here" className="border-solid border-2  border-black p-2 w-80 mx-10 my-3"></input>
            <button type="submit"><i class="fa fa-search " ></i></button>
        </div>
        <div className="mx-10 flex flex-wrap p-3 pl-10 bg-[#f3f6f2]">
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Author" info="The water bills were hiked by 200% due to a water tube disruption."/>
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Author" info="The water bills were hiked by 200% due to a water tube disruption."/>
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Name" info="The water bills were hiked by 200% due to a water tube disruption."/>
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Author" info="The water bills were hiked by 200% due to a water tube disruption."/>
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Name" info="The water bills were hiked by 200% due to a water tube disruption."/>
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Author" info="The water bills were hiked by 200% due to a water tube disruption."/>
            <CComplaint title="Electricity Bill Hike" timeloc="12.00 AM, 15th March 2023" author="Name" info="The water bills were hiked by 200% due to a water tube disruption."/>
        </div>
        <div className="bg-red h-10 w-screen">

        </div>
        <Footer/>
    </div>
  )
}
