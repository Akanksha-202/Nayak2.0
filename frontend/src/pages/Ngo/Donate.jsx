// // // 

// // import React from 'react';
// // import Navbar from '../../components/Navbar/Navbar';
// // import Footer from '../../components/Footer/Footer';

// // const Donate = () => {

// //   // Sample NGO data
// //   const ngo = {
// //     name: 'NGO Name',
// //     location: 'Location',
// //     cause: 'Cause',
// //   };

// //   // Sample donation amounts
// //   const donationAmounts = [
// //     { amount: 10, label: '$10' },
// //     { amount: 20, label: '$20' },
// //     { amount: 50, label: '$50' },
// //     { amount: 100, label: '$100' },
// //   ];

// //   // Function to handle donation click
// //   const handleDonate = (amount) => {
// //     // Redirect to Google Pay page or any payment gateway
// //     window.location.href = `https://pay.google.com/payments/u/0/home#save`;
// //   };

// //   return (
// //     <>
// //     <Navbar />
// //     <div className="container mx-auto p-4">
// //       {/* NGO Details */}
// //       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
// //         <h1 className="text-2xl font-bold mb-2">{ngo.name}</h1>
// //         <p className="text-gray-600 mb-2">Location: {ngo.location}</p>
// //         <p className="text-gray-600 mb-4">Cause: {ngo.cause}</p>

// //         {/* Donation Amounts */}
// //         <div className="grid grid-cols-2 gap-4">
// //           {donationAmounts.map((item, index) => (
// //             <button
// //               key={index}
// //               onClick={() => handleDonate(item.amount)}
// //               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
// //             >
// //               {item.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Custom Donation Amount */}
// //         <div className="flex justify-center mt-4">
// //           <input
// //             type="text"
// //             placeholder="Enter custom amount"
// //             className="border border-gray-300 rounded-lg py-2 px-4 mr-2"
// //           />
// //           <button
// //             onClick={() => handleDonate(document.getElementById('custom-amount').value)}
// //             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
// //           >
// //             Donate
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //     <Footer />
// //     </>
// //   );
// // };

// // export default Donate;
// // 
// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';

// const Donate = () => {

//   // Sample NGO data
//   const ngos = [
//     {
//       id: 1,
//       name: 'NGO Name 1',
//       location: 'Location 1',
//       cause: 'Cause 1',
//     },
//     {
//       id: 2,
//       name: 'NGO Name 2',
//       location: 'Location 2',
//       cause: 'Cause 2',
//     },
//     // Add more NGOs as needed
//   ];

//   // Sample donation amounts with different colors
//   const donationAmounts = [
//     { amount: 10, label: '$10', color: 'bg-green-500' },
//     { amount: 20, label: '$20', color: 'bg-green-500' },
//     { amount: 50, label: '$50', color: 'bg-green-500' },
//     { amount: 100, label: '$100', color: 'bg-green-500' },
//   ];

//   // Function to handle donation click
//   const handleDonate = (amount) => {
//     // Redirect to Google Pay page or any payment gateway
//     window.location.href = `https://pay.google.com/payments/u/0/home#save`;
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="container mx-auto p-4">
//       {/* Iterate over NGOs */}
//       {ngos.map((ngo) => (
//         <div key={ngo.id} className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
//           <h1 className="text-2xl font-bold mb-4">{ngo.name}</h1>
//           <p className="text-gray-600 mb-2">Location: {ngo.location}</p>
//           <p className="text-gray-600 mb-4">Cause: {ngo.cause}</p>

//           {/* Donation Amounts */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             {donationAmounts.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDonate(item.amount)}
//                 className={`text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition duration-300 ${item.color} hover:bg-opacity-75`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           {/* Custom Donation Amount */}
//           <div className="flex justify-center">
//             <input
//               type="text"
//               placeholder="Enter custom amount"
//               className="border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none"
//             />
//             <button
//               onClick={() => handleDonate(document.getElementById('custom-amount').value)}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition duration-300"
//             >
//               Donate
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default Donate;

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Donate = () => {
  // Sample NGO data
  const ngos = [
    {
      id: 1,
      name: 'NGO Name 1',
      location: 'Location 1',
      category: 'Category 1',
    },
    {
      id: 2,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 2',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 3,
        name: 'NGO Name 3',
        location: 'Location 2',
        category: 'Category 2',
      },
      {
        id: 2,
        name: 'NGO Name 3',
        location: 'Location 2',
        category: 'Category 2',
      },
    // Add more NGOs as needed
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [ngosPerPage] = useState(10);

  // Category and Location filters
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Donation count simulation
  const donationCounts = {
    1: 20, // Example donation count for NGO 1
    2: 15, // Example donation count for NGO 2
    // Add more donation counts as needed
  };

  // Function to handle donation click
  const handleDonate = (ngoId) => {
    // Redirect to Google Pay page or any payment gateway
    window.location.href = `https://pay.google.com/payments/u/0/home#save`;
  };

  // Pagination
  const indexOfLastNgo = currentPage * ngosPerPage;
  const indexOfFirstNgo = indexOfLastNgo - ngosPerPage;
  const currentNgos = ngos.slice(indexOfFirstNgo, indexOfLastNgo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      {/* Pagination */}
      <div className="mb-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentNgos.length < ngosPerPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Next
        </button>
      </div>

      {/* Category and Location Filters */}
      <div className="flex mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none"
        >
          <option value="">All Categories</option>
          {/* Add options for categories */}
        </select>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none"
        >
          <option value="">All Locations</option>
          {/* Add options for locations */}
        </select>
      </div>

      {/* Display NGOs */}
      {currentNgos.map((ngo) => (
        <div key={ngo.id} className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-4">{ngo.name}</h1>
          <p className="text-gray-600 mb-2">Location: {ngo.location}</p>
          <p className="text-gray-600 mb-2">Category: {ngo.category}</p>
          <p className="text-gray-600 mb-4">Donation Count: {donationCounts[ngo.id]}</p>

          {/* Donation Amounts */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[10, 20, 50, 100].map((amount) => (
              <button
                key={amount}
                onClick={() => handleDonate(ngo.id)}
                className="text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition duration-300 bg-blue-500 hover:bg-blue-600"
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Custom Donation Amount */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter custom amount"
              className="border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none"
            />
            <button
              onClick={() => handleDonate(ngo.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none transition duration-300"
            >
              Donate
            </button>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default Donate;

