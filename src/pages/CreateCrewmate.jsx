import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateCrewmate.css';
import { supabase } from '../client';

const CreateCrewmate = () => {
  const [char, setChar] = useState({ name: "", color: "", weapon: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createChar = async (event) => {
    event.preventDefault();
    try {
      await supabase.from('Crewmate').insert({ name: char.name, color: char.color, });
      alert('Crewmate created successfully!');
      // Redirect to homepage after creating crewmate
      window.location.href = '/';
    } catch (error) {
      console.error('Error creating crewmate:', error.message);
      alert('Failed to create crewmate. Please try again later.');
    }
  };

  return (
    <div className='create-crewmate-container'>
      <div className="page-summary">
        <p>This page allows you to create a new crewmate by providing a name and Color of your Character!</p>
      </div>
     
        <h1>Create New Crewmate</h1>
    
      <div className="photo-container">
        <img src='src/images/2.jpeg' alt='Crewmates' className='app-image' />
      </div>
      <form onSubmit={createChar}>
        <div className="card">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" onChange={handleChange} required /><br />
        </div>
        <div className="card">
          <label htmlFor="color">Color:</label><br />

          <input type="radio" id="yellow" name="color" value="yellow" onChange={handleChange} />
          <label htmlFor="yellow">Yellow</label><br />
          <input type="radio" id="green" name="color" value="green" onChange={handleChange} />
          <label htmlFor="green">Green</label><br />
          <input type="radio" id="black" name="color" value="black" onChange={handleChange} />
          <label htmlFor="black">Black</label><br />
          <input type="radio" id="white" name="color" value="white" onChange={handleChange} />
          <label htmlFor="white">White</label><br />
        </div>
        <button type="submit">Submit</button>
        <Link to="/"><button>Go to Home Page</button></Link> {/* Button to go to the home page */}
      </form>
    </div>
  );
};

export default CreateCrewmate;
