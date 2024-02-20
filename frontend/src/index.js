import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import './index.css';
import App from './App';
import Help from './pages/Help/Help'; 
import Helpline from './pages/Helpline/Helpline'; 
import Ngo from './pages/Ngo/Ngo'
import reportWebVitals from './reportWebVitals';
import ReachNgo from './pages/Ngo/ReachNgo';
import Donate from './pages/Ngo/Donate';
import { CommunityWall } from './pages/CommunityWall/CommunityWall';
import Complaint from './pages/Complaint/Complaint';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Routes> 
        <Route exact path="/" element={<App />} /> 
        <Route path="/help" element={<Help />} /> 
        <Route path="/helpline" element={<Helpline />} /> 
        <Route path="/Ngo" element={<Ngo/>} /> 
        <Route path="/Ngo/reachNgo" element={<ReachNgo/>} /> 
        <Route path="/Ngo/donate" element={<Donate />} /> 
        <Route path='/community-wall' element={<CommunityWall />} />
        <Route path='/complaint' element={<Complaint />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
