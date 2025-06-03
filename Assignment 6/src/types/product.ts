// src/types/product.ts

export type Product = {
  id: string; // ✅ Ensure consistency across all usages
  name: string;
  price: number;
  image?: string;
  description?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  addedAt: string;
};

export type CartState = {
  items: CartItem[];
};
