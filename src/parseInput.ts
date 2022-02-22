import { Direction } from "./navigator";

const validDirections = ['L', 'R', 'F', 'B'];

type Orientation = 0 | 90 | 180 | 270;

interface ParsedInput {
  x: number;
  y: number;
  directions: Direction[];
  orientation: Orientation;
  version: number;
}

const isOrientation = (value: number): value is Orientation =>
  value % 360 === value && value % 90 === 0;

const isOnlyDirections = (arr: string[]): arr is Direction[] =>
  arr.every(str => validDirections.includes(str));

export const parseInput = (str: string): ParsedInput => {
  const [rawX, rawY, orientationOrDirections, rawVersion, rawDirections] = str.split(',');

  const x = parseInt(rawX, 10);
  const y = parseInt(rawY, 10);

  if (Number.isNaN(x) || Number.isNaN(y))
    throw new Error('Invalid input format');

  const hasVersion = !Number.isNaN(parseInt(rawVersion));
  const version = hasVersion ? parseInt(rawVersion) : 1;
  const directions = (version === 2 ? rawDirections : orientationOrDirections).split('');
  const orientation = version === 1 ? 0 : parseInt(orientationOrDirections, 10)

  if (!isOnlyDirections(directions) || !isOrientation(orientation))
    throw new Error('Invalid input format');

  return { x, y, directions, version, orientation };
};
