import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'crazydude'
    }

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})
    }
    render() {
    return (
      <div className="App">
          <UserInput changed={this.usernameChangedHandler}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Dogs"/>
      </div>
    );
  }
}

export default App;
