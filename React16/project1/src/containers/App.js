import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from'./ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 'aa1', name: 'Patrick', age: 45},
            {id: 'bb2', name: 'Dawn', age: 47},
            {id: 'cc3', name: 'Finn', age: 4},
            {id: 'dd4', name: 'Sierra', age: 14}
        ],
        otherState: 'some other value',
        showPersons: false
    };



    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons =[...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

  render() {
      let persons = null;

      if (this.state.showPersons) {
          persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>
          }


    return (
      <div className={classes.App}>
          <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
