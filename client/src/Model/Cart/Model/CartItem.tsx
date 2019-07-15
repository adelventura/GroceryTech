import Item from "./Item";

export default interface CartItem {
  id: string;
  quantity: number;
  item: Item;
}
