import React, { useRef } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { Input, Output } from "components";
import { SegmentName, StyledActionButton } from "./components";
import { PACE, SPEED, DISTANCE, TIME } from "state/constants";
import { moveSegment, toggleFold } from "state/actions";
import { getSegmentById, getSegmentIndex } from "state/selectors";

import { ReactComponent as FoldIcon } from "static/fold_icon.svg";
import { ReactComponent as DeleteIconSvg } from "static/delete_icon.svg";
import { ReactComponent as ArrowIconSvg } from "static/arrow_icon.svg";
import { dispatchDeleteSegment } from "state/middlewares";

const Segment = ({
  id,
  inputs,
  folded = false,
  toggleFold,
  remove,
  move,
  canMoveUp,
  canMoveDown
}) => {
  const moveUpRef = useRef();
  const moveDownRef = useRef();

  const options = (fieldType) => {
    const options = [SPEED.type, PACE.type, DISTANCE.type, TIME.type];
    return options.filter((option) => {
      const otherInput = fieldType === inputs[0] ? inputs[1] : inputs[0];
      return !(
        option === otherInput ||
        (otherInput === PACE.type && option === SPEED.type) ||
        (option === PACE.type && otherInput === SPEED.type)
      );
    });
  };

  const onMoveUp = () => {
    moveUpRef.current.blur();
    move("UP");
  };

  const onMoveDown = () => {
    moveDownRef.current.blur();
    move("DOWN");
  };

  const inputComponents = inputs.map((input) => (
    <InputContainer key={input}>
      <Input segmentId={id} type={input} options={options(input)} />
    </InputContainer>
  ));

  return (
    <Container>
      <SegmentName segmentId={id} />
      <Core>
        <H4>Cible</H4>
        <InputsContainer>{inputComponents}</InputsContainer>
      </Core>
      <Summary folded={folded}>
        <OutputsContainer>
          <Output key={SPEED.type} segmentId={id} type={SPEED.type} />
          <Output key={PACE.type} segmentId={id} type={PACE.type} />
          <Output key={DISTANCE.type} segmentId={id} type={DISTANCE.type} />
          <Output key={TIME.type} segmentId={id} type={TIME.type} />
        </OutputsContainer>
      </Summary>
      <ActionZone>
        <StyledActionButton
          id="deleteButton"
          className="actionButton"
          hoverColor="error"
          hoverStrokeColor="white"
          onClick={remove}
          aria-label="Supprimer le segment"
        >
          <DeleteIcon />
        </StyledActionButton>
        <StyledActionButton
          ref={moveUpRef}
          id="moveUpButton"
          className="actionButton"
          hoverColor="secondary"
          hoverStrokeColor="body"
          onClick={onMoveUp}
          disabled={!canMoveUp}
          aria-label="Monter le segment"
        >
          <ArrowIcon />
        </StyledActionButton>
        <StyledActionButton
          ref={moveDownRef}
          id="moveDownButton"
          className="actionButton"
          hoverColor="secondary"
          hoverStrokeColor="body"
          onClick={onMoveDown}
          disabled={!canMoveDown}
          aria-label="Descendre le segment"
        >
          <ReversedArrowIcon />
        </StyledActionButton>
      </ActionZone>
      <FoldButton
        folded={folded}
        onClick={toggleFold}
        aria-label="Masquer le résumé du segment"
      >
        <FoldIconContainer folded={folded}>
          <FoldIcon style={FoldIconStyle} />
        </FoldIconContainer>
      </FoldButton>
    </Container>
  );
};

Segment.propTypes = {
  id: PropTypes.number.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.oneOf([SPEED.type, PACE.type, TIME.type, DISTANCE.type])
      .isRequired
  ),
  folded: PropTypes.bool,
  toggleFold: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  canMoveUp: PropTypes.bool,
  canMoveDown: PropTypes.bool
};

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 50em;
  min-width: 21em;
  margin: 2em auto;
  z-index: 0;

  &:hover {
    & .actionButton {
      transform: scale(1);
      opacity: 1;

      &[disabled] {
        opacity: 0.3;
      }
    }
  }
