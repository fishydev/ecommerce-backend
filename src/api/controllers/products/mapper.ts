import { Product } from "../../interfaces"
import { ProductOutput } from "../../../db/models/Product"

export const toProduct = (product: ProductOutput): Product => {
  return {
    uuid: product.uuid,
    productTitle: product.productTitle,
    brandId: product.brandId,
    colorId: product.colorId,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    reviews: product.reviews,
    imageUrl: product.imageUrl,
    alt: product.alt,
  }
}
