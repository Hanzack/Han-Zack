// src/types/cartTypes.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}