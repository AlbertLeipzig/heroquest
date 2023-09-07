import { Treasure } from "../classes";
import { ITreasure } from "../interfaces";

export const generateTreasures = (): ITreasure[] => {
  const treasures: ITreasure[] = [];

  treasures.push(new Treasure("asdfasdf", "asdfasdfsadfsadf", 45));
  treasures.push(new Treasure("asdfasdfasd", "asdfasdfasd", 45));

  return treasures;
};
