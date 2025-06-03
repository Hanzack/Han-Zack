import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setLoading,
  loadCartFromStorage,
  calculateTotals,
} from '../store/cartSlice';

// Typed hooks for Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Optional: Dispatchable cart actions as helpers
export const useAppActions = () => {
  const dispatch = useAppDispatch();

  return {
    addToCart: (item: Parameters<typeof addToCart>[0]) => dispatch(addToCart(item)),
    removeFromCart: (id: Parameters<typeof removeFromCart>[0]) => dispatch(removeFromCart(id)),
    updateQuantity: (data: Parameters<typeof updateQuantity>[0]) => dispatch(updateQuantity(data)),
    clearCart: () => dispatch(clearCart()),
    setLoading: (value: Parameters<typeof setLoading>[0]) => dispatch(setLoading(value)),
    loadCartFromStorage: () => dispatch(loadCartFromStorage()),
    calculateTotals: () => dispatch(calculateTotals()),
  };
};
