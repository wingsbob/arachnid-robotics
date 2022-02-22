import { parseInput } from './parseInput';
import { navigateV1, navigateV2, navigateV3 } from './navigator';


const [,,input] = process.argv;

const { x, y, version, directions, orientation } = parseInput(input);

const navigators = {
  1: () => navigateV1([x, y], directions),
  2: () => navigateV2([x, y], orientation, directions),
  3: () => navigateV3([x, y], orientation, directions),
};
console.log(navigators[version]());
