import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Icon from './UI/Icon';

const ChosenIcon = ({ name, player, outcome }) => {
  const [showComputerPick, setShowComputerPick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComputerPick(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let rings;
  if (outcome === 'win' && player) rings = true;
  if (outcome === 'lose' && !player) rings = true;

  const displayIcon = <Icon big rings={rings} name={name} color={name} />;

  return (
    <Wrapper circle={showComputerPick} player={player}>
      {player ? displayIcon : !showComputerPick ? <DarkCircle /> : displayIcon}
      <Picked>{player ? 'YOU' : 'THE HOUSE'} PICKED</Picked>
    </Wrapper>
  );
};

export default ChosenIcon;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  ${props => !props.circle && !props.player && 'gap:3.5rem;'}

  @media (min-width: 37.5em) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

const Picked = styled.p`
  color: #fff;
  align-self: center;
  font-size: 1.4rem;
  letter-spacing: 1px;

  @media (min-width: 37.5em) {
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 6rem;
  }
`;

const DarkCircle = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background-color: #0002;
  margin-top: 4rem;
  margin-inline: 3.75rem;
  @media (min-width: 37.5em) {
    width: 22.5rem;
    height: 22.5rem;
    margin-top: 0;
  }
`;
