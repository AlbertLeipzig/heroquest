import allItemsData from '../data/allItems-data.json';
import heroData from '../data/hero-data.json';
import { ShopItemComponent } from '../components/ShopItemComponent';
import { HeroItemComponent } from '../components/HeroItemComponent';

const { equipment, gold } = heroData;

const findReferenceItem = (itemInputValue: string) => {
  return allItemsData.find((item) => item.itemId === itemInputValue);
};

const completeItemsList = (itemsList: string[]) => {
  return itemsList.map((item) => findReferenceItem(item));
};

const _items = completeItemsList(equipment);

export const BetweenQuests = () => {
  return (
    <div className="between-quests">
      <section>
        <h2>Equipment</h2>
        <ul>
          {_items.map((item) => (
            <HeroItemComponent key={item?.itemId} data={item} />
          ))}
        </ul>
        <h3>Gold : {gold}</h3>
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
