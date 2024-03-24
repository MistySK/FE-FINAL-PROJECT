import React from 'react';
import JournalEntryForm from './journal-entry-form';
import Entry from './Entry';
import './journal-entry-form.css'

//mock API endpoint

/*function Journal() {
    return (
        <div>
        <h2> Daily Journal </h2>
          <div>
            <h2> H2 </h2>
            <p>Copy to explain page</p>
          </div>
        </div>
      );
}*/

const JOURNAL_ENDPOINT = 'https://65fef105b2a18489b386c78a.mockapi.io/api/journal/entries';


export default class Journal extends React.Component {
    constructor(props) {
      super(props);
      this.state = { entries: [] };
      this.addNewEntry = this.addNewEntry.bind(this);
      this.deleteEntry = this.deleteEntry.bind(this);
      this.updateJournal = this.updateJournal.bind(this);
    }
  
  
    render() {
      const entries = this.state.entries.map((entry, index)  => (
        <Entry
        key={index}
        data={entry}
        addNewEntry={this.addNewEntry}
        deleteEntry={this.deleteEntry} 
        />
        ));
  
        return (
            <div>
                <JournalEntryForm addNewEntry={this.addNewEntry} />
                {entries}
            </div>
        );
    }
  
    componentDidMount() {
      fetch(JOURNAL_ENDPOINT)
      .then(res =>  res.json())
      .then(data => {
        this.setState({
          entries: data
        });
      });
    }
  
    deleteEntry(e, entry) {
     e.preventDefault();
      const index = this.state.entries.indexOf(entry);
      const updatedEntries = [...this.state.entries]; // make a copy of the array
        updatedEntries.splice(index, 1); //remove the entry
      this.updateJournal(entry).then(() => {
          this.setState({
            entries: updatedEntries // Update state with the modified entries array
        });
    });
};

  
    addNewEntry(entry) {
      /*const updatedEntries = [...this.state.entries, entry] ;// Add new entry to  the list
        this.updateJournal(entry).then(()=>{
           this.setState({
            entries: updatedEntries // Update state with the newly added entry
        });
    });*/

    fetch(JOURNAL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add new entry');
        }
        return response.json();
    })
    .then(newEntry => {
        // Once the new entry is successfully added to the API, update the state
        this.setState(prevState => ({
            entries: [...prevState.entries, newEntry]
        }));
    })
    .catch(error => {
        console.error('Error adding new entry:', error);
    });
}

    
    updateJournal(journal) {
      return fetch(`${JOURNAL_ENDPOINT}/${journal._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(journal)
      });
  }
}


