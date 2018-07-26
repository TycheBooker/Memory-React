import React from 'react';
import PropTypes from 'prop-types';
import CustomDifficultyWidget from './CustomDifficultyWidget';
import { StyledButton } from './StyledComponents';
import { capitalizeString } from '../helpers';

const StartScreen = props => {
  return (
    <div>
      <h1>Welcome, Player!</h1>
      <h3>Choose a difficulty level:</h3>
      {Object.values(props.difficultyLevels).map(difficulty => {
        return (
          <StyledButton
            key={difficulty.value}
            onClick={() => props.changeDifficultyLevel(difficulty)}
            active={difficulty === props.activeDifficultyLevel}
          >
            {capitalizeString(difficulty.name)}
          </StyledButton>
        );
      })}
      <CustomDifficultyWidget
        changeDifficultyLevel={props.changeDifficultyLevel}
        activeDifficultyLevel={props.activeDifficultyLevel}
      />
      <StyledButton primary onClick={props.startGame}>
        Start Game
      </StyledButton>
    </div>
  );
};

StartScreen.propTypes = {
  difficultyLevels: PropTypes.object,
  activeDifficultyLevel: PropTypes.object,
  changeDifficultyLevel: PropTypes.func,
  startGame: PropTypes.func
};

export default StartScreen;
