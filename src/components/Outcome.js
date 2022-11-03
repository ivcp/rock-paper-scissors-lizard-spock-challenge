import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import PlayAgainBtn from './UI/PlayAgainBtn';

const Outcome = ({ outcome, playAgain }) => {
  const [showOutcome, setShowOutcome] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOutcome(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const message =
    outcome === 'tie'
      ? `It's a tie`
      : outcome === 'win'
      ? ' You win'
      : 'You lose';

  const outcomeJsx = (
    <OutcomeWrapper>
      <p>{message}</p>
      <PlayAgainBtn playAgain={playAgain} />
    </OutcomeWrapper>
  );

  return showOutcome ? outcomeJsx : null;
};

export default Outcome;

const OutcomeWrapper = styled.div`
  & p {
    font-size: 6rem;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;
