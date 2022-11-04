import React from 'react';
import styled from 'styled-components';

const ChangeGame = ({ changeGame }) => {
  const handleChange = e => {
    changeGame(e.target.value);
  };
  return (
    <Dropdown
      name="change-game"
      defaultValue=""
      aria-label="change game"
      onChange={handleChange}
    >
      <option value="" disabled hidden>
        Change Game
      </option>
      <option value="RPSLS">
        RPSLS - Rock, Paper, Scissors, Lizard, Spock
      </option>
      <option value="RPS">RPS - Rock, Paper, Scissors</option>
    </Dropdown>
  );
};

export default ChangeGame;

const Dropdown = styled.select`
  position: absolute;
  bottom: 0;
  left: 2rem;
  width: 12rem;
  background-color: transparent;
  padding-block: 1rem;
  font: inherit;
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  border: solid hsl(${({ theme }) => theme.headerOutline});
  border-radius: 8px;

  @media (min-width: 37.5em) {
    left: 5%;
    bottom: 5%;
    cursor: pointer;
  }

  & option {
    background-color: #fff;
    color: ${({ theme }) => theme.darkText};

    @media (min-width: 37.5em) {
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`;
