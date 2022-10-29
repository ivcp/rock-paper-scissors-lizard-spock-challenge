import React from 'react';
import styled from 'styled-components';
import PlayAgainBtn from './UI/PlayAgainBtn';

const Outcome = ({ outcome, playAgain }) => {
  const message =
    outcome === 'tie'
      ? `It's a tie`
      : outcome === 'win'
      ? ' You win'
      : 'You lose';
  return (
    <OutcomeWrapper>
      <p>{message}</p>
      <PlayAgainBtn playAgain={playAgain} />
    </OutcomeWrapper>
  );
};

export default Outcome;

const OutcomeWrapper = styled.div``;
