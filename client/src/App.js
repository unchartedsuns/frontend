import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { GettingStarted, UniverseGuest } from './views';
import { BackDrop, Stage } from './styles/GenStyling';

class App extends Component {
  render() {
    return (
      <BackDrop>
        <Stage>
          <Route path='/welcome-to-uncharted-suns' component={UniverseGuest} />
          <Route path='/getting-started' component={GettingStarted} />
        </Stage>
      </BackDrop>
    );
  };
};

export default App;
