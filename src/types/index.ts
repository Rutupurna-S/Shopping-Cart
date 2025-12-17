export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subCategory?: string;
  availableQuantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
