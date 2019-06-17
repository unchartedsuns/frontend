import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, UniverseGuest, GettingStarted } from './views';
import { HeaderContainer, Footer } from './components';
import { BackDrop, Stage } from './styles/GenStyling';

class App extends Component {
    render() {
        return (
            <BackDrop>
                <HeaderContainer />
                <Stage>
                    <Route exact path='/' component={Home} />
                    <Route path='/welcome-to-uncharted-suns' component={UniverseGuest} />
                    <Route path='/getting-started' component={GettingStarted} />
                </Stage>
                <Footer />
            </BackDrop>
        );
    }
}

export default App;
