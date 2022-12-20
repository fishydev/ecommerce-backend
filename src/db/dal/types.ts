import { ProductOutput } from "../models/Product"

export interface ProductFilters {
  types?: string[]
  colors?: string[]
  sort?: "htl" | "lth"
  query?: string
}

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

export interface CartItem {
  id: number
  amount: number
  total: number
  product: Pick<ProductOutput, "productTitle" | "imageUrl" | "price">
}
