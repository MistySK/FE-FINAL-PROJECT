import React from 'react';
import Entry from './Entry';
import './journal-entry-form.css'

export default class JournalEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dateValue: '', 
            moveValue: '',
            eatValue:  '',
            hydrateValue:  '',
            nourishValue: '' ,
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleMoveChange = this.handleMoveChange.bind(this);
        this.handleEatChange = this.handleEatChange.bind(this);
        this.handleHydrateChange = this.handleHydrateChange.bind(this);
        this.handleNourishChange = this.handleNourishChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDateChange(e) {
        this.setState({dateValue : e.target.value});
    }

    handleMoveChange(e) {
        this.setState({moveValue : e.target.value});
    }

    handleEatChange(e) {
        this.setState({eatValue : e.target.value});
    }

    handleHydrateChange(e) {
        this.setState({hydrateValue : e.target.value});
    }

    handleNourishChange(e) {
        this.setState({nourishValue : e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        const entry = {
            date: this.state.dateValue, 
            move: this.state.moveValue,
            eat: this.state.eatValue, 
            hydrate: this.state.hydrateValue,
            nourish: this.state.nourishValue,
        };
        this.props.addNewEntry(entry);
        this.setState({dateValue: '', moveValue: '', eatValue: '', hydrateValue: '', nourishValue: ''});    
    }
    
render() {
    return (
        <div className='entry-form'>
            <label>Date</label>
            <div>
            <input
                type="date"
                id="entryDate"  // Add an id attribute
                placeholder="Date"
                onChange={this.handleDateChange}
                value={this.state.dateValue}
            />
            </div>
            <label>Move Your Body</label>
            <div>
            <input
                type="text"
                id="entryMove"  // Add an id attribute
                placeholder="Get up and move!"
                onChange={this.handleMoveChange}
                value={this.state.moveValue}
            />
            </div>
            <label>Nourish Your Body</label>
            <div>
            <input
                type="text"
                id="entryEat"  // Add an id attribute
                placeholder="What did you eat today?"
                onChange={this.handleEatChange}
                value={this.state.eatValue}
            />
            </div>
            <label>Hydrate Your Body</label>
            <div>
            <input
                type="number"
                id="entryHydrate"  // Add an id attribute
                placeholder="How many ounces of water have you drank today?"
                onChange={this.handleHydrateChange}
                value={this.state.hydrateValue}
            />
            </div>
            <label>Self Care</label>
            <div>
            <input
                type="text"
                id="entryNourish"  // Add an id attribute
                placeholder="How have you nourished your mind & soul?"
                onChange={this.handleNourishChange}
                value={this.state.nourishValue}
            />
            </div>
            <button onClick={this.handleClick}>Add Entry</button>
            </div>
        );
        }
    }