import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './views';
import { BackDrop, Stage } from './styles/GenStyling';

class App extends Component {
  render() {
    return (
      <BackDrop>
        <Stage>
          <Route exact path='/' component={Home} />
        </Stage>
      </BackDrop>
    );
  };
};

export default App;
