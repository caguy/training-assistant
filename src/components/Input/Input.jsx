import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { PACE, SPEED, DISTANCE, TIME } from "@/state/constants";
import {
  SpeedInput,
  PaceInput,
  DistanceInput,
  TimeInput,
  FieldType,
} from "./components";

const Input = ({ segmentId, type, options }) => {
  const inputMap = {
    [SPEED.type]: SpeedInput,
    [PACE.type]: PaceInput,
    [DISTANCE.type]: DistanceInput,
    [TIME.type]: TimeInput,
  };

  return (
    <Wrapper>
      <InputContainer>
        <FieldType segmentId={segmentId} value={type} options={options} />
      </InputContainer>
      <InputContainer>
        {React.createElement(inputMap[type], { segmentId: segmentId })}
      </InputContainer>
    </Wrapper>
  );
};

Input.propTypes = {
  segmentId: PropTypes.number.isRequired,
  type: PropTypes.oneOf([TIME.type, SPEED.type, PACE.type, DISTANCE.type])
    .isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOf([TIME.type, SPEED.type, PACE.type, DISTANCE.type])
  ).isRequired,
};

const Wrapper = styled.div`
  padding-bottom: 0.3em;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.25em 0;
`;

export default Input;
