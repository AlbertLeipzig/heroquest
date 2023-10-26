import React from 'react';
import { IItem } from '../utiles/interfaces';

export const HeroItemComponent: React.FC<IItem> = ({ data }) => {
  const { itemName, effect, load } = data;
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
    </div>
  );
};
