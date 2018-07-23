import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: teal;
  border: 2px solid teal;

  ${props =>
    props.primary &&
    css`
      background: teal;
      color: white;
      font-size: 2em;
    `};

  ${props =>
    props.active &&
    css`
      background: teal;
      color: white;
    `};
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCard = styled.button`
  height: 100px;
  width: 80px;
  border: 1px solid teal;
  border-radius: 5px%;
  margin: 10px;
`;
