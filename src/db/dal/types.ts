import { ProductOutput } from "../models/Product"
import { ColorOutput } from "../models/Color"
import { BrandOutput } from "../models/Brand"

export interface ProductFilters {
  types?: string[]
  colors?: number[]
  sort?: "htl" | "lth"
  query?: string
}

export type TProductItem = Omit<ProductOutput, "createdBy"> & {
  discountPrice: number
  Color: Pick<ColorOutput, "name" | "hex">
  Brand: Pick<BrandOutput, "name">
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
