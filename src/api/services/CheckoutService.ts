import * as checkoutDal from "../../db/dal/checkout"
import * as cartDal from "../../db/dal/cart"
import { CheckoutOutput, CheckoutInput } from "../../db/models/Checkout"
import { CartOutput } from "../../db/models/Cart"
import { CartItem } from "../interfaces"

export const getAll = async (): Promise<CheckoutOutput[]> => {
  return checkoutDal.getAll()
}

export const getByUserId = async (
  userId: number
): Promise<CheckoutOutput[]> => {
  return checkoutDal.getByUserId(userId)
}

export const create = async (payload: CheckoutInput): Promise<boolean> => {
  const checkout = await checkoutDal.create(payload)

  await cartDal.checkoutCart(payload.userId, checkout.id)

  return checkout ? true : false
}
