import React from 'react';
import { IItems } from '../utiles/interfaces';

export const ShopItemComponent: React.FC<IItems> = ({ data }) => {
  const { itemName, effect, description, cost, load } = data;
  return (
    <div className="item-component">
      <h3>{itemName}</h3>
      <p>
        {effect.type} : {effect.amount}
      </p>
      {load.location && (
        <p>
          {load.location} : {load.amount}
        </p>
      )}
      <p>{cost} gold</p>
      <p>{description}</p>
      <button>Buy</button>
    </div>
  );
};
