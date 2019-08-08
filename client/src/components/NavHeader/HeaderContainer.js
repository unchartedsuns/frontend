import React from 'react';
import NavGuest from './NavGuest';
import NavContainer from './NavContainer';
import UtilityGuest from './UtilityGuest';
import UtilityContainer from './UtilityContainer';
import { Banner, LeftDiv, RightDiv, StatTitle } from '../../styles/BannerStyling';

class HeaderContainer extends React.Component {
    state = {
        activeBanner: 'loggedOut'
    }

    displayOut = () => {
        this.setState({ activeBanner: 'loggedOut' });
    };

    displayIn = () => {
        this.setState({ activeBanner: 'loggedIn' });
    }

    render() {
        return (
            <Banner>
                {this.state.activeBanner === 'loggedOut' ? (
                    <>
                        <LeftDiv>
                            <StatTitle>
                                Uncharted Suns
                            </StatTitle>
                            <NavGuest />
                        </LeftDiv>
                        <RightDiv>
                            <UtilityGuest
                                displayIn={this.displayIn}
                            />
                        </RightDiv>
                    </>
                ) : (
                    <>
                        <LeftDiv>
                            <StatTitle>
                                Uncharted Suns
                            </StatTitle>
                            <NavContainer />
                        </LeftDiv>
                        <RightDiv>
                            <UtilityContainer
                                displayOut={this.displayOut}
                            />
                        </RightDiv>
                    </>
                )}
            </Banner>
        );
    }
};

export default HeaderContainer