// utils
type MinsAndSecs = [number, number];

export function secondsFromSecondAndMinutes([m, s]: MinsAndSecs): number {
  return m * 60 + s;
}

export function secondsToSecondsAndMinutes(s: number): MinsAndSecs {
  return [Math.floor(s / 60), s % 60];
}

export const zeroPad = (num: number, places: number): string =>
  String(num).padStart(places, "0");

export function formatTime(ts: number): string {
  const [m, s] = secondsToSecondsAndMinutes(ts);
  return `${zeroPad(m, 2)}:${zeroPad(s, 2)}`;
}
