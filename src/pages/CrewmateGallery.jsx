import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CrewmateGallery.css';
import { supabase } from '../client';

const CrewmateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrewmates = async () => {
      try {
        const { data, error } = await supabase.from('Crewmate').select('*');
        if (error) {
          throw error;
        }
        setCrewmates(data);
      } catch (error) {
        console.error('Error fetching crewmates:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCrewmates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="gallery-container">
      <div className="page-description">
        <h1>This gallery showcases all the crewmates you've created.</h1>
      </div>
      <h2>Welcome to the Crewmate Gallery!</h2>
      
      <button onClick={() => window.location.href = '/'}>Go to Home Page</button> {/* Button to go to the home page */}
      
      {crewmates.length === 0 ? (
        <div className="empty-message">
          <p>You haven't created any crewmates yet.</p>
          <Link to="/create"><button>Create One Now</button></Link>
        </div>
      ) : (
        <div className="crewmate-list">
          {crewmates.map((crewmate) => (
            <div key={crewmate.id} className="crewmate-card">
              <h3>{crewmate.name}</h3>
              <p>Color: {crewmate.color}</p>
              <Link to={`/info/${crewmate.id}`}><button>View Info</button></Link>
              <Link to={`/edit/${crewmate.id}`}><button>Edit</button></Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrewmateGallery;
