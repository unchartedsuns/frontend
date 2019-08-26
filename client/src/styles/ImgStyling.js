import styled from 'styled-components';
import solologo from '../assets/logos/us-logo-03.png';
import eab from '../assets/eab.png';
import galaxy from '../assets/purplegalaxy.jpg'
import galaxybar from '../assets/purplegalaxy-bar.jpg'

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

/* Use this to taunt Ryon or for practical jokes or something */
export const Ryon = styled.img.attrs({
  alt: "You're late, Ryon.",
  src: `${eab}`
})`
  height: auto;
  width: auto;
  margin-bottom: 30px;
  border-radius: 100%;
`;

/* Spiral galaxy that stood at the top of Getting Started page */
export const SpiralHeader = styled.img.attrs({
	alt: "A purple-colored spiral galaxy",
	src: `${galaxy}`
})`
	height: auto;
	width: 100vw;
	margin-bottom: 1em;
	opacity: 1;
	// opacity: 0.5;
	// border-bottom: 1px solid #f76a29;
`;

export const SpiralBar = styled.img.attrs({
	alt: "A purple-colored spiral galaxy",
	src: `${galaxybar}`
})`
	height: auto;
	width: 100vw;
	margin-bottom: 1em;
	// opacity: 0.5;
	// border-bottom: 1px solid #f76a29;
`;