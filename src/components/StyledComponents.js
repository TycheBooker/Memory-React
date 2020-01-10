import styled, { css } from 'styled-components';

const cardHeight = 7;
const cardWidth = 5.5;
const cardMargin = 0.625;

export const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background: transparent;
  color: teal;
  border: 2px solid teal;

  ${(props) =>
    props.primary &&
    css`
      background: teal;
      color: white;
      font-size: 2em;
    `};

  ${(props) =>
    props.active &&
    css`
      background: teal;
      color: white;
    `};
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  width: ${(props) =>
    props.width * (cardWidth + cardMargin / 2) - cardMargin / 2}em;
`;

export const StyledCard = styled.button`
  height: ${cardHeight}em;
  width: ${cardWidth}em;
  border: 1px solid teal;
  border-radius: 5px;
  margin: ${cardMargin}em;
`;
