const mutateCartItemQuantity = (cartItems, item, mutator) => {
  return cartItems.map((cartItem) =>
      cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + mutator } : cartItem
  );
};

const setCartItemQuantity = (cartItems, item, value) => {
  return cartItems.map((cartItem) =>
      cartItem._id === item._id ? { ...cartItem, quantity: value } : cartItem
  );
};

export const setCartItemQty = (cartItems, cartItem, qty) => {
  const existingCartItem = cartItems.find((item) => item._id === cartItem._id);

  if (existingCartItem) {
    return setCartItemQuantity(cartItems, cartItem, qty);
  }

  return [...cartItems, { ...cartItem, quantity: 1 }];
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => item._id === cartItemToAdd._id);

  if (existingCartItem) {
    return mutateCartItemQuantity(cartItems, cartItemToAdd, 1);
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find((item) => item._id === itemToDecrease._id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem._id !== existingCartItem._id);
  }

  return mutateCartItemQuantity(cartItems, itemToDecrease, -1);
};
