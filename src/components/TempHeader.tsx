import { NavLink } from 'react-router-dom';
export const TempHeader = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/creatures-page">Creatures</NavLink>
      <NavLink to="/quest">Quest</NavLink>
      <NavLink to="/combat">Combat</NavLink>
      <NavLink to="/between-quests">Between Quests</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
};
