// import React from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

// export default Complaint
import React, { useState } from 'react';

const Complaint = () => {
  const [formData, setFormData] = useState({
    date: '',
    location: '',
    time: '',
    category: '',
    description: '',
    attachments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      attachments: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to server)
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      date: '',
      location: '',
      time: '',
      category: '',
      description: '',
      attachments: [],
    });
  };

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Post a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category *</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Category</option>
            <option value="Fraud">Fraud</option>
            <option value="Abuse">Abuse</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">Attachments</label>
          <input type="file" id="attachments" name="attachments" onChange={handleFileChange} multiple className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none">Post</button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Complaint;
