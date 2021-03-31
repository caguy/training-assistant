import React /* , { useState } */ from "react";
import { connect } from "react-redux";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { getSegmentById, getSegmentIndex } from "state/selectors";
//import StyledActionButton from "./StyledActionButton";

const SegmentName = ({ segmentId, name, position }) => {
  // TODO Modification du nom du segment

  /* const [isEditing, setIsEditing] = useState(false); */

  const displayedName = name ?? `Étape ${position}`;

  return (
    <Wrapper>
      <Title>
        {/* <Input type="text" value={displayedName} readonly={isEditing} /> */}
        <Input
          type="text"
          value={displayedName}
          readonly={true}
          onChange={() => {
            console.log("Changed");
          }}
        />
        <Placeholder aria-hidden>{displayedName}</Placeholder>
      </Title>
      {/* <EditButton>X</EditButton> */}
    </Wrapper>
  );
};

SegmentName.propTypes = {
  segmentId: PropTypes.number.isRequired,
  name: PropTypes.string
};

const Wrapper = styled.div`
  position: relative;
`;

const TitleStyle = (theme) => css`
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  padding: 0.15em 0.75em 0em 0.75em; /* 0.55em 1.25em 0.25em 1.25em */
  text-transform: uppercase;
  color: ${theme.color.white};
  line-height: 1.15;
`;

const Title = styled.h3`
  position: absolute;
  max-width: 100%;
  margin: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 12px;
  padding: 0.25em 0.4em 0.15em 0.4em;
  z-index: 10;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Input = styled.input`
  position: absolute;
  top: 0.4em;
  left: 0.5em;
  width: 100%;
  ${({ theme }) => TitleStyle(theme)}
  background: none;
  border: none;
  margin: 0;
  overflow: hidden;
`;

const Placeholder = styled.span`
  ${({ theme }) => TitleStyle(theme)}
  display: inline-block;
  white-space: pre;
  visibility: hidden;
  max-width: 100%;
`;

/* const EditButton = styled(StyledActionButton)`
  position: absolute;
  right: 0;
  top: 0;
  width: 10em;
  height: 10em;
`; */

function mapStateToProps(state, ownProps) {
  return {
    name: getSegmentById(state, ownProps.segmentId).name,
    position: getSegmentIndex(state, ownProps.segmentId) + 1
  };
}

export default connect(mapStateToProps)(SegmentName);
