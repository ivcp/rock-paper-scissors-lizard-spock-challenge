import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Icon from './UI/Icon';

const ChosenIcon = ({ name, player }) => {
  const [showComputerPick, setShowComputerPick] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowComputerPick(true);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  const displayIcon = <Icon big name={name} color={name} />;

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
`;

const Picked = styled.p`
  color: #fff;
  align-self: center;
  font-size: 1.4rem;
  letter-spacing: 1px;
`;

const DarkCircle = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background-color: #0002;
  margin-top: 3.5rem;
`;
