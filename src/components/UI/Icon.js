import React from 'react';
import styled from 'styled-components';
import icons from '../../helpers/icons';

const Icon = ({ name, onIconClick }) => {
  return (
    <Container onClick={onIconClick} name={name}>
      <Image src={icons[name]} alt={name} />
    </Container>
  );
};

export default Icon;

const Container = styled.button`
  position: absolute;
  left: 0;
  right: 0;

  /* position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
  top: 0;
  bottom: 0;
  margin-block: auto;

  margin-left: ${props => props.name === 'spock' && '-10%'};
  margin-bottom: ${props => props.name === 'spock' && '50%'};
  margin-top: ${props => props.name === 'scissors' && '-10%'};
  margin-right: ${props => props.name === 'paper' && '-10%'};
  margin-bottom: ${props => props.name === 'paper' && '50%'};
  margin-bottom: ${props => props.name === 'lizard' && '-10%'};
  margin-bottom: ${props => props.name === 'rock' && '-10%'};
  margin-left: ${props => props.name === 'lizard' && '5%'};
  margin-right: ${props => props.name === 'rock' && '5%'}; */

  border: none;
  margin: 4rem;
  width: 7.5rem;
  height: 7.5rem;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //cursor: pointer;
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
      const color = props.name;
      return props.theme[`${color}Light`];
    }};
    box-shadow: 0 -0.4rem 0 0.05rem ${props => {
        const color = props.name;
        return props.theme[`${color}Dark`];
      }} inset;
  }
`;

const Image = styled.img`
  padding: 2rem;
`;
