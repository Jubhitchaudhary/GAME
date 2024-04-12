import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import './CrewmateInfo.css';

const CrewmateInfo = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      try {
        console.log("Fetching crewmate with ID:", id);
        const { data, error } = await supabase
          .from('Crewmate')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }

        console.log("Fetched crewmate data:", data);
        setCrewmate(data);
      } catch (error) {
        console.error('Error fetching crewmate:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCrewmate();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!crewmate) {
    return <div>No crewmate found!</div>;
  }

  return (
    <div className="crewmate-info">
      <div className="page-summary">
        <p><strong>This page displays information about a crewmate, including their name and color.</strong></p>
      </div>
      <h2>Crewmate Info</h2>
      <p><strong>Name:</strong> {crewmate.name}</p>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <button onClick={() => window.location.href = '/'}>Go to Home Page</button> {/* Button to go to the home page */}
    </div>
  );
};

export default CrewmateInfo;
