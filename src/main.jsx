// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import CreateCrewmate from './pages/CreateCrewmate.jsx';
import CrewmateGallery from './pages/CrewmateGallery.jsx';
import './index.css';
import EditCrewmate from './pages/EditCrewmate.jsx';
import CrewmateInfo from './pages/CrewmateInfo.jsx'; // Import the new component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/create" element={<CreateCrewmate />} />
        <Route index={false} path="/gallery" element={<CrewmateGallery />} />
        <Route index={false} path="/edit/:id" element={<EditCrewmate />} />
        <Route index={false} path="/info/:id" element={<CrewmateInfo />} /> {/* Define the route for crewmate info */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
