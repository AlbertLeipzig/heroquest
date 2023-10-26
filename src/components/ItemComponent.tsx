import { IItem } from '../utiles/interfaces';

export const ItemComponent = ({ item }: { item: IItem }) => {
  const { itemId, itemName, effect, description, cost, load } = item;
  return (
    <div className="item-component" key={itemId}>
      <h3>{itemName}</h3>
      <div className="item-component__main">
        <p>
          {effect.type} : {effect.amount}
        </p>
        {load.location && (
          <p>
            {load.location} : {load.amount}
          </p>
        )}
      </div>
      <div className="item-component__shop">
        <p>{cost} gold</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
