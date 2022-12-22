import { CartInput } from "../../db/models/Cart"

export type AddCartItemData = Pick<CartInput, "productId" | "amount">

export interface CartItem {
  id: number
  amount: number
  product: {
    imageUrl: string
    productTitle: string
    price: number
    uuid: string
  }
}

export interface SummaryResult {
  content: CartItem[]
  remainder: number
}
