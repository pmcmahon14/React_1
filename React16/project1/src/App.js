import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Patrick', age: 45},
            {name: 'Dawn', age: 47},
            {name: 'Finn', age: 4},
            {name: 'Sierra', age: 14}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        //console.log('was clicked');
        //DON'T DO THIS: this.state.persons[0].name = 'Patrick';
        this.setState({
            persons: [
                {name: newName, age: 45},
                {name: 'Dawn', age: 47},
                {name: 'Mr. Finn', age: 4},
                {name: 'Sierra', age: 14}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Patrick', age: 45},
                {name: event.target.value, age: 47},
                {name: 'Finn', age: 4},
                {name: 'Sierra', age: 14}
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map(person => {
                      return <Person
                          name={person.name}
                          age={person.age} />
                  })}
                  <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}>My hobbies: racing</Person>
                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      changed={this.nameChangedHandler}>My hobbies: gardening</Person>
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}
                      click={this.switchNameHandler}>My hobbies: making Finn noises</Person>
                  <Person
                      name={this.state.persons[3].name}
                      age={this.state.persons[3].age}>My hobbies: looking cute</Person>
              </div>
          );
      }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
