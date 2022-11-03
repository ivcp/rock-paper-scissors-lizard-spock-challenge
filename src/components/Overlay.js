import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Overlay = ({ setModalOpen }) => {
  const exitModal = () => {
    setModalOpen(false);
  };
  const overlay = <OverlayDiv onClick={exitModal} />;

  return createPortal(overlay, document.getElementById('overlay'));
};

export default Overlay;

const OverlayDiv = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0006;
`;
