import { ITrap } from '../interfaces';
import { Trap } from '../classes';
import trapsData from '../../data/traps-data.json';
import { rollMultipleDices } from './rollDices';

export const generateTraps = (): ITrap[] => {
  const traps: ITrap[] = [];

  const selectedTrap = trapsData[rollMultipleDices(1)];
  const { trapId, trapName, damage, discovered, disarmed, description } =
    selectedTrap;

  const localTrap = new Trap(
    trapId,
    trapName,
    damage,
    description,
    discovered,
    disarmed
  );

  traps.push(localTrap);

  return traps;
};
