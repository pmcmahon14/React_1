import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return (/*<ErrorBoundary key={person.id}>*/
                //div not needed because this is a list
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}/>)
            /*</ErrorBoundary>*/

        });
    }
}


export default Persons;