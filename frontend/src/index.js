import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import './index.css';
import App from './App';
import Help from './pages/Help/Help'; 
import Helpline from './pages/Helpline/Helpline'; 
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Routes> 
        <Route exact path="/" element={<App />} /> 
        <Route path="/help" element={<Help />} /> 
        <Route path="/helpline" element={<Helpline />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
