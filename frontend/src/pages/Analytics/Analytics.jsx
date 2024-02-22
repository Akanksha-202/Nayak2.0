// import React, { useState, useEffect } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase/utils'; // Import the db instance
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; // Using Recharts library for charts

// const Analytics = () => {
//   const [location, setLocation] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [data, setData] = useState([]);

//   const years = [];
//   const currentYear = new Date().getFullYear();
//   for (let year = currentYear; year >= currentYear - 10; year--) {
//     years.push(year);
//   }

//   const fetchData = async () => {
//     try {
//       // Create a reference to the 'cases' collection in Firestore
//       const casesRef = collection(db, 'cases');

//       // Create a query to filter documents based on location and year
//       const q = query(
//         casesRef,
//         where('location', '==', location),
//         where('year', '==', selectedYear)
//         // Add more filters as needed
//       );

//       // Execute the query and get the documents
//       const querySnapshot = await getDocs(q);

//       // Process the documents to generate the data for the chart
//       const processedData = [];
//       querySnapshot.forEach((doc) => {
//         const caseData = doc.data();
//         // Example: Assuming each document has a 'timestamp' field
//         processedData.push({ time: caseData.timestamp, total: caseData.total });
//       });

//       // Set the processed data to state
//       setData(processedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Analytics</h2>
//       <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
//         <label>
//           Location:
//           <input type="text" value={location} onChange={handleLocationChange} />
//         </label>
//         <label>
//           Year:
//           <select value={selectedYear} onChange={handleYearChange}>
//             <option value="">Select Year</option>
//             {years.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button type="submit">Fetch Data</button>
//       </form>
//       <div>
//         <h3>Crime Rate Over Time</h3>
//         <LineChart width={600} height={300} data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="total" stroke="#8884d8" />
//         </LineChart>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/utils'; // Import the db instance
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; // Using Recharts library for charts

const Analytics = () => {
  const [location, setLocation] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [data, setData] = useState([]);

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 10; year--) {
    years.push(year);
  }

  const fetchData = async () => {
    try {
      // Create a reference to the 'cases' collection in Firestore
      const casesRef = collection(db, 'cases');

      // Create a query to filter documents based on location and year
      let q = query(casesRef, where('location', '==', location));
      if (selectedYear) {
        // Construct a date range for the selected year
        const startOfYear = new Date(selectedYear, 0, 1);
        const endOfYear = new Date(selectedYear, 11, 31, 23, 59, 59);
        // Add date range filter to the query
        q = query(q, where('timestamp', '>=', startOfYear), where('timestamp', '<=', endOfYear));
      }

      // Execute the query and get the documents
      const querySnapshot = await getDocs(q);

      // Process the documents to generate the data for the chart
      const processedData = [];
      querySnapshot.forEach((doc) => {
        const caseData = doc.data();
        // Example: Assuming each document has a 'timestamp' field
        // Extract the year from the timestamp
        const year = caseData.timestamp.toDate().getFullYear();
        processedData.push({ year, total: caseData.total });
      });

      // Set the processed data to state
      setData(processedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <h2>Analytics</h2>
      <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <label>
          Year:
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Fetch Data</button>
      </form>
      <div>
        <h3>Crime Rate Over Time</h3>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Analytics;

