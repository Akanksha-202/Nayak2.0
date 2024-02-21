// Mycomplaints.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../firebase/utils';
import ComplaintCard from '../../components/Card/ComplaintCard';

const Mycomplaints = ({ loggedInUserEmail }) => {
  const [userComplaints, setUserComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserComplaints = async () => {
      try {
        if (!loggedInUserEmail) {
          throw new Error('No logged-in user email');
        }

        const q = query(collection(db, 'cases'), where('userEmail', '==', loggedInUserEmail));
        const querySnapshot = await getDocs(q);

        const fetchedUserComplaints = [];
        querySnapshot.forEach((doc) => {
          fetchedUserComplaints.push({ id: doc.id, ...doc.data() });
        });

        setUserComplaints(fetchedUserComplaints);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user complaints: ' + error.message);
        setLoading(false);
      }
    };

    fetchUserComplaints();
  }, [loggedInUserEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">My Complaints</h3>
      {userComplaints.length > 0 ? (
        <ComplaintCard complaints={userComplaints} />
      ) : (
        <p>No complaints found.</p>
      )}
    </div>
  );
};

export default Mycomplaints;
