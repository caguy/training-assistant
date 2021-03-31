function isSpeedValid(speed) {
  try {
    const numericSpeed = Number(speed);
    if (!Number.isNaN(numericSpeed) && numericSpeed > 0) {
      return true;
    } else {
      throw new Error();
    }
  } catch (e) {
    return false;
  }
}

function isPaceValid(pace) {
  try {
    const min = Number(pace.min);
    const sec = Number(pace.sec);
    if (
      Number.isInteger(min) &&
      Number.isInteger(sec) &&
      min >= 0 &&
      sec >= 0 &&
      sec < 60 &&
      !(min + sec === 0)
    ) {
      return true;
    }
    throw new Error();
  } catch (e) {
    return false;
  }
}

function isTimeValid(time) {
  try {
    const h = Number(time.h);
    const min = Number(time.min);
    const sec = Number(time.sec);
    if (
      Number.isInteger(h) &&
      Number.isInteger(min) &&
      Number.isInteger(sec) &&
      h >= 0 &&
      min >= 0 &&
      min < 60 &&
      sec >= 0 &&
      sec < 60 &&
      !(h + min + sec === 0)
    ) {
      return true;
    } else {
      throw new Error();
    }
  } catch (e) {
    return false;
  }
}

function isDistanceValid(distance) {
  try {
    const numericDistance = Number(distance);
    if (!Number.isNaN(numericDistance) && numericDistance > 0) {
      return true;
    } else {
      throw new Error();
    }
  } catch (e) {
    return false;
  }
}

function getNumericPace(pace) {
  if (isPaceValid(pace)) {
    return Number(pace.min) + Number(pace.sec) / 60;
  }
  return null;
}

function getParsedPace(numericPace) {
  try {
    let min = Math.floor(numericPace);
    let sec = Math.round((numericPace % 1) * 60);
    if (sec === 60) {
      sec = 0;
      ++min;
    }
    return { min: min, sec: sec };
  } catch (e) {
    return null;
  }
}

export function convertSpeedToPace(speed) {
  if (isSpeedValid(speed)) {
    const numericPace = 1 / (Number(speed) / 60);
    return getParsedPace(numericPace);
  }
  return null;
}

export function convertPaceToSpeed(pace) {
  if (isPaceValid(pace)) {
    const numericPace = getNumericPace(pace);
    return 60 / numericPace;
  }
  return null;
}

export function stringifyPace(pace) {
  if (isPaceValid(pace)) {
    return `${pace.min}:${String(pace.sec).padStart(2, "0")}`;
  }
  return "--:--";
}

export function stringifySpeed(speed) {
  if (isSpeedValid(speed)) {
    return parseFloat(speed).toFixed(1);
  }
  return "--.-";
}

export function stringifyTime(time) {
  if (isTimeValid(time)) {
    const h = String(time.h).padStart(2, "0");
    const min = String(time.min).padStart(2, "0");
    const sec = String(time.sec).padStart(2, "0");
    return `${h}:${min}:${sec}`;
  }
  return "--:--:--";
}

export function stringifyDistance(distance) {
  if (isDistanceValid(distance)) {
    return parseFloat(distance).toFixed(2);
  }
  return "--.--";
}

export function getNumericTime(time) {
  if (isTimeValid(time)) {
    return Number(time.h) + Number(time.min) / 60 + Number(time.sec) / 3600;
  }
  return null;
}

export function getParsedTime(numericTime) {
  try {
    let h = Math.floor(numericTime);
    let min = (numericTime % 1) * 60;
    if (min > 60 - 1 / 60) {
      min = 0;
      ++h;
    }
    let sec = Math.round((min % 1) * 60);
    if (sec === 60) {
      sec = 0;
      ++min;
    }
    return { h: h, min: Math.floor(min), sec: sec };
  } catch (e) {
    return null;
  }
}

export function calculateDistance(speed, time) {
  if (isSpeedValid(speed) && isTimeValid(time)) {
    const numericTime = getNumericTime(time);
    return Math.round(Number(speed) * Number(numericTime) * 1000) / 1000;
  }
  return null;
}

export function calculateTime(distance, speed) {
  if (isDistanceValid(distance) && isSpeedValid(speed)) {
    const numericTime = Number(distance) / Number(speed);
    return getParsedTime(numericTime);
  }
  return null;
}

export function calculateSpeed(distance, time) {
  if (isDistanceValid(distance) && isTimeValid(time)) {
    const numericTime = getNumericTime(time);
    return distance / numericTime;
  }
  return null;
}
