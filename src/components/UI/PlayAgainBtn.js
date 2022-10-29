import React from 'react';
import styled from 'styled-components';

const PlayAgainBtn = ({ playAgain }) => {
  return <Btn onClick={playAgain}>Play Again</Btn>;
};

export default PlayAgainBtn;

const Btn = styled.button``;
