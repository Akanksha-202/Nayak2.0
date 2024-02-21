import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import GooglePayButton from '@google-pay/button-react';

const Donate = () => {
  // Sample NGO data
  const ngos = [
    {
      id: 1,
      name: '1. Paws for Hope',
      location: 'United Kingdom',
      category: 'Animal Welfare',
    },
    {
      id: 2,
      name: '2. Education for All',
      location: 'India',
      category: 'Child Welfare',
    },
    {
      id: 3,
      name: '3. Empower Women Initiative',
      location: 'USA',
      category: 'Women Empowerment',
    },
    {
      id: 4,
      name: "4. Workers' Rights Alliance",
      location: 'India',
      category: 'Worker Rights',
    },
    {
      id: 5,
      name: '5. Green Earth Society',
      location: 'United Kingdom',
      category: 'Environment Protection',
    },
    {
      id: 6,
      name: '6. Hope for Children Charity',
      location: 'India',
      category: 'Child Welfare',
    },
    {
      id: 7,
      name: '7. Healthcare for All',
      location: 'India',
      category: 'Healthcare Support',
    },
    {
      id: 8,
      name: '8. Refugee Assistance Project',
      location: 'USA',
      category: 'Refugee Support',
    },
    {
      id: 9,
      name: '9. Elderly Care Foundation',
      location: 'Japan',
      category: 'Elderly Support',
    },
    {
      id: 10,
      name: '10. Clean Water Initiative',
      location: 'Bangladesh',
      category: 'Environment Protection',
    },
    {
      id: 11,
      name: '11. Youth Empowerment Network',
      location: 'Africa',
      category: 'Youth Empowerment',
    },
    {
      id: 12,
      name: '12. Humanitarian Relief Organization',
      location: 'USA',
      category: 'Humanitarian Relief',
    },
    {
      id: 13,
      name: '13. Rainforest Preservation Society',
      location: 'India',
      category: 'Environment Protection',
    },
    {
      id: 14,
      name: '14. Equality Now Foundation',
      location: 'USA',
      category: 'Human Rights',
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [ngosPerPage] = useState(6);

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
            <option value="">Human Rights</option>
            <option value="">Enviornment Protection</option>
            <option value="">Child Welfare</option>
            <option value="">Animal Welfare</option>
            <option value="">Women Empowerment</option>
            {/* Add options for categories */}
          </select>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none"
          >
            <option value="">All Locations</option>
            <option value="">India</option>
            <option value="">USA</option>
            <option value="">Africa</option>
            <option value="">United Kingdom</option>
            {/* Add options for locations */}
          </select>
        </div>

        {/* Display NGOs */}
        {currentNgos.map((ngo) => (
          <div key={ngo.id} className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex items-center">
          {/* NGO Information */}
          <div className="flex-1">
              <h1 className="text-2xl font-bold mb-4">{ngo.name}</h1>
              <p className="text-gray-600 mb-2">Location: {ngo.location}</p>
              <p className="text-gray-600 mb-2">Category: {ngo.category}</p>
      
              {/* Donation Button */}
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
      
          {/* NGO Image */}
          <img src="https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-working-on-laptops-FldkziOS26w" />
      </div>
      
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Donate;

