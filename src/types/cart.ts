import Product from "./product";

export type CartItem = {
  productId: string;
  quentity: number;
};

export type CartItemWithProduct = {
  productId: string;
  quentity: number;
  product: Product;
}