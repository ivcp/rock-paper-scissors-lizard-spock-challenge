import React from 'react';
import styled from 'styled-components';
import icons from '../../helpers/icons';

const Icon = ({ name, onIconClick, big }) => {
  return (
    <Container big={big} onClick={onIconClick} name={name}>
      <SrOnlyName>{name}</SrOnlyName>
      <ClickableSpan />
      <Image big={big} src={icons[name]} alt={name} />
    </Container>
  );
};

export default Icon;

const Container = styled.button`
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

  position: relative;
  border: none;
  margin: 4rem;
  width: ${props => (props.big ? '10.5rem' : '7.5rem')};
  height: ${props => (props.big ? '10.5rem' : '7.5rem')};
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => (props.big ? null : 'cursor: pointer;')}
  box-shadow: 0 0.4rem 0 0.05rem
    hsl(${({ theme }) => theme.headerOutline} / 0.2) inset;

  @media (min-width: 37.5em) {
    & {
      width: ${props => (props.big ? '22rem' : '11rem')};
      height: ${props => (props.big ? '22rem' : '11rem')};
      box-shadow: 0 0.6rem 0 0.05rem
        hsl(${({ theme }) => theme.headerOutline} / 0.2) inset;
    }

    &:hover& > img {
      ${props => (props.big ? null : 'transform: scale(1.05) rotate(4deg);')}
    }
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: ${props => (props.big ? '13rem' : '10rem')};
    height: ${props => (props.big ? '13rem' : '10rem')};
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
      width: ${props => (props.big ? '30rem' : '15rem')};
      height: ${props => (props.big ? '30rem' : '15rem')};
      box-shadow: 0 -0.6rem 0 0.05rem ${props => {
          const color = props.name;
          return props.theme[`${color}Dark`];
        }} inset;
    }
  }
`;

const Image = styled.img`
  padding: 2rem;
  ${props => (props.big ? null : 'transition: transform 0.2s ease-in-out;')}

  @media (min-width: 37.5em) {
    & {
      ${props => (props.big ? 'transform: scale(2);' : null)}
    }
  }
`;

const SrOnlyName = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const ClickableSpan = styled.span`
  position: absolute;
  width: 135%;
  height: 135%;
  border-radius: 50%;
  background-color: transparent;
`;
