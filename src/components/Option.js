import React from 'react';
import { checkIfWon } from '../helpers/checkIfWon';
import icons from '../helpers/icons';
import styled from 'styled-components';

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
  return (
    <Container onClick={handleClick} color={name}>
      <Icon src={icons[name]} alt={name} />
    </Container>
  );
};

export default Option;

const Container = styled.div`
  //const color = ${props => props.name}
  margin: 4rem;

  width: 7.5rem;
  height: 7.5rem;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.4rem 0 0.05rem
    hsl(${({ theme }) => theme.headerOutline} / 0.2) inset;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: ${props => {
      const color = props.color;
      return props.theme[`${color}Light`];
    }};
    box-shadow: 0 -0.4rem 0 0.05rem ${props => {
        const color = props.color;
        return props.theme[`${color}Dark`];
      }} inset;
  }
`;

const Icon = styled.img`
  padding: 2rem;
`;
