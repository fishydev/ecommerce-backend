import { CartOutput } from "../../../db/models/Cart"

export const toCart = (payload: CartOutput) => {
  return {
    id: payload.id,
    productId: payload.productId,
  }
}
