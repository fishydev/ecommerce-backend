import * as cartDal from "../../db/dal/cart"
import { SummaryResult } from "../../db/dal/types"
import { CartInput, CartOutput } from "../../db/models/Cart"

export const getAll = (): Promise<CartOutput[]> => {
  return cartDal.getAll()
}

export const getByUserId = (userId: number): Promise<CartOutput[]> => {
  return cartDal.getByUserId(userId)
}

export const addItem = (payload: CartInput): Promise<boolean> => {
  return cartDal.addItem(payload)
}

export const substractItem = (id: number): Promise<boolean> => {
  return cartDal.substractItem(id)
}

export const deleteItem = (id: number): Promise<boolean> => {
  return cartDal.deleteItem(id)
}

export const getSummary = (userId: number): Promise<SummaryResult> => {
  return cartDal.getSummary(userId)
}

// export const getOptions = (): Promise<
//   Pick<CartOutput, "uuid" | "type">[]
// > => {
//   return cartDal.getOptions()
// }
