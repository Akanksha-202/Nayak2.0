import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const ReachNgo = () => {
  // Sample data for NGOs
  const ngos = [
    {
      id: 1,
      name: 'Water for All',
      category: 'Healthcare',
      location: 'India',
      imageUrl: 'https://www.pexels.com/photo/teach-dice-ornament-on-table-301926/',
      websiteUrl: 'https://www.example.com/ngo1',
    },
    {
      id: 2,
      name: 'Educate the Future',
      category: 'Education',
      location: 'India',
      imageUrl: 'https://via.placeholder.com/150',
      websiteUrl: 'https://www.example.com/ngo2',
    },
    {
        id: 3,
        name: 'Girl Child Education',
        category: 'Education',
        location: 'USA',
        imageUrl: 'https://via.placeholder.com/150',
        websiteUrl: 'https://www.example.com/ngo2',
      },
      {
        id: 4,
        name: 'AIDS Awareness',
        category: 'Healthcare',
        location: 'USA',
        imageUrl: 'https://via.placeholder.com/150',
        websiteUrl: 'https://www.example.com/ngo2',
      },
      {
        id: 5,
        name: 'Animal Shelter',
        category: 'Animal Welfare',
        location: 'United Kingdom',
        imageUrl: 'https://via.placeholder.com/150',
        websiteUrl: 'https://www.example.com/ngo2',
      },{
        id: 6,
        name: 'Worker Rights',
        category: 'Awareness',
        location: 'India',
        imageUrl: 'https://via.placeholder.com/150',
        websiteUrl: 'https://www.example.com/ngo2',
      },{
        id: 7,
        name: 'Grant for All',
        category: 'Education',
        location: 'USA',
        imageUrl: 'https://via.placeholder.com/150',
        websiteUrl: 'https://www.example.com/ngo2',
      },{
        id: 8,
        name: 'Rescue Rehab',
        category: 'Animal Welfare',
        location: 'India',
        imageUrl: 'https://via.placeholder.com/150',
        websiteUrl: 'https://www.example.com/ngo2',
      },
  ];

  // State for filters
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Function to handle category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Function to handle location filter change
  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  // Filtered NGOs based on selected category and location
  const filteredNGOs = ngos.filter(ngo => {
    if (categoryFilter && ngo.category !== categoryFilter) {
      return false;
    }
    if (locationFilter && ngo.location !== locationFilter) {
      return false;
    }
    return true;
  });

  return (
    <>
    <Navbar />
    <div>
      
      {/* Filter Section */}
      <div className="flex justify-between p-4">
        {/* Categories Filter */}
        <div className="w-1/3">
          <label htmlFor="categories" className="block text-gray-700 font-bold mb-2">Categories:</label>
          <select id="categories" className="block w-full bg-white border border-gray-300 rounded p-2" onChange={handleCategoryChange} value={categoryFilter}>
            <option value="">All Categories</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Animal Welfare">Animal Welfare</option>
            <option value="Awareness">Awareness</option>
            {/* Add more category options here */}
          </select>
        </div>

        {/* Location Filter */}
        <div className="w-1/3">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
          <select id="location" className="block w-full bg-white border border-gray-300 rounded p-2" onChange={handleLocationChange} value={locationFilter}>
            <option value="">All Locations</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="United Kingdom">UK</option>
            {/* Add more location options here */}
          </select>
        </div>
      </div>

      {/* NGO List */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {filteredNGOs.map(ngo => (
          <div key={ngo.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={ngo.imageUrl} alt={ngo.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{ngo.name}</h2>
              <p className="text-gray-600 mb-2">{ngo.category}</p>
              <p className="text-gray-600 mb-4">{ngo.location}</p>
              <a href={ngo.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block">Reach</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ReachNgo;

