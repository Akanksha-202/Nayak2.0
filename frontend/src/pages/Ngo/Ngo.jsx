import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


const Ngo = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl grid grid-cols-2 gap-8">
        {/* Option 1: Current Programs */}
        <div className="bg-blue-400 rounded-lg p-6 cursor-pointer hover:bg-blue-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Current Programs</h2>
          <p className="text-lg">Explore our ongoing projects and initiatives.</p>
        </div>
        
        {/* Option 2: Donation in NGO */}
        <div className="bg-green-400 rounded-lg p-6 cursor-pointer hover:bg-green-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Donation in NGO</h2>
          <p className="text-lg">Contribute to our cause and make a difference.</p>
        </div>

        {/* Option 3: Reach NGO */}
        <div className="bg-yellow-400 rounded-lg p-6 cursor-pointer hover:bg-yellow-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Reach NGO</h2>
          <p className="text-lg">Contact us or find out how you can get involved.</p>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Ngo;
