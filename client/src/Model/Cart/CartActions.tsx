import Item from "./Model/Item";

// Delete the cart
export interface CartDeleteAction {
  type: "delete";
}

// Add an item to cart
export interface CartAddItemAction {
  type: "add";

  // item id
  item: Item;
  quantity: number;
}

// Delete an item
export interface CartDeleteItemAction {
  type: "delete_item";

  // cart item id
  id: string;
}
