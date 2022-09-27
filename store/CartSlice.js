import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      let itemId = action.payload.id;
      if (state.cartItems.length === 0) {
        state.cartItems = [...state.cartItems, action.payload];
      } else {
        let isExistingId = state.cartItems.findIndex(
          (item) => item.id === itemId
        );

        if (isExistingId < 0) {
          state.cartItems = [...state.cartItems, action.payload];
        } else {
          let existingItem = state.cartItems[isExistingId];

          let quantity = existingItem.quantity + 1;

          existingItem = {
            ...existingItem,
            quantity: quantity,
          };

          state.cartItems[isExistingId] = existingItem;
        }
      }

      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeFromCart(state, action) {
      let itemId = action.payload.id;
      let isExistingId = state.cartItems.findIndex(
        (item) => item.id === itemId
      );
      let existingItem = state.cartItems[isExistingId];
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      } else {
        existingItem = { ...existingItem, quantity: existingItem.quantity - 1 };
        state.cartItems[isExistingId] = existingItem;
      }
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;
