import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ComplaintCard from '../../components/Card/ComplaintCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/utils';

const CommunityWall = ({ userEmail }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cases'));
        const fetchedComplaints = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setComplaints(fetchedComplaints);
      } catch (error) {
        console.error('Error fetching complaints: ', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className='bg-[#f3f6f2]'>
      <Navbar />
      <div className='m-3'>
        <ComplaintCard complaints={complaints} userEmail={userEmail} />
      </div>
      <Footer />
    </div>
  );
}

export default CommunityWall;

