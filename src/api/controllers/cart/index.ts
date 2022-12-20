import { getByEmail as getUserByEmail } from "../../../db/dal/user"
import { CartInput, CartOutput } from "../../../db/models/Cart"
import { AddCartItemDTO, RemoveCartItemDTO } from "../../dto/cart.dto"
import { CartItem } from "../../interfaces"
import { SummaryResult } from "../../interfaces/cart.interface"
import * as cartService from "../../services/CartService"
import * as productService from "../../services/ProductService"

export const getAll = async (): Promise<CartOutput[]> => {
  return await cartService.getAll()
}

export const getByUserId = async (userId: number): Promise<CartOutput[]> => {
  return await cartService.getByUserId(userId)
}

export const addItem = async (payload: AddCartItemDTO): Promise<boolean> => {
  const product = await productService.getByUuid(payload.productUuid)

  if (!product) {
    throw { code: 404, message: "Product not found" }
  }

  const addCartItemPayload: CartInput = {
    productId: product.id,
    userId: payload.userId,
  }

  return await cartService.addItem(addCartItemPayload)
}

export const substractItem = async (id: number): Promise<boolean> => {
  return await cartService.substractItem(id)
}

export const deleteItem = async (id: number): Promise<boolean> => {
  return await cartService.deleteItem(id)
}

export const getSummary = async (userId: number): Promise<SummaryResult> => {
  return await cartService.getSummary(userId)
}
