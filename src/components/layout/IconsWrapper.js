import React from 'react';
import styled from 'styled-components';

const IconsWrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default IconsWrapper;

const Container = styled.div`
  position: relative;
  margin-top: -10rem;
  width: 30rem;
  height: 30rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));

  @media (min-width: 37.5em) {
    & {
      margin-bottom: 12rem;
      width: 40rem;
      height: 40rem;
    }
  }
`;
