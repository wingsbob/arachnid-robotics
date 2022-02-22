type Direction = 'F' | 'B' | 'L' | 'R';

const directionToTranslation: Record<Direction, [number, number]> = {
  F: [1, 0],
  B: [-1, 0],
  L: [0, -1],
  R: [0, 1],
};


export const navigate = (start: [number, number], directions: Direction[] = []) => {
  if (!start || start.length !== 2)
    throw new Error('Missing start point');

  return directions.map(x => directionToTranslation[x]).reduce(([totX, totY], [x, y]) => [totX + x, totY + y], start);
};
