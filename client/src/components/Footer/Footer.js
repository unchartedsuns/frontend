import React from 'react';
import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 30px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    // font-family: equinoxregular;
    // text-transformation: lowercase;
    font-size: 6px;
    font-wieght: 200;
    letter-spacing: 8px;
    background-color: #101212;
    // border-top: 1px solid #f76a29;
`;

const Footer = () => (
    <Banner>
        © 2019 UNCHARTED SUNS.
    </Banner>
);

export default Footer;