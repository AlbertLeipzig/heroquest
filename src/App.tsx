import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quest } from './pages/Quest';
import { BetweenQuests } from './pages/BetweenQuest';
import { Contact } from './pages/Contact';
import { CreaturesPage } from './pages/CreaturesPage';
import { CombatPage } from './pages/CombatPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/between-quests" element={<BetweenQuests />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creatures-page" element={<CreaturesPage />}></Route>
        <Route path="/combat" element={<CombatPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
