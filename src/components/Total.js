import React from "react";
import styled from "@emotion/styled";

import { Output } from "components";
import { SPEED, PACE, TIME, DISTANCE } from "state/constants";

const Total = () => {
  return (
    <Container>
      <Title>Totaux</Title>
      <ScrollZone>
        <OutputsContainer>
          <Output type={SPEED.type} />
          <Output type={PACE.type} />
          <Output type={DISTANCE.type} />
          <Output type={TIME.type} />
        </OutputsContainer>
      </ScrollZone>
    </Container>
  );
};

Total.propTypes = {};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8em;
  background-color: ${({ theme }) => theme.color.darkGrey};
  padding: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const ScrollZone = styled.div`
  display: flex;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    justify-content: center;
  }
  overflow-x: auto;
  height: 100%;
`;

const Title = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.65em 1em 0.35em 2em;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    padding: 0.65em 1em 0.35em 4em;
  }
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  transform: translateY(-50%);
  text-transform: uppercase;
  border-radius: 0 12px 12px 0;
  letter-spacing: 0.1em;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const OutputsContainer = styled.div`
  box-sizing: border-box;
  margin: auto 4em auto 2em;
  max-width: 50em;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    margin: auto 4em auto 2em;
  }
  display: flex;
  flex: auto;
  font-size: 133%;
`;

export default Total;
