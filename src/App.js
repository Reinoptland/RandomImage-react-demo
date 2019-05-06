import React, { Component } from 'react';
import './App.css';

// Making a new component
class RandomImage extends Component {
  render(){

    return ( 
      <div>
        <h1>Some { this.props.subject } Image</h1>
        <img src={ `https://source.unsplash.com/weekly?` + this.props.subject } alt="water"/>
        <p>Pretty eh?</p>
      </div>
    )
  }
}

// Passing props
class App extends Component {
  state = {
    subjects: ['cute authors', 'otters', 'fire'],
    newSubject: ''
  }

  updateNewSubject = (event) => {
    this.setState({
      newSubject: event.target.value
    })
  }

  addSubject = () => {
    this.setState({
      // add new subject to the array in the state
      subjects: [...this.state.subjects, this.state.newSubject],
      // clear the inputfield
      newSubject: ''
    })
  }
  
  render(){

    return (
      <div className="App">
        
        <label>Subject</label>

        {/* Update the state onChange with the input */}
        <input value={this.state.newSubject} onChange={this.updateNewSubject} />

        {/* Add a new subject to the array in the state onclick  */}
        <button onClick={this.addSubject}>Add subject</button>

        {/* Mapping over the array of subject in the state to render RandomImage components */}
        { this.state.subjects.map(subject => <RandomImage subject={subject} />)}

        {/* Rendering an array of RandomImage components */}
        { 
          [
            <RandomImage subject="painting" />, 
            <RandomImage subject="sky" />, 
          ]
        }
        
      </div>
    );
  }
}

export default App;
