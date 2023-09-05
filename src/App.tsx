import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quest } from './pages/Quest';
import { BetweenQuests } from './pages/BetweenQuest';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/between-quests" element={<BetweenQuests />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;