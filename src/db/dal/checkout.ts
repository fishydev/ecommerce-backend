import { Checkout } from "../models"
import { CheckoutInput, CheckoutOutput } from "../models/Checkout"

export const getAll = async (): Promise<CheckoutOutput[]> => {
  return Checkout.findAll({})
}

export const getByUserId = async (
  userId: number
): Promise<CheckoutOutput[]> => {
  const result = await Checkout.findAll({
    where: {
      userId: userId,
    },
    order: [["createdAt", "DESC"]],
  })

  return result
}

export const create = async (data: CheckoutInput): Promise<CheckoutOutput> => {
  const result = await Checkout.create(data)

  return result
}
