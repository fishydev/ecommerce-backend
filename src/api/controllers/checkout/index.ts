import * as checkoutService from "../../services/CheckoutService"
import { CheckoutInput, CheckoutOutput } from "../../../db/models/Checkout"
import { CartItem } from "../../interfaces"

export const getAll = async (): Promise<CheckoutOutput[]> => {
  return await checkoutService.getAll()
}

export const getByUserId = async (
  userId: number
): Promise<CheckoutOutput[]> => {
  return await checkoutService.getByUserId(userId)
}

export const create = async (data: CheckoutInput): Promise<boolean> => {
  return await checkoutService.create(data)
}

export const getCheckoutCartItems = async (
  checkoutId: number,
  userId: number
): Promise<CartItem[]> => {
  return await checkoutService.getCheckoutCartItems(checkoutId, userId)
}
