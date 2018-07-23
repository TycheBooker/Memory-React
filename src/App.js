import React, { Component } from 'react';
import { DifficultyLevels } from './Constants';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';

class App extends Component {
  state = {
    gameIsRunning: false,
    activeDifficultyLevel: DifficultyLevels.EASY
  };

  changeDifficultyLevel = difficulty => {
    this.setState({ activeDifficultyLevel: difficulty });
  };

  startGame = () => {
    this.setState({ gameIsRunning: true });
  };

  quitGame = () => {
    this.setState({ gameIsRunning: false });
  };

  render() {
    return (
      <div>
        {this.state.gameIsRunning ? (
          <GameBoard
            difficultyLevel={this.state.activeDifficultyLevel}
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
