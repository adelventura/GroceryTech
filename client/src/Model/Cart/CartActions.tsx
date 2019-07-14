import Item from "./Model/Item";

// Delete the cart
interface CartDeleteAction {
  type: "delete";
}

// Add an item to cart
interface CartAddItemAction {
  type: "add";

  // item id
  item: Item;
  quantity: number;
}

// Delete an item
interface CartDeleteItemAction {
  type: "delete_item";

  // cart item id
  id: string;
}

type CartAction = CartDeleteAction | CartAddItemAction | CartDeleteItemAction;
