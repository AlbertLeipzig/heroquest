import { IHero, IMonster } from '../utiles/interfaces';
import { heroes, monsters } from '../utiles/cleanedData';

export const CreaturesPage: React.FC = () => {
  return (
    <div className="creatures-page">
      <h1>Creatures</h1>
      <div className="creatures-page__heroes-container">
        {heroes.map((hero: IHero) => (
          <div key={hero.heroId} className="hero">
            <h3>{hero.role}</h3>
            <div className="hero__stats">
              <p>{hero.body} BP</p>
              <p>{hero.attackPoints} AP</p>
              <p>{hero.defensePoints} DP</p>
            </div>
          </div>
        ))}
      </div>
      <div className="creatures-page__monsters-container">
        {monsters.map((monster: IMonster) => (
          <div key={monster.monsterId} className="monster">
            <h3>{monster.role}</h3>
            <div className="monster__stats">
              <p>{monster.body} BP</p>
              <p>{monster.attackPoints} AP</p>
              <p>{monster.defensePoints} DP</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
