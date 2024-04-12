import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreateCrewmate from './pages/CreateCrewmate'

import './App.css'

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>Welcome to the Crewmate Creator!</h1>
      <h2>Craft your crew and embark on a cosmic journey!"</h2>
      <div className='image-container'>
        <img src='src/images/3.jpg' alt='Crewmates' className='app-image' />
      </div>
      <div className='button-container'>
        <Link to="/create" className='button-link'>
          <button className='create-button'>Create a Crewmate!</button>
        </Link>
        <Link to="/gallery" className='button-link'>
          <button className='gallery-button'>Check out Gallery!</button>
        </Link>
      </div>
      
    </div>
  );
}

export default App;
