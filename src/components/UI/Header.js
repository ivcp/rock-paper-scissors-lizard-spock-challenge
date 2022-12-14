import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RPSLSlogo from '../../assets/logo-bonus.svg';
import RPSlogo from '../../assets/logo.svg';

const Header = ({ score, optionSelected, options }) => {
  const tempScore = score;
  const [displayScore, setDisplayScore] = useState(tempScore);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayScore(score);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [score]);

  const isRPS = options.length === 3;

  return (
    <Wrapper selected={optionSelected}>
      <Title src={isRPS ? RPSlogo : RPSLSlogo} isRPS={isRPS} alt="logo" />
      <ScoreWrapper>
        <p>SCORE</p>
        <span>{displayScore}</span>
      </ScoreWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 10rem;
  width: 31rem;
  margin-inline: auto;
  margin-top: 2rem;
  padding-inline: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: 0.4rem solid hsl(${({ theme }) => theme.headerOutline});
  border-radius: 4px;

  @media (min-width: 37.5em) {
    & {
      height: 15rem;
      width: 70rem;
      margin-top: 5rem;
      margin-bottom: ${props => !props.selected && '5rem'};
      border-radius: 1.5rem;
      padding-inline: 2.5rem;
    }
  }
`;

const Title = styled.img`
  height: 50%;
  @media (min-width: 37.5em) {
    & {
      height: ${props => (props.isRPS ? '60%' : '75%')};
    }
  }
`;

const ScoreWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding-inline: 2rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 37.5em) {
    & {
      width: 15rem;
      border-radius: 6px;
    }
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.scoreText};
  }

  @media (min-width: 37.5em) {
    & > p {
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
    }
  }

  & > span {
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkText};
  }

  @media (min-width: 37.5em) {
    & > span {
      font-size: 6rem;
    }
  }
`;
