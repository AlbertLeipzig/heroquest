import { IHero, IMonster } from '../utiles/interfaces';
import { heroes, monsters } from '../utiles/cleanedData';

export const CreaturesPage: React.FC = () => {
  return (
    <div className="creatures-page">
      <div className="creatures-page__heroes-container">
        {heroes.map((hero: IHero) => (
          <div key={hero.heroId} className="hero">
            <h3>{hero.role}</h3>
            <p>{hero.body}</p>
            <p>{hero.attackPoints}</p>
            <p>{hero.defensePoints}</p>
          </div>
        ))}
      </div>
      <div className="creatures-page__monsters-container">
        {monsters.map((monster: IMonster) => (
          <div key={monster.monsterId} className="monster">
            <h3>{monster.role}</h3>
            <p>{monster.body}</p>
            <p>{monster.attackPoints}</p>
            <p>{monster.defensePoints}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
