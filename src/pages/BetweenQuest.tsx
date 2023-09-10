import allItemsData from '../data/allItems-data.json';
import heroData from '../data/singleHero-data.json';

import { HeroItemComponent } from '../components/HeroItemComponent';
import { ShopItemComponent } from '../components/components';

const findReferenceItem = (itemInputValue: string) => {
  return allItemsData.find((item) => item.itemId === itemInputValue);
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
            <HeroItemComponent key={item?.itemId} data={item} />
          ))}
        </ul>
      </section>
      <section>
        <h2>Shop</h2>
        <ul>
          {allItemsData.map((item) => (
            <ShopItemComponent key={item.itemId} data={item} />
          ))}
        </ul>
      </section>
    </div>
  );
};
