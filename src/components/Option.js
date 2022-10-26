import React from 'react';

const Option = ({
  name,
  optionSelected,
  setPlayerPick,
  setComputerPick,
  setOptionSelected,
}) => {
  const handleClick = () => {
    if (optionSelected) return;
    setOptionSelected(true);
    setPlayerPick(name);
    setComputerPick('spock');
  };
  return <div onClick={handleClick}>{name}</div>;
};

export default Option;
