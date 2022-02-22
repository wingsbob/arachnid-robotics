import { parseInput } from './parseInput';
import { navigateV1 } from './navigator';

const [,,input] = process.argv;

const { x, y, directions } = parseInput(input);

console.log(navigateV1([x, y], directions));
