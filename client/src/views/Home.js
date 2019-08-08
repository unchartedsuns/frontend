import React from 'react';
import { CenterPiece } from '../styles/GenStyling';
import { BigBoi, BigBoiWrapper } from '../styles/ImgStyling';
// import { Ryon } from '../styles/ImgStyling';

export default class Home extends React.Component {
  render() {
    return (
      <CenterPiece>
        <BigBoiWrapper>
          <BigBoi />
          </BigBoiWrapper>
          <h6>build. your. story.</h6>
          <h1>uncharted suns</h1>

          {/* <h6>build. your. ryon.</h6>
          <h1>i can shot website, ryon</h1> */}
          </CenterPiece>
      );
  };
};