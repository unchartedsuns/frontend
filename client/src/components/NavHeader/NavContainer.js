import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper, linkDec } from '../../styles/BannerStyling';

export default class NavContainer extends React.Component {
    render() {
        return (
            <NavWrapper>
                <Link to='/' style={linkDec}>Home</Link>
                <Link to='/forum' style={linkDec}>Forum</Link>
                <Link to='/universe' style={linkDec}>Universe</Link>
                <Link to='/profile/user/:id' style={linkDec}>Profie</Link>
                <Link to='/stories' style={linkDec}>Stories</Link>
                <Link to='/news' style={linkDec}>News</Link>
            </NavWrapper>
        );
    };
};