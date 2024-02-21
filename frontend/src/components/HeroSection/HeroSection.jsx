import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const features = [
  {name: "AI Chatbot assistance",},
  {name: "Connect with the community",},
  {name: "Secure Payment Gateways",},
  {name: "Give back to community",},
  {name: "Data Privacy and Security"},
  {name: "24/7 Customer Support"},
];


function HeroSection() {
  
  return (
    <div className='mb-16 hero'>
      <div className='flex flex-col items-center'>
        <h1 className='text-7xl mt-5'>Nayak2.0</h1>
        <p className='text-1xl mt-2 mb-5'>Connecting Victims, Amplifying Solutions</p>
      </div>
      <div className='flex justify-center mt-5'>
        < Link to='/complaint'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center'>
            <svg
              className="h-6 w-6 mr-2"
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
            File a Complaint
          </button>
        </Link>
      </div>
      <div className="mx-auto mt-6 max-w-2xl sm:mt-12 lg:mt-12 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y- lg:max-w-none lg:grid-cols-3 lg:gap-y-8 ">
          {features.map((feature) => (
            <div key={feature.name} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-1">
              <dt className="text-base font-semibold leading-7">
                {feature.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>

    </div>
  )
}

export default HeroSection