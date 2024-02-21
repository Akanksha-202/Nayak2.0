import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db,storage } from '../../firebase/utils';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const auth = getAuth();

function Complaint() {
  const [formData, setFormData] = useState({
    date: '',
    location: '',
    time: '',
    category: '',
    description: '',
    attachments: [], // Now we store file URLs instead of the FileList object
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    // Convert FileList to array
    const filesArray = Array.from(files);
    setFormData({
      ...formData,
      attachments: filesArray,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the current user's information
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const { displayName, email } = user;
  
          // Upload files to Firebase Storage
          const fileURLs = await Promise.all(formData.attachments.map(async (file) => {
            const storageRef = ref(storage, 'complaints/' + file.name);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
          }));
  
          // Add the user's username and email to the formData
          const formDataWithUser = { ...formData, username: displayName, userEmail: email, attachments: fileURLs };
  
          // Add the formData to Firestore
          const docRef = await addDoc(collection(db, 'cases'), formDataWithUser);
          console.log('Document written with ID: ', docRef.id);
  
          // Reset form fields after successful submission
          setFormData({
            date: '',
            location: '',
            time: '',
            category: '',
            title:'',
            description: '',
            attachments: [],
          });
          setSuccessMessage('Complaint submitted successfully!');
          setError('');
        } else {
          setError('No user is signed in.');
          setSuccessMessage('');
        }
      });
    } catch (error) {
      setError('Error adding document: ' + error.message);
      setSuccessMessage('');
    }
  };
  
  

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Post a Complaint</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categor</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select Category</option>
              <option value="Workplace Abuse">Workplace Violations and Abuse</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Fraud and Scam">Consumer Fraud</option>
              <option value="Eve Teasing">Eve Teasing and Harrasmants</option>

              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">Attachments</label>
            <input type="file" id="attachments" name="attachments" onChange={handleFileChange} multiple className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none" onClick={handleSubmit}>Post</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Complaint;
