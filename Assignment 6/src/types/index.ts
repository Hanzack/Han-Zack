// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  isLoading: boolean;
  lastUpdated: string | null;
}
