import React, { useState, useEffect } from 'react';
import './EditCrewmate.css';
import { supabase } from '../client';
import { Link, useParams } from 'react-router-dom';

const EditCrewmate = () => {
    const { id } = useParams();
    const [char, setChar] = useState({ id: null, name: "", color: "", super_power: "" });

    useEffect(() => {
        if (!id) return; // Check if id is undefined or null
        console.log("ID from URL params:", id); // Log the id value
        async function fetchCrewmate() {
            // Fetch the crewmate information from the database
            const { data, error } = await supabase
                .from('Crewmate')
                .select('*')
                .eq('id', id)
                .single();
    
            if (error) {
                console.error('Error fetching crewmate:', error.message);
                return;
            }
    
            // Update the local state with the fetched crewmate information
            setChar(data);
        }
    
        fetchCrewmate();
    }, [id]);
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setChar(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();
        try {
            await supabase
                .from('Crewmate')
                .update({ name: char.name, color: char.color, })
                .eq('id', id);
            
            alert('Crewmate updated successfully!');
            // Redirect to the homepage or wherever appropriate
            window.location = "/";
        } catch (error) {
            console.error('Error updating crewmate:', error.message);
            alert('Failed to update crewmate. Please try again later.');
        }
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();
        try {
            await supabase
                .from('Crewmate')
                .delete()
                .eq('id', id);

            alert('Crewmate deleted successfully!');
            // Redirect to the homepage or wherever appropriate
            window.location = "/";
        } catch (error) {
            console.error('Error deleting crewmate:', error.message);
            alert('Failed to delete crewmate. Please try again later.');
        }
    }

    return (
        <div className='EditCrewmate'>
            <div className="page-summary">
                <p>Edit your crewmate's information.</p>
            </div>
            <Link to="/"><h1>Among Us</h1></Link>
            <h3>Edit your crewmate!</h3>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={char.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="color">Color</label><br />
                <input type="radio" id="red" name="color" value="red" checked={char.color === "red"} onChange={handleChange} />
                <label htmlFor="red">Red</label><br />

                <input type="radio" id="yellow" name="color" value="yellow" checked={char.color === "yellow"} onChange={handleChange} />
                <label htmlFor="yellow">Yellow</label><br />

                <input type="radio" id="green" name="color" value="green" checked={char.color === "green"} onChange={handleChange} />
                <label htmlFor="green">Green</label><br />

                <input type="radio" id="black" name="color" value="black" checked={char.color === "black"} onChange={handleChange} />
                <label htmlFor="black">Black</label><br />

                <input type="radio" id="white" name="color" value="white" checked={char.color === "white"} onChange={handleChange} />
                <label htmlFor="white">White</label><br />
                <br />
                <button onClick={updateCrewmate}>Submit</button>
                <button onClick={deleteCrewmate}>Delete Crewmate!</button>
                <Link to="/"><button>Go to Home Page</button></Link> {/* Button to go to the home page */}
            </form>
        </div>
    );
}

export default EditCrewmate;