`;

const Core = styled.div`
  position: relative;
  margin: 1em 0 3em 0;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 15px 15px 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    border-radius: 15px;
    margin: 1em 2em 3em 2em;
  }
`;

const H4 = styled.h4`
  position: absolute;
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  transform: rotate(-90deg);
  top: 2em;
  font-size: 0.8em;
  @media (max-width: ${({ theme }) => theme.bp.md}px) {
    display: none;
  }
`;

const Summary = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.5em;
  background-color: ${({ theme }) => theme.color.darkGrey};
  border-radius: 15px;
  z-index: -10;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding-top: 0.5em;

  transition: transform 150ms ease-in-out;
  transform: translateY(${({ folded }) => (folded ? -2.5 : 0)}em);
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.bp.md}px) {
    left: 5.5em;
  }
  @media screen and (max-width: ${({ theme }) => theme.bp.md}px) {
    font-size: 80%;
    height: 3em;
    bottom: 0.75em;
    border-radius: 0 0 15px 15px;
    padding-top: 0.25em;
  }
`;

const OutputsContainer = styled.div`
  box-sizing: border-box;
  margin: auto 4em auto 1em;
  display: flex;
  flex: auto;
`;

const FoldButton = styled.button`
  position: absolute;
  right: 6px;
  bottom: 0.1em;
  cursor: pointer;

  transition: transform 150ms ease-in-out;
  transform: translateY(${({ folded }) => (folded ? -2.7 : 0)}em);

  &:hover {
    path {
      fill: ${({ theme }) => theme.color.secondary};
    }
    line {
      stroke: ${({ theme }) => theme.color.secondary};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.bp.md}px) {
    bottom: 0.8em;
    transform: translateY(${({ folded }) => (folded ? -2.4 : 0)}em);

    path {
      fill: ${({ theme, folded }) => (folded ? theme.color.body : "")};
    }
    line {
      stroke: ${({ theme, folded }) => (folded ? theme.color.body : "")};
    }
  }

  border: none;
  background-color: unset;
`;

const FoldIconContainer = styled.div`
  transition: transform 150ms ease-in-out 150ms;
  transform: rotate(${({ folded }) => (folded ? -180 : 0)}deg);

  @media screen and (max-width: ${({ theme }) => theme.bp.md}px) {
    transform: rotate(${({ folded }) => (folded ? -180 : 0)}deg);
  }
`;

const FoldIconStyle = {
  width: "0.95em"
};

const InputsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 1em 0 0.5em 0;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 1px 8px 0px ${({ theme }) => theme.color.mediumGrey};
  border-radius: 15px;
  width: 13.75em;
  height: 100%;
  padding: 0.1em 0.75em;
  margin: 6px 12px;
`;

const ActionZone = styled.div`
  position: absolute;
  top: 0;
  right: -0.9em;
  @media screen and (min-width: ${({ theme }) => theme.bp.md}px) {
    right: 1.1em;
  }
`;

const ActionIcon = styled.svg`
  width: 0.8em;
`;

const DeleteIcon = styled(ActionIcon)`
  & line {
    stroke: ${({ theme }) => theme.color.error};
  }
`.withComponent(DeleteIconSvg);

const ArrowIcon = styled(ActionIcon)``.withComponent(ArrowIconSvg);

const ReversedArrowIcon = styled(ArrowIcon)`
  transform: rotate(-180deg);
`;

function mapStateToProps(state, ownProps) {
  const segment = getSegmentById(state, ownProps.id);
  return {
    inputs: segment.inputs,
    folded: segment.folded,
    canMoveUp: getSegmentIndex(state, ownProps.id) > 0,
    canMoveDown: getSegmentIndex(state, ownProps.id) < state.segments.length - 1
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleFold: () => dispatch(toggleFold(ownProps.id)),
    remove: () => dispatch(dispatchDeleteSegment(ownProps.id)),
    move: (direction) => dispatch(moveSegment(ownProps.id, direction))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Segment);
