import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCart } from '../cartSlice';
import type { RootState } from '../index'; // Make sure store/index.ts exports RootState
import type { CartState } from '../../types/Product';
import type { Dispatch } from 'redux'; // ✅ Use generic Dispatch to avoid circular refs

// Load cart from AsyncStorage
export const loadCartFromStorage = () => async (dispatch: Dispatch) => {
  try {
    const storedCart = await AsyncStorage.getItem('cart');
    if (storedCart) {
      const parsedCart: CartState = JSON.parse(storedCart);
      dispatch(setCart(parsedCart));
    }
  } catch (error) {
    console.error('Failed to load cart from storage:', error);
  }
};

// Save cart to AsyncStorage
const saveCartToStorage = async (cart: CartState) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to storage:', error);
  }
};

// Middleware to auto-persist cart state
const persistMiddleware = (storeAPI: {
  getState: () => RootState;
  dispatch: Dispatch; // ✅ Avoids recursive typing
}) => (next: (action: any) => any) => (action: any) => {
  const result = next(action);

  if (action.type.startsWith('cart/')) {
    const state = storeAPI.getState();
    saveCartToStorage(state.cart);
  }

  return result;
};

export default persistMiddleware;
