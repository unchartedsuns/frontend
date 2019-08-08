import React from 'react';
import {
    CoalitionFlag,
    GaennanFlag,
    IntersystemFlag,
    IsharaFlag,
    EmpyreanFlag,
    ThresholdFlag,
    WelcomeHome,
    Informational,
    SpDivLeft, SpDivRight, SpH1, SpH2Right, SpH2Left, SpSubtextR, SpSubtextL, SpText,
} from '../styles/WelcomeStyling';

export default class UniverseGuest extends React.Component {
  render() {
    return (
      <WelcomeHome>
        <SpH1>International Superpowers</SpH1>
        <SpDivLeft>
          <IntersystemFlag />
          <Informational>
            <SpH2Right>Intersystem Alliance</SpH2Right>
            <SpSubtextR>
              "Generigood is Generic."
            </SpSubtextR>
            <SpText>
              The oldest and third-largest star-nation in the human sphere.
            </SpText>
          </Informational>
        </SpDivLeft>
        <SpDivRight>
          <CoalitionFlag />
          <Informational>
          <SpH2Left>People's Coalition</SpH2Left>
            <SpSubtextL>
              "Gerpano Soviets in spaaaaace."
            </SpSubtextL>
            <SpText>
              The largest star-nation, the Coalition is a nationalist socialist-democracy juggernaut
              growing in both power and ambition.
            </SpText>
          </Informational>
        </SpDivRight>
        <SpDivLeft>
          <ThresholdFlag />
          <Informational>
            <SpH2Right>Meritocracy of the Threshold</SpH2Right>
            <SpSubtextR>
              "Your actions are all that matter. And the bleepboop."
            </SpSubtextR>
            <SpText>
              A meritocratic government with close ties to the Intersystem Alliance, the Threshold is
              a nation unto its own. Prising scientific advancement and public service, Thresholders
              provide a strong Galactic-Western presence to their interstellar neighbors: the Gaennid
              Empire to their Galactic-North, and the People's Coalition to their Galactic-East.
            </SpText>
          </Informational>
        </SpDivLeft>
        <SpDivRight>
          <EmpyreanFlag />
          <Informational>
            <SpH2Left>Holy Dominion of the Empyrean See</SpH2Left>
            <SpSubtextL>
              "The Space Catholics will crusade again."
            </SpSubtextL>
            <SpText>
              The second-largest star-nation and dogmatic dictatorship of the Holy Empyrean Church.
            </SpText>
          </Informational>
        </SpDivRight>
        <SpDivLeft>
          <IsharaFlag />
          <Informational>
            <SpH2Right>Kingdom of Ishara</SpH2Right>
            <SpSubtextR>
              "Check out our fancy boats."
            </SpSubtextR>
            <SpText>
              The nomadic family-centric tribes at the heart of the galactic north.
            </SpText>
          </Informational>
        </SpDivLeft>
        <SpDivRight>
          <GaennanFlag />
          <Informational>
            <SpH2Left>Empire of Gaennan</SpH2Left>
            <SpSubtextL>
              Gaennan: im gonna nuke the planet<br/>
              Everyone: dont nuke the planet<br/>
              Gaennan: toO LaTE
            </SpSubtextL>
            <SpText>
              An honor-based monarchy with a violent past.
            </SpText>
          </Informational>
        </SpDivRight>
      </WelcomeHome>
    );
  };
};