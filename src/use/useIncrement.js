// eslint-disable-next-line no-unused-vars
export function useincrementTime(second, minute, hour) {
  second = parseInt(second) + 1;
  if (second === 60) {
    second = 0
    minute = parseInt(minute) + 1;
  }
  if (minute === 60) {
    minute = 0
    hour = parseInt(hour) + 1;
  }
}
