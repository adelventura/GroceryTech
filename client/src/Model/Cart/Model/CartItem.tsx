import React from "react";
import Item from "./Item";

interface CartItem {
  id: string;
  quantity: number;
  item: Item;
}

export default CartItem;
