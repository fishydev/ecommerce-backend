export interface IProduct {
  id: number
  categoryId: number
  uuid: string
  productTitle: string
  brand: string
  color: string
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
  colors: string[]
  sort: "htl" | "lth"
  query: string
}

export type Product = Omit<IProduct, "id" | "categoryId">
