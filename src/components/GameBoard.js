import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { StyledButton, StyledCardsContainer } from './StyledComponents';

class GameBoard extends Component {
  state = {
    revealedCards: [],
    solvedCards: []
  };

  timeout = undefined;

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  getBoardWidth = () => {
    const cardNumber = this.props.difficultyLevel.boardSize;
    const height = Math.floor(Math.sqrt(cardNumber));
    const width = cardNumber / height;
    return width;
  };

  handleOpenCard = (card) => {
    if (
      !this.state.revealedCards.find(
        (revealedCard) => revealedCard.id === card.id
      )
    ) {
      this.revealCard(card);

      if (this.state.revealedCards.length === 1) {
        this.timeout = setTimeout(() => this.resolvePair(), 1000);
      } else if (this.state.revealedCards.length > 1) {
        if (this.timeout) clearTimeout(this.timeout);
        this.resolvePair();
        this.revealCard(card);
      }
    }
  };

  revealCard = (card) => {
    this.setState((prevState) => {
      return {
        revealedCards: prevState.revealedCards.concat(card)
      };
    });
  };

  resolvePair = () => {
    if (this.state.revealedCards[0].suit === this.state.revealedCards[1].suit) {
      this.setState((prevState) => {
        return {
          solvedCards: prevState.solvedCards.concat(
            prevState.revealedCards[0],
            prevState.revealedCards[1]
          )
        };
      });
    }
    this.setState({ revealedCards: [] });
  };

  render() {
    return (
      <div>
        <StyledButton onClick={this.props.quitGame}>Quit Game</StyledButton>
        <StyledCardsContainer width={this.getBoardWidth()}>
          {this.props.deck.map((card) => (
            <Card
              card={card}
              key={card.id}
              handleOpenCard={this.handleOpenCard}
              revealed={this.state.revealedCards.includes(card)}
              solved={this.state.solvedCards.includes(card)}
            />
          ))}
        </StyledCardsContainer>
        {this.props.deck.length === this.state.solvedCards.length && (
          <Fragment>
            <p>Great! You solved it!</p>
            <p>Start new game?</p>
            <StyledButton>Yes</StyledButton>
            <StyledButton>No</StyledButton>
          </Fragment>
        )}
      </div>
    );
  }
}

GameBoard.propTypes = {
  deck: PropTypes.array,
  difficultyLevel: PropTypes.object,
  quitGame: PropTypes.func
};

export default GameBoard;
