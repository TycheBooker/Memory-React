import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledComponents';
import { GameConfig, Suits } from '../Constants';

class CustomDifficultyWidget extends Component {
  state = {
    isWidgetOpen: false,
    numberOfSuits: GameConfig.minSuits,
    numberOfCards: GameConfig.minSuits * 2
  };

  toggleWidget = () => {
    this.setState(prevState => {
      return {
        isWidgetOpen: !prevState.isWidgetOpen
      };
    });
  };

  submitCustomDifficulty = event => {
    event.preventDefault();
    let customDifficulty = {
      value: 3,
      name: 'custom',
      suits: this.state.numberOfSuits,
      boardSize: this.state.numberOfCards
    };
    this.props.changeDifficultyLevel(customDifficulty);
    this.toggleWidget();
  };

  handleSuitsChange = event => {
    this.setState({ numberOfSuits: event.target.value });
    let newMinBoardSize = this.getMinBoardSize(event.target.value);
    let newMaxBoardSize = this.getMaxBoardSize(event.target.value);
    if (this.state.numberOfCards < newMinBoardSize) {
      this.setState({
        numberOfCards: newMinBoardSize
      });
    } else if (this.state.numberOfCards > newMaxBoardSize) {
      this.setState({
        numberOfCards: newMaxBoardSize
      });
    }
  };

  handleBoardSizeChange = event => {
    this.setState({ numberOfCards: event.target.value });
  };

  getMinBoardSize = (numberOfSuits = this.state.numberOfSuits) => {
    return numberOfSuits * 2;
  };

  getMaxBoardSize = (numberOfSuits = this.state.numberOfSuits) => {
    let modulo = GameConfig.maxBoardSize % numberOfSuits;
    if (modulo) {
      return GameConfig.maxBoardSize - modulo;
    } else {
      return GameConfig.maxBoardSize;
    }
  };

  render() {
    return (
      <Fragment>
        <StyledButton onClick={this.toggleWidget}>
          Custom Difficulty
        </StyledButton>
        {this.state.isWidgetOpen && (
          <div>
            <p>Set your custom difficulty:</p>
            <form onSubmit={this.submitCustomDifficulty}>
              <label htmlFor="suits">Number of suits:</label>
              <input
                type="range"
                name="suits"
                min={GameConfig.minSuits}
                max={Object.keys(Suits).length}
                step="2"
                value={this.state.numberOfSuits}
                onChange={this.handleSuitsChange}
              />
              <p>{this.state.numberOfSuits}</p>

              <label htmlFor="board-size">Board size:</label>
              <input
                type="range"
                name="board-size"
                min={this.getMinBoardSize()}
                max={this.getMaxBoardSize()}
                step={this.state.numberOfSuits}
                value={this.state.numberOfCards}
                onChange={this.handleBoardSizeChange}
              />
              <p>{this.state.numberOfCards}</p>

              <StyledButton type="submit">Set difficulty</StyledButton>
            </form>
          </div>
        )}
      </Fragment>
    );
  }
}

CustomDifficultyWidget.propTypes = {
  changeDifficultyLevel: PropTypes.func
};

export default CustomDifficultyWidget;
