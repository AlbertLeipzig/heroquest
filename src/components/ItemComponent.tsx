import React from 'react';

export const ItemComponent: React.FC<IItems> = ({ data }) => {
  const { itemName, effect, description, cost, load } = data;
  return (
    <div className="item-component">
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
