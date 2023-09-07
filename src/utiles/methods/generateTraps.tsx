import { ITrap } from '../interfaces';
import { Trap } from '../classes';

export const generateTraps = (): ITrap[] => {
  const traps: ITrap[] = [];

  traps.push(new Trap('sdfsf', 'SDLFKSJDFLSDKJF', 23, false, false));
  return traps;
};
