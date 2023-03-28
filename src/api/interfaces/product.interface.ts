import { IBrand } from "./brand.interface"
import { ICategory } from "./category.interface"
import { IColor } from "./color.interface"

export interface IProduct {
  id: number
  uuid: string
  productTitle: string
  category: Pick<ICategory, "type">
  brand: Pick<IBrand, "name">
  color: Pick<IColor, "name" | "hex">
  description: string
  price: number
  discountPercentage: number
  rating: number
  reviews: number
  imageUrl: string
  alt: string
}

export interface IProductFilters {
  types: string[]
  colors: number[]
  sort: "htl" | "lth"
  query: string
}
