import { parseInput } from './parseInput';
import { navigate } from './navigator';

const [,,input] = process.argv;

const { x, y, directions } = parseInput(input);

console.log(navigate([x, y], directions));
