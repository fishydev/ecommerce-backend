import { ProductOutput } from "../models/Product"

export interface ProductFilters {
  types?: string[]
  colors?: string[]
  sort?: "htl" | "lth"
  query?: string
}

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
