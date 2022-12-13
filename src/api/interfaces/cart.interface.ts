import { CartOutput } from "../../db/models/Cart"

export type CartItem = CartOutput

export type AddCartItemData = Pick<CartItem, "productId" | "amount">
