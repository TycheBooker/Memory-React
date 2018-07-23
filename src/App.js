import React, { Component } from 'react';
import { DifficultyLevels, Suits } from './Constants';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';
import { shuffleArray } from './helpers';

class App extends Component {
  state = {
    gameIsRunning: false,
    activeDifficultyLevel: DifficultyLevels.EASY,
    deck: []
  };

  changeDifficultyLevel = difficulty => {
    this.setState({ activeDifficultyLevel: difficulty });
  };

  startGame = () => {
    this.setState({ deck: this.createDeck(), gameIsRunning: true });
  };

  quitGame = () => {
    this.setState({
      gameIsRunning: false,
      deck: []
    });
  };

  createDeck = (difficultyLevel = this.state.activeDifficultyLevel) => {
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
        {this.state.gameIsRunning ? (
          <GameBoard
            difficultyLevel={this.state.activeDifficultyLevel}
            deck={this.state.deck}
            quitGame={this.quitGame}
          />
        ) : (
          <StartScreen
            difficultyLevels={DifficultyLevels}
            activeDifficultyLevel={this.state.activeDifficultyLevel}
            changeDifficultyLevel={this.changeDifficultyLevel}
            startGame={this.startGame}
          />
        )}
      </div>
    );
  }
}

export default App;
