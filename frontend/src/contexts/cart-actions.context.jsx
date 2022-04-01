import React from 'react';

export const CartActionsContext = React.createContext();

export const CartActionsContextProvider = ({ children, deleteItem, increaseQty, decreaseQty }) => {
  const actions = {
    deleteItem,
    increaseQty,
    decreaseQty
  };

  return (
      <CartActionsContext.Provider value={actions}>
        {children}
      </CartActionsContext.Provider>
  );
}
