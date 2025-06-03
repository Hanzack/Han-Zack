// src/store/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../types';

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  isLoading: false,
  lastUpdated: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          addedAt: new Date().toISOString(),
        });
      }

      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
      state.total = state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      state.lastUpdated = new Date().toISOString();
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }

      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
      state.total = state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      state.lastUpdated = new Date().toISOString();
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );

      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
      state.total = state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      state.lastUpdated = new Date().toISOString();
    },

    setCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.itemCount = action.payload.items.reduce((count, item) => count + item.quantity, 0);
      state.total = action.payload.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      state.lastUpdated = new Date().toISOString();
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
      state.lastUpdated = new Date().toISOString();
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    loadCartFromStorage: (state) => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        state.items = parsed.items || [];
        state.itemCount = parsed.itemCount || 0;
        state.total = parsed.total || 0;
        state.lastUpdated = parsed.lastUpdated || null;
      }
    },

    calculateTotals: (state) => {
      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
      state.total = state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  setCart,
  clearCart,
  setLoading,
  loadCartFromStorage,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
