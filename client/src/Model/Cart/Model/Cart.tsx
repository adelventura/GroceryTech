import CartItem from "./CartItem";

export default interface Cart {
  id: string;
  items: CartItem[];
}
