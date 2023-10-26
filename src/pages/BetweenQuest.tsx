import allItemsData from '../data/allItems-data.json';
import heroData from '../data/singleHero-data.json';

import { ItemComponent } from '../components/components';

const findReferenceItem = (itemInputValue: string) => {
  const items = allItemsData.find((item) => item.itemId === itemInputValue);
  return items || null;
};

const heroItems = heroData.equipment.map((item) => findReferenceItem(item));
export const BetweenQuests = () => {
  return (
    <div className="between-quests">
      <h1>Between Quests</h1>
      <section>
        <h2>Equipment</h2>
        <ul>
          {heroItems.map((item) => (
            <ItemComponent key={item?.itemId} item={item} />
          ))}
        </ul>
      </section>
      <section>
        <h2>Shop</h2>
        <ul>
          {allItemsData.map((item) => (
            <ItemComponent key={item.itemId} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
};
