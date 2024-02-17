import React from 'react'
import './Hero.css'

function HeroSection() {
    return (
        <div className='hero'>
            <div className='flex flex-col items-center'>
                <h1 className='text-7xl'>Nayak2.0</h1>
                <p className='text-1xl'>Connecting Victims, Amplifying Solutions</p>
            </div>
            <div>
                <div className='flex justify-center'>
                    <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>File a Complaint</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection