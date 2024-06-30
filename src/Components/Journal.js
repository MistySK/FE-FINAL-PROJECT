import React from 'react';
import JournalEntryForm from './journal-entry-form';
import Entry from './Entry';
import './journal-entry-form.css'
import journalImage from './Angel-Wings.jpg'; // Import the image
import './Entry.css';


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
      const entries = this.state.entries.reverse().map((entry, index)  => (
        <Entry
        key={index}
        data={entry}
        addNewEntry={this.addNewEntry}
        deleteEntry={this.deleteEntry} 
        />
        ));

        return (
          <div className="container">
            <div className="row">
            <div className="col-md-12 text-center mt-4 mb-2">
              <h2>A Place to Track Your Day</h2>
              <p>This is a judgment-free zone. That means if you have a great day, 
                then celebrate! If you have a bad day, give yourself grace and know you did your
                best. Start tomorrow fresh!</p>
           </div>
              <div className="col-md-6 col-sm-12">
                <div className="journal-form-container equal-height">
                  <JournalEntryForm addNewEntry={this.addNewEntry} />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
              <div className="journal-image-container equal-height">
                  <img className="my-3 img-fluid" src={journalImage} alt="doors with painted angel wings" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {entries}
              </div>
            </div>
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
console.log("Entry data?:", entry);

this.deleteAJournal(entry)
.then(()=>{
   let updatedEntries = this.state.entries.filter(function(item){
       return item.id !== entry.id; 
       //returns true if we want to keep the item (it's not the one we're deleting)
       })
   this.setState({
    entries : updatedEntries
})
});


    //   const index = this.state.entries.indexOf(entry);
    //   const updatedEntries = [...this.state.entries]; // make a copy of the array
    //     updatedEntries.splice(index, 1); //remove the entry
    //   this.updateJournal(entry).then(() => {
    //       this.setState({
    //         entries: updatedEntries // Update state with the modified entries array
    //     });
    // });
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
      console.log("Journey data?:", journal);
      return fetch(`${JOURNAL_ENDPOINT}/${journal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(journal)
      });
  }

  deleteAJournal(journal) {
    console.log("Delete Journey data?:", journal);
    return fetch(`${JOURNAL_ENDPOINT}/${journal.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
}


