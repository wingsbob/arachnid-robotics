export type Direction = 'F' | 'B' | 'L' | 'R';

interface BotLocation {
  orientation: 0 | 90 | 180 | 270;
  location: [number, number];
}

const directionToTranslation: Record<Direction, [number, number]> = {
  F: [0, 1], // Travel along +ve y axis
  R: [1, 0], // Travel along +ve x axis
  B: [0, -1], // Travel along -ve y axis
  L: [-1, 0], // Travel along -ve x axis
};

const orientationToTranslation: Record<0 | 90 | 180 | 270, [number, number]> = {
  0: [0, 1], // Facing along +ve y axis
  90: [1, 0], // Facing along +ve x axis
  180: [0, -1], // Facing along -ve y axis
  270: [-1, 0], // Facing along -ve x axis
};

const directionToRotation: Record<Direction, 0 | 90 | 180 | 270> = {
  F: 0,
  R: 90,
  B: 180,
  L: 270,
};

export const navigateV1 = (start: [number, number], directions: Direction[] = []) =>
  directions.map(x => directionToTranslation[x])
    .reduce(([totX, totY], [x, y]) => [totX + x, totY + y], start);


export const navigateV2 = (location: [number, number], orientation: 0 | 90 | 180 | 270, directions: Direction[] = []) =>
  directions.reduce<BotLocation>(({ location, orientation }, direction) => {
    const rotationToApply = directionToRotation[direction];

    if (direction === 'F') {
      const [x, y] = orientationToTranslation[orientation];
      const [totX, totY] = location;

      return { orientation, location: [Math.max(totX + x, 0), Math.max(totY + y, 0)] };
    }

    return { location, orientation: (orientation + rotationToApply) % 360 as 0 | 90 | 180 | 270 };
  }, { location, orientation });
