import React from 'react';

const Outcome = ({ outcome }) => {
  const message =
    outcome === 'tie'
      ? `It's a tie`
      : outcome === 'win'
      ? ' You win'
      : 'You lose';
  return <div>{message}</div>;
};

export default Outcome;
