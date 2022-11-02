import React from 'react';
import styled from 'styled-components';

const PicksWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PicksWrapper;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 8rem;

  @media (min-width: 37.5em) {
    gap: 6rem;
  }
`;
