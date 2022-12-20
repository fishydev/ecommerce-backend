import { CartOutput } from "../../db/models/Cart"

export type CartItem = CartOutput

export type AddCartItemData = Pick<CartItem, "productId" | "amount">

export interface SummaryItem {
  id: number
  amount: number
  product: {
    imageUrl: string
    productTitle: string
  }
}

export interface SummaryResult {
  content: SummaryItem[]
  remainder: number
}
