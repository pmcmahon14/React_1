import React, { Component } from 'react';
//import logo from './logo.svg';
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
        otherState: 'some other value'
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button onClick={this.switchNameHandler.bind(this, 'Pat')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}>My hobbies: racing</Person>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>My hobbies: gardening</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
          click={this.switchNameHandler}>My hobbies: making Finn noises</Person>
          <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age}>My hobbies: looking cute</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
