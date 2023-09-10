import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className="home">
      <h1>Hero Quest</h1>
      <img
        src="https://images.unsplash.com/photo-1569008593571-a98b326533a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxmYW50YXN5JTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="image_horizontal"
      />
      <p>
        Embark on a legendary adventure that will take you through mysterious
        dungeons, treacherous forests, and ancient castles. HeroQuest is not
        just a game; it's a journey into a realm of magic, monsters, and
        heroism. Are you ready to become a fearless warrior, a cunning wizard,
        or a nimble elf? Gather your friends, choose your characters, and step
        into a world filled with quests, challenges, and untold treasures.
        Assemble your party, for danger lurks around every corner. Face off
        against goblins, skeletons, and mighty dragons as you explore dungeons
        teeming with secrets. Collect powerful artifacts, cast potent spells,
        and uncover the mysteries of HeroQuest. Whether you're a seasoned
        adventurer or new to the world of tabletop gaming, HeroQuest welcomes
        all. The epic awaits, and your destiny is yours to shape. Will you rise
        as the hero of legends, or will darkness claim the realm? The choice is
        yours! So, gather your courage, sharpen your wits, and let the adventure
        begin. HeroQuest calls upon you to become a legend!
      </p>
      <button>
        <Link to="/quest">Enter</Link>
      </button>
    </div>
  );
};
