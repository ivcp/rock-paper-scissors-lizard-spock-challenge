import React from 'react';
import styled from 'styled-components';

const PicksWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PicksWrapper;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;
  margin-bottom: 4rem;

  @media (min-width: 37.5em) {
    gap: 6rem;
  }
`;
