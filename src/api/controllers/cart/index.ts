import { getByEmail as getUserByEmail } from "../../../db/dal/user"
import { CartOutput } from "../../../db/models/Cart"
import { AddCartItemDTO, RemoveCartItemDTO } from "../../dto/cart.dto"
import { CartItem } from "../../interfaces"
import * as service from "../../services/CartService"

export const getAll = async (): Promise<CartOutput[]> => {
  return await service.getAll()
}

export const getByUserId = async (userId: number): Promise<CartOutput[]> => {
  return await service.getByUserId(userId)
}

export const addItem = async (payload: AddCartItemDTO): Promise<boolean> => {
  return await service.addItem(payload)
}

export const removeItem = async (
  payload: RemoveCartItemDTO
): Promise<boolean> => {
  return await service.removeItem(payload)
}

export const deleteItem = async (id: number): Promise<boolean> => {
  return await service.deleteItem(id)
}
