import React from 'react';
import { IHero, IMonster } from '../utiles/interfaces';

interface CreatureCardProps<T> {
  creature: T;
}

export const CreatureCard: React.FC<CreatureCardProps<IHero | IMonster>> = ({
  creature,
}) => {
  // Access creature properties as needed
  return (
    <div className="creature-card">
      <h3>{creature.role}</h3>
      <div className="creature-card__stats">
        <p>{creature.body} BP</p>
        <p>{creature.attackPoints} AP</p>
        <p>{creature.defensePoints} DP</p>
      </div>
    </div>
  );
};
