import styled from 'styled-components';
import coal from '../assets/sp-flags/coal.png';
import gaen from '../assets/sp-flags/gaen.png';
import isa from '../assets/sp-flags/isa.png';
import ish from '../assets/sp-flags/ish.png';
import see from '../assets/sp-flags/see.png';
import thresh from '../assets/sp-flags/thresh.png';

/* Super power flag wrappers */
export const IntersystemFlag = styled.img.attrs({
    alt: "The Intersystem Alliance's flag",
    src: `${isa}`
})`
    height: 300px;
    width: 540px;
    margin: 0 16px 16px 0;
`;

export const CoalitionFlag = styled.img.attrs({
    alt: "The Coalition's flag",
    src: `${coal}`
})`
    height: 300px;
    width: 540px;
    margin: 0 16px 16px;
`;

export const ThresholdFlag = styled.img.attrs({
    alt: "The Threshold's flag",
    src: `${thresh}`
})`
    height: 300px;
    width: 540px;
    margin: 0 16px 16px 0;
`;

export const EmpyreanFlag = styled.img.attrs({
    alt: "The Holy Dominion of the Empyrean See's flag",
    src: `${see}`
})`
    height: 300px;
    width: 540px;
    margin: 0 16px 16px;
`;

export const IsharaFlag = styled.img.attrs({
    alt: "The Kingdom of Ishara's flag",
    src: `${ish}`
})`
    height: 300px;
    width: 540px;
    margin: 0 16px 16px 0;
`;

export const GaennanFlag = styled.img.attrs({
    alt: "The Empire of Gaennan's flag",
    src: `${gaen}`
})`
    height: 300px;
    width: 540px;
    margin: 0 16px 16px;
`;

/* Super power info wrappers */
export const WelcomeHome = styled.div`
    height: 99.8%;
    width: 99.8%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SpDivLeft = styled.div`
    width: 94%;
    margin: 10px 2.8%;
    display: flex;
    flex-flow: row wrap;
`;

export const SpDivRight = styled.div`
    width: 96%;
    margin: 10px 2.8%;
    display: flex;
    flex-flow: row-reverse wrap;
`;

export const Informational = styled.div`
    width: 640px;
    border-top: 1px solid #f76a29;
    // border: 1px solid red;
`;

export const SpH1 = styled.h1`
    margin: 20px 0;
    display: flex;
    flex-flow: row wrap;
    font-size: 40px;
    font-weight: 100;
    letter-spacing: 2px;
`;

export const SpH2Right = styled.h2`
    margin: 0px;
    display: flex;
    flex-flow: row wrap;
    font-size: 31px;
    font-weight: 100;
    letter-spacing: 2px;
`;

export const SpH2Left = styled.h2`
    margin: 0px;
    display: flex;
    flex-flow: row-reverse wrap;
    font-size: 31px;
    font-weight: 100;
    letter-spacing: 2px;
`;

export const SpSubtextR = styled.p`
    width: 99.8%;
    height: auto;
    display: flex;
    font-size: 11px;
`;

export const SpSubtextL = styled.p`
    width: 99.8%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    font-size: 11px;
`;

export const SpText = styled.p`
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
`;