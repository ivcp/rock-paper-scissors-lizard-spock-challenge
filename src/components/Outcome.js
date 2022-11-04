import React, { useState, useEffect } from 'react';
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

  @media (min-width: 37.5em) {
    align-self: center;
    margin-top: 6rem;
    transform: scale(0);
    animation-name: grow;
    animation-duration: 2s;
    animation-fill-mode: forwards;

    & p {
      opacity: 1;
      animation-name: blink;
      animation-duration: 0.5s;
      animation-iteration-count: 5;
    }
  }

  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
