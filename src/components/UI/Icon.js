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

  grid-column: ${props => props.name === 'spock' && '1/2'};
  grid-row: ${props => props.name === 'spock' && '2/4'};
  justify-self: ${props => props.name === 'spock' && 'center'};
  align-self: ${props => props.name === 'spock' && 'center'};

  grid-row: ${props => props.name === 'scissors' && '1'};
  grid-column: ${props => props.name === 'scissors' && '1/-1'};
  justify-self: ${props => props.name === 'scissors' && 'center'};
  align-self: ${props => props.name === 'scissors' && 'center'};

  grid-row: ${props => props.name === 'lizard' && '4/6'};
  grid-column: ${props => props.name === 'lizard' && '1/3'};
  justify-self: ${props => props.name === 'lizard' && 'start'};
  align-self: ${props => props.name === 'lizard' && 'start'};

  grid-row: ${props => props.name === 'rock' && '4/6'};
  grid-column: ${props => props.name === 'rock' && '4/6'};
  justify-self: ${props => props.name === 'rock' && 'end'};
  align-self: ${props => props.name === 'rock' && 'start'};

  grid-row: ${props => props.name === 'paper' && '2/4'};
  grid-column: ${props => props.name === 'paper' && '5/6'};
  justify-self: ${props => props.name === 'paper' && 'center'};
  align-self: ${props => props.name === 'paper' && 'center'};

  border: none;
  margin: 4rem;
  width: 7.5rem;
  height: 7.5rem;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0.4rem 0 0.05rem
    hsl(${({ theme }) => theme.headerOutline} / 0.2) inset;

  @media (min-width: 37.5em) {
    & {
      width: 11rem;
      height: 11rem;
      box-shadow: 0 0.6rem 0 0.05rem
        hsl(${({ theme }) => theme.headerOutline} / 0.2) inset;
    }
  }

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

  @media (min-width: 37.5em) {
    &::before {
      width: 15rem;
      height: 15rem;
      box-shadow: 0 -0.6rem 0 0.05rem ${props => {
          const color = props.name;
          return props.theme[`${color}Dark`];
        }} inset;
    }
  }
`;

const Image = styled.img`
  padding: 2rem;
`;
