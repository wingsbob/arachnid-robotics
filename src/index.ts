import { parseInput } from './parseInput';
import { navigateV1, navigateV2 } from './navigator';

const [,,input] = process.argv;

const { x, y, version, directions, orientation } = parseInput(input);

console.log(version === 1 ? navigateV1([x, y], directions) : navigateV2([x, y], orientation, directions));
