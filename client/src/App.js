import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './views';
import { HeaderContainer, Footer } from './components';
import { BackDrop, Stage } from './styles/GenStyling';

class App extends Component {
  render() {
    return (
      <BackDrop>
        <HeaderContainer />
        <Stage>
          <Route exact path='/' component={Home} />
        </Stage>
        <Footer />
      </BackDrop>
    );
  };
};

export default App;
