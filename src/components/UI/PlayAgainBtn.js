import React from 'react';
import styled from 'styled-components';

const PlayAgainBtn = ({ playAgain }) => {
  return <Btn onClick={playAgain}>Play Again</Btn>;
};

export default PlayAgainBtn;

const Btn = styled.button`
  border: none;
  background-color: #fff;
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.darkText};
  letter-spacing: 2px;
  @media (min-width: 37.5em) {
    padding: 1.5rem 2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.rockLight};
    }
  }
`;
