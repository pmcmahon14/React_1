import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
        return (/*<ErrorBoundary key={person.id}>*/
            //div not needed because this is a list
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => props.changed(event, person.id)} />)
        /*</ErrorBoundary>*/
    });

export default persons;