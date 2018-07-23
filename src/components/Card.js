import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './StyledComponents';

const Card = props => {
  return <StyledCard>{props.card.suit}</StyledCard>;
};

Card.propTypes = {
  card: PropTypes.object
};

export default Card;
