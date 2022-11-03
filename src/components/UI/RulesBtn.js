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
  border: none;
  background-color: transparent;
  padding: 1rem 4rem;
  border: solid hsl(${({ theme }) => theme.headerOutline});
  border-radius: 8px;
  color: #fff;
  letter-spacing: 2px;
  font-size: 1.6rem;
  font-weight: 600;
`;
