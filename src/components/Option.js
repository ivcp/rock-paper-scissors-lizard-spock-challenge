import React from 'react';
import { checkIfWon } from '../helpers/checkIfWon';

const Option = ({
  name,
  options,
  optionSelected,
  setPlayerPick,
  setComputerPick,
  setOptionSelected,
  setOutcome,
  setScore,
}) => {
  const handleClick = () => {
    if (optionSelected) return;
    setOptionSelected(true);
    setPlayerPick(name);
    const randomPick = options[Math.floor(Math.random() * options.length)];
    setComputerPick(randomPick);
    const outcome = checkIfWon(options, name, randomPick);
    setOutcome(outcome);
    if (outcome === 'tie') return;
    if (outcome === 'win') {
      setScore(prev => prev + 1);
    }
    if (outcome === 'lose') {
      setScore(prev => (prev === 0 ? prev : prev - 1));
    }
  };
  return <div onClick={handleClick}>{name}</div>;
};

export default Option;
