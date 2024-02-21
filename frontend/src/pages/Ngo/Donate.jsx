import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import GooglePayButton from '@google-pay/button-react';

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
      id: 3,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 4,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 5,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 6,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 7,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 8,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 9,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 10,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 11,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 12,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 13,
      name: 'NGO Name 2',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 14,
      name: 'NGO Name 3',
      location: 'Location 2',
      category: 'Category 2',
    },
    {
      id: 15,
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


  // Function to handle donation click


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

            {/* Donation Amounts */}
            <GooglePayButton

              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [{
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                }],
                merchantInfo: {
                  merchantId: 'jhaakanksha202@okaxis',
                  merchantName: 'Akanksha Jha',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '1',
                  currencyCode: 'INR',
                  countryCode: 'IN',
                },
                callbackIntents: ['PAYMENT_AUTHORIZATION'],
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
              onPaymentAuthorized={paymentData => {
                console.log('payment authorized', paymentData);
                return { transactionState: 'SUCCESS' };
              }}
              existingPaymentMethodRequired="false"
              buttonColor="black"
              buttonType="donate"
            />




          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Donate;

