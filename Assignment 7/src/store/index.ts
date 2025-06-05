// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import notificationReducer from './notificationSlice';
import userPreferencesReducer from './userPreferencesSlice';
import userReducer from './userSlice';
// Optional: Uncomment if you have productSlice.ts
// import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notifications: notificationReducer,
    userPreferences: userPreferencesReducer,
    user: userReducer,
    // products: productReducer, // Uncomment if you have productSlice.ts
  },
});

// Infer types for use throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
