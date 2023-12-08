import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import {
  stringifySpeed,
  stringifyPace,
  stringifyTime,
  stringifyDistance,
} from "@/utils";
import { PACE, SPEED, TIME, DISTANCE } from "@/state/constants";
import { getFieldValue, getTotalField } from "@/state/selectors";
import { UnitStyle } from "@/styles";

const Output = ({ segmentId = null, type, content }) => {
  let stringifiedValue = null;
  let label = null;
  let unit = null;

  switch (type) {
    case SPEED.type:
      stringifiedValue = stringifySpeed(content);
      label = SPEED.label;
      unit = SPEED.unit;
      break;
    case PACE.type:
      stringifiedValue = stringifyPace(content);
      label = PACE.label;
      unit = PACE.unit;
      break;
    case TIME.type:
      stringifiedValue = stringifyTime(content);
      label = TIME.label;
      unit = TIME.unit;
      break;
    case DISTANCE.type:
      stringifiedValue = stringifyDistance(content);
      label = DISTANCE.label;
      unit = DISTANCE.unit;
      break;
    default:
      stringifiedValue = content;
  }

  return (
    <Container>
      <Box>
        <Label>{label}</Label>
        <Result>
          <Value>{stringifiedValue}</Value>
          {!(type === TIME.type) && <Unit> {unit}</Unit>}
        </Result>
      </Box>
    </Container>
  );
};

Output.propTypes = {
  segmentId: PropTypes.number,
  type: PropTypes.oneOf([TIME.type, SPEED.type, PACE.type, DISTANCE.type]),
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.exact({
      min: PropTypes.number,
      sec: PropTypes.number,
    }),
    PropTypes.exact({
      h: PropTypes.number,
      min: PropTypes.number,
      sec: PropTypes.number,
    }),
  ]),
};

const Container = styled.div`
  display: flex;
  margin: auto 1em auto 0;
  flex: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.color.secondary};
  text-transform: uppercase;
  font-size: 0.75em;
  font-family: "Spartan", sans-serif;
`;

const Result = styled.div`
  white-space: nowrap;
`;

const Value = styled.span`
  color: ${({ theme }) => theme.color.lightGrey};
  font-weight: 700;
  font-size: 1.2em;
`;

const Unit = styled.span`
  ${({ theme }) => UnitStyle(theme)}
`;

function mapStateToProps(state, ownProps) {
  return {
    content:
      typeof ownProps.segmentId === "number"
        ? getFieldValue(state, ownProps.segmentId, ownProps.type)
        : getTotalField(state, ownProps.type).value,
  };
}

export default connect(mapStateToProps)(Output);
