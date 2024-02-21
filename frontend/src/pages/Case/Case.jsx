import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/utils';
import { FaArrowUp, FaFilePdf } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function Case() {
    const [complaint, setComplaint] = useState(null);
    const { title } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'cases'), where('title', '==', title));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    setComplaint({ id: doc.id, ...doc.data() });
                });
            } catch (error) {
                console.error('Error fetching complaint:', error);
            }
        };
        fetchData();
    }, [title]);

    if (!complaint) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className='p-5'>
                <h2 className="text-xl font-semibold flex justify-center">{complaint.title}</h2>
                <h2 className="text-sm font-semibold flex justify-center mb-3">{complaint.category}</h2>
                <p className='font-bold'>Location: {complaint.location}</p>
                <p className='font-bold'>Time: {complaint.time}</p>
                <p className='mb-5'>{complaint.description}</p>

                <div>
                    {complaint.attachments.map((attachment, index) => (
                        <div key={index} className="mb-2">
                            {attachment.endsWith('.pdf') ? (
                                <a href={attachment} target="_blank" rel="noopener noreferrer">
                                    <FaFilePdf className="mr-2" /> PDF Attachment
                                </a>
                            ) : (
                                <img src={attachment} alt={`Attachment ${index + 1}`} className="flex space-x-4 h-1/2 w-1/2" />
                            )}
                        </div>
                    ))}
                </div>

                <ScrollToTop />
            </div>
        </>
    );
}

export default Case;
