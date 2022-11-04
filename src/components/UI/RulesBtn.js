import React from 'react';
import styled from 'styled-components';

const RulesBtn = ({ setModalOpen }) => {
  const openModal = () => {
    setModalOpen(true);
  };
  return <Btn onClick={openModal}>RULES</Btn>;
};

export default RulesBtn;

const Btn = styled.button`
  position: absolute;
  bottom: 0;
  right: 2rem;
  border: none;
  background-color: transparent;
  padding: 1rem 4rem;
  border: solid hsl(${({ theme }) => theme.headerOutline});
  border-radius: 8px;
  color: #fff;
  letter-spacing: 2px;
  font-size: 1.6rem;
  font-weight: 600;
  transition: background, border 0.2s;

  @media (min-width: 37.5em) {
    right: 5%;
    bottom: 5%;
    cursor: pointer;
    &:hover {
      background-color: #fff2;
      border: solid transparent;
    }
  }
`;
