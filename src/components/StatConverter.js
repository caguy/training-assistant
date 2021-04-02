import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Flipper, Flipped } from "react-flip-toolkit";

import { Segment, Total } from "components";
import { dispatchNewSegment } from "state/middlewares";

const StatConverter = ({ segmentIds, addSegment }) => {
  const segmentComponents = segmentIds.map((segmentId) => (
    <Flipped key={segmentId} flipId={segmentId}>
      <div>
        <Segment id={segmentId} />
      </div>
    </Flipped>
  ));

  return (
    <>
      <Main>
        <Title>
          <H1>Votre entraînement</H1>
        </Title>
        <Body>
          <Flipper flipKey={segmentIds.join("")}>
            <H2>Définissez votre entraînement</H2>
            <Subtitle>
              <P>Quel est votre objectif aujourd’hui ?</P>
              <P>
                L'outil calcule pour vous les statistiques prévisionnelles de
                votre entraînement pour vous aider préparer votre itinéraire.
              </P>
            </Subtitle>
            <SegmentsContainer>{segmentComponents}</SegmentsContainer>
            <Flipped flipId="addButton">
              <AddButtonContainer>
                <AddButton onClick={addSegment}>Ajouter une étape</AddButton>
              </AddButtonContainer>
            </Flipped>
          </Flipper>
        </Body>
      </Main>
      <Total />
    </>
  );
};

StatConverter.propTypes = {
  segmentIds: PropTypes.arrayOf(PropTypes.number),
  addSegment: PropTypes.func.isRequired,
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    flex-direction: row;
  }
  margin-bottom: 8em;
`;

const Title = styled.div`
  display: flex;
  position: relative;
  min-height: 5em;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    height: auto;
    width: 8em;
    margin-top: 3em;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    height: auto;
    margin-top: 3em;
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.color.body};
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.25em;
  margin: auto;
  opacity: 0.6;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    position: absolute;
    text-align: right;
    transform: rotate(-90deg) translate(-100%, 50%);
    transform-origin: top left;
    font-size: 1.5em;
    letter-spacing: 0.2em;
    width: 500%;
    margin: 0;
  }
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.color.body};
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
  text-align: center;
`;

const Subtitle = styled.div`
  margin: 1em 0;
`;

const P = styled.p`
  text-align: center;
  opacity: 0.6;
  color: ${({ theme }) => theme.color.body};
  margin: 0.5rem 0 0.5rem 0;
`;

const SegmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4em 0 2em 0;
`;

const AddButtonContainer = styled.div`
  text-align: center;
  margin: 2em 0 6em 0;
`;

const AddButton = styled.button`
  position: relative;
  border-radius: 1.25em;
  height: 2.5em;
  background-color: ${({ theme }) => theme.color.body};
  border: none;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-size: 0.8em;
  padding: 0 1.5em 0 3em;
  cursor: pointer;

  &::before {
    position: absolute;
    left: 5px;
    top: 4px;
    width: calc(1.65em - 2 * 4px);
    height: calc(1.65em - 2 * 4px);
    content: "+";
    display: block;
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: calc((2.5em - 2 * 3px) / 2);
    color: ${({ theme }) => theme.color.body};
    font-size: 1.5em;
    transition: transform 250ms ease-out;
  }

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0px 0px 6px 0.5px ${({ theme }) => theme.color.secondary};

    &::before {
      transform: rotate(90deg);
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

function mapStateToProps(state) {
  return {
    segmentIds: state.segments.map((segment) => segment.id),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSegment: () => dispatch(dispatchNewSegment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatConverter);
