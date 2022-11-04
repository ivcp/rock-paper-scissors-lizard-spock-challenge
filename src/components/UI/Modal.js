import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import rules from '../../assets/image-rules-bonus.svg';
import iconClose from '../../assets/icon-close.svg';
const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  const overlay = (
    <ModalWrapper>
      <Title>RULES</Title>
      <img src={rules} alt="rules" />
      <CloseBtn onClick={closeModal} />
    </ModalWrapper>
  );
  return createPortal(overlay, document.getElementById('modal'));
};

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 200;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 37.5em) {
    width: 40rem;
    height: 46rem;
    padding: 1rem 4rem;
    margin-inline: auto;
    margin-block: auto;
    border-radius: 10px;
    flex-direction: row;
    flex-wrap: wrap;

    & > img {
      order: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.darkText};
  @media (min-width: 37.5em) {
    order: 0;
    width: 90%;
  }
`;

const CloseBtn = styled.button`
  height: 4rem;
  width: 4rem;
  border: none;
  background-color: transparent;
  background-image: url(${iconClose});
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 37.5em) {
    order: 0;
    width: 10%;
    cursor: pointer;
  }
`;
