import { IMonster } from '../utiles/interfaces';

export const MonsterPage = ({
  role,
  body,
  movePoints,
  attackPoints,
  defensePoints,
}): IMonster => {
  return (
    <div className="monster-page">
      <h1>{role}</h1>
      <div className="monster-page__characteristics">
        <p>{movePoints}</p>
        <p>{body}</p>
        <p>{attackPoints}</p>
        <p>{defensePoints}</p>
      </div>
    </div>
  );
};
