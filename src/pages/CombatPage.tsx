import { IBeing } from '../utiles/interfaces';
import { monsters, heroes } from '../utiles/cleanedData';
import { rollMultipleDices } from '../utiles/methods/rollDices';

const singleHero = heroes[0];
const monster = monsters[0];

const attacker = singleHero;
const defendant = monster;

const combat = (attacker: IBeing, defendant: IBeing) => {
  const attackValue = rollMultipleDices(attacker.attackPoints);
  const defenseValue = rollMultipleDices(defendant.attackPoints);
  return attackValue < defenseValue
    ? ' the defense was too strong'
    : `${defendant.role} lost ${attackValue - defenseValue} HP`;
};

export const CombatPage = () => {
  const combatOutcome = combat(attacker, defendant);
  return (
    <div className="combat-page">
      <p>{combatOutcome}</p>
    </div>
  );
};
