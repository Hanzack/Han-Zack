import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from '../types';

const STORAGE_KEY = 'CART_ITEMS';

export const saveCartToStorage = async (cart: CartItem[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};

export const loadCartFromStorage = async (): Promise<CartItem[]> => {
  try {
    const storedCart = await AsyncStorage.getItem(STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Error loading cart:', error);
    return [];
  }
};
export const clearCartStorage = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing cart storage:', error);
  }
};