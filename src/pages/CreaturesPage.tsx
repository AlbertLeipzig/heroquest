import { IHero, IMonster } from '../utiles/interfaces';
import { heroes, monsters } from '../utiles/cleanedData';
import { CreatureCard } from '../components/CreatureCard';

export const CreaturesPage: React.FC = () => {
  return (
    <div className="creatures-page">
      <h1>Creatures</h1>
      <div className="creatures-page__heroes-container">
        {heroes.map((hero: IHero) => (
          <div key={hero.heroId} className="hero">
            <CreatureCard creature={hero} />
            {/*
            <h3>{hero.role}</h3>
            <div className="hero__stats">
              <p>{hero.body} BP</p>
              <p>{hero.attackPoints} AP</p>
              <p>{hero.defensePoints} DP</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="creatures-page__monsters-container">
        {monsters.map((monster: IMonster) => (
          <CreatureCard creature={monster} />
        ))}
      </div>
    </div>
  );
};
