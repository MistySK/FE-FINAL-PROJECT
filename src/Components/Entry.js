import React from 'react';
import './Entry.css'

const Entry = ({ data, addNewEntry, deleteEntry, updateJournal }) => {
    // Destructure the entry data
    const { date, move, eat, hydrate, nourish } = data;

    const handleDelete = (event) => {
        // Call the deleteEntry function passed as a prop
        deleteEntry(event,data);
    };

    return (
        <div className='entry-container mt-2'>
            <h5 className='entry-title'>Date: {date}</h5>
            <div className="entry-details mt-2 mb-2">
            <p>Move: {move}</p>
            <p>Eat: {eat}</p>
            <p>Hydrate: {hydrate}</p>
            <p>Nourish: {nourish}</p>
            </div>
            <button className='delete-button' onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Entry;

