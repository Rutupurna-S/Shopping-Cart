import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 25.0,
    image: "/images/t-shirt.jpg",
    availableQuantity: 10,
    category: "Apparel",
  },
  {
    id: 2,
    name: "High-Top Sneakers",
    price: 75.0,
    image: "/images/shoes.jpg",
    availableQuantity: 5,
    category: "Footwear",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 150.0,
    image: "/images/headphones.jpg",
    availableQuantity: 8,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 15.0,
    image: "/images/bottle.jpg",
    availableQuantity: 20,
    category: "Accessories",
  },
];
