import React from 'react';
import './Entry.css'

const Entry = ({ data, addNewEntry, deleteEntry, updateJournal }) => {
    // Destructure the entry data
    const { date, move, eat, hydrate, nourish } = data;

    const handleDelete = () => {
        // Call the deleteEntry function passed as a prop
        deleteEntry(data);
    };

    return (
        <div className='entry-container'>
            <h5 className='entry-title'>Date: {date}</h5>
            <div className='entry-details'>
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

//add a delete button
/*class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteEntry(this.props.data);
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <p>Date: {data.date}</p>
                <p>Move: {data.move}</p>
                <p>Eat: {data.eat}</p>
                <p>Hydrate: {data.hydrate}</p>
                <p>Nourish: {data.nourish}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default Entry;*/