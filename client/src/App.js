import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { GettingStarted } from './views';
import { BackDrop, Stage } from './styles/GenStyling';

class App extends Component {
  render() {
    return (
      <BackDrop>
        <Stage>
          <Route path='/getting-started' component={GettingStarted} />
        </Stage>
      </BackDrop>
    );
  };
};

export default App;
