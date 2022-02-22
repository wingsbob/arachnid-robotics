import { Direction } from "./navigator";

const validDirections = ['L', 'R', 'F', 'B'];

interface ParsedInput {
  x: number;
  y: number;
  directions: Direction[];
  version: number;
}

const isOnlyDirections = (arr: string[]): arr is Direction[] =>
  arr.every(str => validDirections.includes(str));

export const parseInput = (str: string): ParsedInput => {
  const [rawX, rawY, versionOrDirections, rawDirections] = str.split(',');

  const x = parseInt(rawX);
  const y = parseInt(rawY);

  if (Number.isNaN(x) || Number.isNaN(y))
  throw new Error('Invalid input format');

  const hasVersion = !Number.isNaN(parseInt(versionOrDirections));
  const directions = (hasVersion ? rawDirections : versionOrDirections).split('');
  const version = hasVersion ? parseInt(versionOrDirections) : 1;

  if (!isOnlyDirections(directions))
    throw new Error('Invalid input format');

  return { x, y, directions, version };
};
