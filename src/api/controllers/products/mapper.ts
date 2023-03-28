import { ProductOutput } from "../../../db/models/Product"
import { TProductItem } from "../../../db/dal/types"
import { IProduct } from "../../interfaces"

export const toProduct = (product: TProductItem): IProduct => {
  return {
    id: product.id,
    uuid: product.uuid,
    productTitle: product.productTitle,
    category: product.Category,
    brand: product.Brand,
    color: product.Color,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    reviews: product.reviews,
    imageUrl: product.imageUrl,
    alt: product.alt,
  }
}
