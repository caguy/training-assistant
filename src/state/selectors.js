export function getFieldValue(state, segmentId, fieldType) {
  let fieldValue = null;

  if (Array.isArray(state.segments))
    state.segments.forEach((segment) => {
      if (segment.id === segmentId) {
        if (!segment[fieldType]) return;
        const value = segment[fieldType].value;
        if (typeof value === "object") {
          fieldValue = { ...value };
        } else {
          fieldValue = value;
        }
      }
    });
  return fieldValue;
}

export function getOtherFieldType(state, segmentId, fieldType) {
  let otherFieldType = null;
  if (Array.isArray(state.segments))
    state.segments.forEach((segment) => {
      if (segment.id === segmentId) {
        if (fieldType === segment.inputs[0]) {
          otherFieldType = segment.inputs[1];
        } else if (fieldType === segment.inputs[1]) {
          otherFieldType = segment.inputs[0];
        }
      }
    });
  return otherFieldType;
}

export function getSegmentById(state, segmentId) {
  let segmentToReturn = null;
  if (Array.isArray(state.segments))
    state.segments.forEach((segment) => {
      if (segment.id === segmentId) {
        segmentToReturn = { ...segment };
      }
    });
  return segmentToReturn;
}

export function getTotalField(state, type) {
  let value = state.total[type].value;
  if (typeof value === "object") {
    value = Object.assign({}, state.total[type].value);
  }
  const unit = state.total[type].unit;
  return Object.assign({}, { value: value, unit: unit });
}

export const getAllValues = (state, type) =>
  state.segments.map((segment) =>
    typeof segment[type] !== "undefined" ? segment[type].value : null
  );

export function getSegmentIndex(state, id) {
  let segmentIndex = null;
  state.segments.forEach((segment, index) => {
    if (segment.id === id) segmentIndex = index;
  });
  return segmentIndex;
}
