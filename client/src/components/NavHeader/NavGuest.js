import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper, linkDec, linkDecGetStart } from '../../styles/BannerStyling';

export default class NavContainer extends React.Component {
    render() {
        return (
            <NavWrapper>
                <Link to='/' style={linkDec}>Home</Link>
                <Link to='/welcome-to-uncharted-suns' style={linkDec}>Universe</Link>
                <Link to='/getting-started' style={linkDecGetStart}>Getting Started</Link>
                <Link to='/citizens' style={linkDec}>Citizens</Link>
                <Link to='/stories' style={linkDec}>Stories</Link>
                <Link to='/faq' style={linkDec}>FAQ</Link>
                <Link to='/news' style={linkDec}>News</Link>
            </NavWrapper>
        );
    };
};