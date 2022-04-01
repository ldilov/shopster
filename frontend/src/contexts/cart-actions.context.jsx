import React from 'react';

export const CartActionsContext = React.createContext();

export const CartActionsContextProvider = ({ children, deleteItem, increaseQty, decreaseQty, setQty }) => {
  const actions = {
    deleteItem,
    increaseQty,
    decreaseQty,
    setQty
  };

  return (
      <CartActionsContext.Provider value={actions}>
        {children}
      </CartActionsContext.Provider>
  );
}
