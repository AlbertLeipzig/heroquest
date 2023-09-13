import { NavLink } from 'react-router-dom';
export const TempHeader = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/creatures-page">Creatures</NavLink>
        <NavLink to="/between-quests">Between Quests</NavLink>
      </nav>
    </header>
  );
};
