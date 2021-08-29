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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 550px;
  &:hover {
      background-color: #999;
      color: #999;
    }
  > button {
    margin-top: 20px;
    margin-right: 75px;
    margin-left: 75px;
  }
`;

export const Text = styled.h1`
  color: #7b1fa2;
  display: flex;
  align-items: flex-start;
  place-content: initial;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #7b1fa2;
  display: flex;
  align-items: center;
  place-content: center;
  justify-content: center;
`;
