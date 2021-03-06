import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux1 from '../hoc/Aux1';
import withClass from '../hoc/withClass';
//import ErrorBoundary from'./ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        //This way of initializing state (in constructor) is older syntax
        this.state = {
            persons: [
                {id: 'aa1', name: 'Patrick', age: 45},
                {id: 'bb2', name: 'Dawn', age: 47},
                {id: 'cc3', name: 'Finn', age: 4},
                {id: 'dd4', name: 'Sierra', age: 14}
            ],
            otherState: 'some other value',
            showPersons: false
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextState.persons === this.state.persons ||
            nextState.showPersons === this.state.showPersons;
        //return true;
    }*/

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }
    //This way of initializing state is newer; may not see on many apps
    /*state = {
        persons: [
            {id: 'aa1', name: 'Patrick', age: 45},
            {id: 'bb2', name: 'Dawn', age: 47},
            {id: 'cc3', name: 'Finn', age: 4},
            {id: 'dd4', name: 'Sierra', age: 14}
        ],
        otherState: 'some other value',
        showPersons: false
    };*/




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
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

  render() {
      console.log('[App.js] Inside render()');
      let persons = null;

      if (this.state.showPersons) {
          persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>
          }


    return (
        <Aux1>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
          <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
          {persons}
        </Aux1>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default withClass(App, classes.App);
