import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/utils';
import MessageCard from '../../components/Card/MessageCard';

const ReachOut = ({ loggedInUserEmail }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(collection(db, 'reach'), where('to', '==', loggedInUserEmail));
        const querySnapshot = await getDocs(q);
        const fetchedMessages = querySnapshot.docs.map(doc => doc.data());
        setMessages(fetchedMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [loggedInUserEmail]);

  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Reach Out</h3>
      {messages.map((message, index) => (
        <MessageCard 
          key={index}
          from={message.from}
          contactEmail={message.emailContact}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default ReachOut;
