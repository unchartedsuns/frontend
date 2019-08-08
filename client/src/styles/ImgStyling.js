import styled from 'styled-components';
import solologo from '../assets/logos/us-logo-03.png';
import eab from '../assets/eab.png'

/* This is the big main logo & its wrapper */
export const BigBoi = styled.img.attrs({
    alt: "The Uncharted Sun's logo",
    src: `${solologo}`
})`
    height: 99.8%;
    width: 99.8%;
`;

export const BigBoiWrapper = styled.div`
    height: 360px;
    width: 360px;
    margin-top: 60px;
`;

/* Use this to taunt Ryon or for practical jokes or soemthing */
export const Ryon = styled.img.attrs({
    alt: "You're late, Ryon.",
    src: `${eab}`
})`
    height: auto;
    width: auto;
    margin-bottom: 30px;
    border-radius: 100%;
`;