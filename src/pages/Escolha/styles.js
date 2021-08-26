import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  place-content: center;
  justify-content: center;
  a {
    margin-left: 800px;
    margin-top: -20px;
    text-decoration: none;
    color: #7b1fa2;
    transition: color 0.2s;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  a {
    margin-left: 800px;
    margin-top: -20px;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s;
  }
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 1000px;
  margin-bottom: -50px;
`;
