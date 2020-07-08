const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let addedItem = state.items.find((item) => item.id === action.payload.id);
    let existed_item = state.cartItems.find(
      (item) => action.payload.id === item.id
    );
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        cartItems: [...state.cartItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === "REMOVE") {
    let itemToRemove = state.cartItems.find(
      (item) => item.id === action.payload
    );
    let new_items = state.cartItems.filter(
      (item) => action.payload !== item.id
    );
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      cartItems: new_items,
      total: newTotal,
    };
  }
  if (action.type === "INCREASE") {
    let addedItem = state.items.find((item) => item.id === action.payload.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === "DECREASE") {
    let addedItem = state.items.find((item) => item.id === action.payload.id);
    if (addedItem.quantity === 1) {
      let new_items = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        cartItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }
};

export default cartReducer;
