import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 48px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid #f76a29;
`;

export const LeftDiv = styled.div`
    height: 99.8%;
    width: 59.8%;
    display: flex;
    align-items: center;
`;

export const RightDiv = styled.div`
    height: 99.8%;
    width: 39.8%;
    margin-right: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const FlexDirecWrap = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StatTitle = styled.h1`
    width: 193.3px;
    margin-left: 30px;
    margin-right: 10px;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -1px;
    word-spacing: 3px;
`;

export const NavWrapper = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UtilWrapper = styled.div`
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchForm = styled.form`
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    opacity: 0.4;
    border: 1px solid #efefef;
    border-radius: 50px;
`;

export const SearchBar = styled.input`
    width: 180px;
    height: 20px;
    padding: 2px 0 1px 16px;
    color: #fff;
    font-family: 'equinoxregular', sans-sarif;
    font-weight: 200;
    background-color: #000;
    // background-color: rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 50px;
    :focus {
        outline: none;
    }
    text-decoration: none;
`;

export const linkDec = {
    margin: '0 6px',
    display: 'flex',
    color: '#fff',
    fontFamily: 'equinoxregular',
    textTransform: 'lowercase',
    fontSize: '12px',
    fontWeight: '200',
    textDecoration: 'none'
}

export const linkDecGetStart = {
    width: '104px',
    margin: '0 6px',
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontFamily: 'equinoxregular',
    textTransform: 'lowercase',
    fontSize: '12px',
    fontWeight: '200',
    textDecoration: 'none'
}