import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './StyledComponents';

const Card = props => {
  return (
    <StyledCard
      onClick={() => props.handleOpenCard(props.card)}
      disabled={props.solved}
    >
      {props.revealed && props.card.suit}
      {props.solved && <p>SOLVED</p>}
    </StyledCard>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  handleOpenCard: PropTypes.func,
  revealed: PropTypes.bool,
  solved: PropTypes.bool
};

export default Card;
