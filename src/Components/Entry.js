import React from 'react';


const Entry = ({ data, addNewEntry, deleteEntry, updateJournal }) => {
    // Destructure the entry data
    const { date, move, eat, hydrate, nourish } = data;

    const handleDelete = () => {
        // Call the deleteEntry function passed as a prop
        deleteEntry(data);
    };

    return (
        <div>
            <h3>Date: {date}</h3>
            <p>Move: {move}</p>
            <p>Eat: {eat}</p>
            <p>Hydrate: {hydrate}</p>
            <p>Nourish: {nourish}</p>
            <button onClick={handleDelete}>Delete</button>
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