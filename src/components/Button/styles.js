import styled, { css } from 'styled-components';

export const Container = styled.button`
    margin:15px 0;
    width: 155px;
    height: 40px;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
    border: 2px solid #999;
    outline:none;
    -webkit-font-smoothing: antialiased;
    color: #999999;
    font-weight: 400;

    &:hover {
    background-color: #999;
    color: #fff;
    font-weight: 400;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #999;
      color: #fff;
    `}

  .button{
    width: 155px;
    height: 40px;
  }
`;
