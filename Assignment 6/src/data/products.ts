export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  total: number;           // ✅ Add this
  itemCount: number;       // ✅ Add this
  isLoading: boolean;
  lastUpdated: string | null; // ✅ Add this
};
export const products: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 14',
    price: 999,
    image: 'https://example.com/iphone14.jpg',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S22',
    price: 899,
    image: 'https://example.com/galaxys22.jpg',
  },
  {
    id: '3',
    name: 'Google Pixel 6',
    price: 799,
    image: 'https://example.com/pixel6.jpg',
  },
];