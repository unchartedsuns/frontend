import React from 'react';
import { Link } from 'react-router-dom';
import { FlexDirecWrap, UtilWrapper, SearchForm, SearchBar, linkDec } from '../../styles/BannerStyling';

export default class NavContainer extends React.Component {
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <FlexDirecWrap>
                <UtilWrapper>
                    <Link to='/settings' style={linkDec}>Settings</Link>
                    <Link to='/logout' style={linkDec}>Logout</Link>
                </UtilWrapper>
                <SearchForm onSubmit='/'>
                    <SearchBar
                        type='text'
                        name='searchbar'
                        placeholder='Search'
                        onChange={this.changeHandler}
                        required
                    />
                </SearchForm>
            </FlexDirecWrap>
        );
    };
};