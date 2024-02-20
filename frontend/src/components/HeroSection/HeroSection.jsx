import React from 'react';
import './Hero.css';
import { FaGithub, FaShareAlt, FaMoneyBillAlt } from 'react-icons/fa';

const features = [
  {
    name: "Add GitHub link",
    description: "You can add your GitHub repository link to your profile.",
    icon: FaGithub,
  },
  {
    name: "Share your profile",
    description: "Share your profile with your friends and colleagues.",
    icon: FaShareAlt,
  },
  {
    name: "Open Source",
    description: "This project is open source and you can contribute to it.",
    icon: FaShareAlt,
  },
  {
    name: "Free to use",
    description: "This project is free to use and you don't have to pay anything.",
    icon: FaMoneyBillAlt,
  },
];

function HeroSection() {
  return (
    
    <div className='mb-16 hero'>
      <div className='flex flex-col items-center'>
        <h1 className='text-7xl mt-5'>Nayak2.0</h1>
        <p className='text-1xl mt-2 mb-5'>Connecting Victims, Amplifying Solutions</p>
      </div>
      <div className='flex justify-center mt-5'>
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
      </div>
      <div className="mx-auto mt-6 max-w-2xl sm:mt-12 lg:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 border-2 border-gray-300 rounded-md">
                <dt className="text-base  font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

    </div>
  )
}

export default HeroSection