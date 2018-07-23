import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { StyledButton, StyledCardsContainer } from './StyledComponents';
import { shuffleArray } from '../helpers';
import { Suits } from '../Constants';

class GameBoard extends Component {
  createDeck = (difficultyLevel = this.props.difficultyLevel) => {
    let deck = [];
    let cardIndex = 0;
    const cardsPerSuit = difficultyLevel.boardSize / difficultyLevel.suits;
    for (let i = 0; i < difficultyLevel.suits; i++) {
      let suit = Object.values(Suits).find(suit => suit.value === i);
      for (let j = 0; j < cardsPerSuit; j++) {
        deck.push(this.createCard(suit, cardIndex));
        cardIndex++;
      }
    }
    return shuffleArray(deck);
  };

  createCard = (suit, cardIndex) => {
    let card = {
      id: cardIndex,
      suit: suit.name
    };
    return card;
  };

  render() {
    return (
      <div>
        <StyledButton onClick={this.props.quitGame}>Quit Game</StyledButton>
        <StyledCardsContainer>
          {this.createDeck().map(card => <Card card={card} key={card.id} />)}
        </StyledCardsContainer>
      </div>
    );
  }
}

GameBoard.propTypes = {
  difficultyLevel: PropTypes.object,
  quitGame: PropTypes.func
};

export default GameBoard;
