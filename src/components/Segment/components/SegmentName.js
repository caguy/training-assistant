import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { getSegmentById, getSegmentIndex } from "state/selectors";
import { renameSegment } from "state/actions";
import StyledActionButton from "./StyledActionButton";
import { ReactComponent as PencilIconSvg } from "static/pencil_icon.svg";

const SegmentName = ({ segmentId, name, position, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  function toggleEdit() {
    if (isEditing) return;
    inputRef.current.focus();
    inputRef.current.selectionStart = 0;
    inputRef.current.selectionEnd = inputRef.current.value.length;
    setIsEditing(true);
  }

  function nameChangeHandler(event) {
    const name = event.target.value;
    dispatch(name);
  }

  function blurHandler(event) {
    if (!event.target.value) dispatch(null);
    setIsEditing(false);
  }

  function keyDownHandler(event) {
    if (event.key === "Enter") {
      inputRef.current.selectionStart = 0;
      inputRef.current.selectionEnd = 0;
      inputRef.current.blur();
    }
  }

  const displayedName = name ?? `Étape ${position}`;

  return (
    <Wrapper>
      <Title>
        <Input
          ref={inputRef}
          type="text"
          value={displayedName}
          onClick={toggleEdit}
          onChange={nameChangeHandler}
          onBlur={blurHandler}
          onKeyDown={keyDownHandler}
          maxLength={35}
        />
        <Placeholder aria-hidden>{displayedName}</Placeholder>
      </Title>
      {!isEditing && (
        <EditActionZone>
          <ActionButton
            id={`editSegmentName-${segmentId}`}
            className="actionButton"
            hoverColor="secondary"
            hoverStrokeColor="body"
            onClick={toggleEdit}
            aria-label="Renommer le segment"
          >
            <PencilIcon />
          </ActionButton>
        </EditActionZone>
      )}
    </Wrapper>
  );
};

SegmentName.propTypes = {
  segmentId: PropTypes.number.isRequired,
};

const Wrapper = styled.div``;

const TitleStyle = (theme) => css`
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  padding: 0.35em 0.25em 0em 1em;
  text-transform: uppercase;
  color: ${theme.color.white};
  line-height: 1.15;
`;

const Title = styled.h3`
  position: relative;
  display: inline-block;
  max-width: 94%;
  margin: 0;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 12px;
  padding: 0.25em 0.4em 0.15em 0.4em;
  z-index: 10;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Input = styled.input`
  position: absolute;
  top: 0.25em;
  left: 0;
  width: 100%;
  ${({ theme }) => TitleStyle(theme)}
  background: none;
  border: none;
  margin: 0;
  overflow: hidden;
  &[readonly] {
    outline: none;
  }
`;

const Placeholder = styled.span`
  ${({ theme }) => TitleStyle(theme)}
  display: inline-block;
  white-space: pre;
  visibility: hidden;
  max-width: 100%;
`;

const EditActionZone = styled.div`
  position: relative;
  display: inline-block;
`;

const ActionButton = styled(StyledActionButton)`
  position: absolute;
  bottom: 0.5em;
  left: -0.75em;
  z-index: 20;

  @media screen and (max-width: ${({ theme }) => theme.bp.sm}px) {
    bottom: 0;
  }
`;

const ActionIcon = styled.svg`
  width: 0.8em;
`;

const PencilIcon = styled(ActionIcon)``.withComponent(PencilIconSvg);

function mapStateToProps(state, ownProps) {
  return {
    name: getSegmentById(state, ownProps.segmentId).name,
    position: getSegmentIndex(state, ownProps.segmentId) + 1,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch: (value) => {
      return dispatch(renameSegment(ownProps.segmentId, value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SegmentName);
