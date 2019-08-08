import styled from 'styled-components';

export const BackDrop = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Stage = styled.div`
  min-height: calc(100vh - 95px);
  padding-top: 65px;
`;

export const CenterPiece = styled.div`
  height: 99.8%;
  width: 93.75%;
  margin: 0 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;