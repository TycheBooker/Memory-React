import React, { Component } from 'react';
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

  revealCard = card => {
    switch (this.state.revealedCards.length) {
      case 0:
        this.setState({ revealedCards: [card] });
        break;
      case 1:
        this.setState(prevState => {
          return {
            revealedCards: prevState.revealedCards.concat(card)
          };
        });
        this.timeout = setTimeout(() => {
          if (
            this.state.revealedCards.length === 2 &&
            this.state.revealedCards[0].suit ===
              this.state.revealedCards[1].suit
          ) {
            this.setState(prevState => {
              return {
                solvedCards: prevState.solvedCards.concat(
                  prevState.revealedCards
                ),
                revealedCards: []
              };
            });
          } else {
            this.setState({ revealedCards: [] });
          }
        }, 1000);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <StyledButton onClick={this.props.quitGame}>Quit Game</StyledButton>
        <StyledCardsContainer>
          {this.props.deck.map(card => (
            <Card
              card={card}
              key={card.id}
              revealCard={this.revealCard}
              revealed={this.state.revealedCards.includes(card)}
              solved={this.state.solvedCards.includes(card)}
            />
          ))}
        </StyledCardsContainer>
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
