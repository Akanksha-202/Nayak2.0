import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Ngo = () => {
  return (
    <>
    <Navbar />
    <div className="justify-center items-center text-5xl text-center mt-20 " > NGO Listing - we help bridge the gap</div>
    <div className="flex justify-center items-center px-20 mb-20 w-screen ">
      <div className="w-screen p-10 grid grid-cols-2 gap-8">
        
        {/* Option 1: Current Programs */}
        <div className="bg-blue-400 rounded-lg p-6 cursor-pointer hover:bg-blue-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Current Programs</h2>
          <p className="text-lg">Explore our ongoing projects and initiatives.</p>
        </div>
        <Link to ='/Ngo/donate'>
        {/* Option 2: Donation in NGO */}
        <div className="bg-green-400 rounded-lg p-6 cursor-pointer hover:bg-green-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Donation in NGO</h2>
          <p className="text-lg">Contribute to our cause and make a difference.</p>
        </div>
        </Link>

        {/* Option 3: Reach NGO */}
        <Link to= '/Ngo/reachNgo'>
        <div className="bg-yellow-400 rounded-lg p-6 cursor-pointer hover:bg-yellow-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Reach NGO</h2>
          <p className="text-lg">Contact us or find out how you can get involved.</p>
        </div>
        </Link>
        {/* Option 3: Petition your Cause */}
        <Link to= '/Ngo/reachNgo'>
        <div className="bg-red-400 rounded-lg p-6 cursor-pointer hover:bg-red-500 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Petition your Cause</h2>
          <p className="text-lg">Curate petitions to help bring your cause to light.</p>
        </div>
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Ngo;
