import React from 'react';
import styled from 'styled-components';

const OutcomeWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default OutcomeWrapper;

const Wrapper = styled.div`
  width: 70rem;
  display: flex;
`;
