// import { Op } from "sequelize"
import { Cart } from "../models"
import { CartInput, CartOutput } from "../models/Cart"

export const getAll = async (): Promise<CartOutput[]> => {
  return Cart.findAll({})
}

// export const getByUserId = async (id: number): Promise<CartOutput[]> => {
//   return Cart.findAll({
//     include: [
//       {
//         model: User,
//       }
//     ]
//   })
// }

// export const getByEmail = async (email: string): Promise<CartOutput | null> => {
//   return Cart.findOne({
//     where: {
//       email: email,
//     },
//   })
// }

export const getByUserId = async (userId: number): Promise<CartOutput[]> => {
  const result = await Cart.findAll({
    where: {
      userId: userId,
    },
  })

  return result
}

export const create = async (payload: CartInput): Promise<boolean> => {
  const cart = await Cart.create({
    ...payload,
    amount: 1,
  })

  return cart ? true : false
}

export const addItem = async (payload: CartInput): Promise<boolean> => {
  const existingCartItem = await Cart.findOne({
    where: {
      productId: payload.productId,
      userId: payload.userId,
    },
  })

  if (existingCartItem) {
    const updatedCartItem = await existingCartItem.update({
      ...payload,
      amount: existingCartItem.amount + 1,
    })
    return updatedCartItem ? true : false
  } else {
    const newCartItem = await Cart.create(payload)
    return newCartItem ? true : false
  }
}

export const removeItem = async (payload: CartInput): Promise<boolean> => {
  const existingCartItem = await Cart.findOne({
    where: {
      productId: payload.productId,
      userId: payload.userId,
    },
  })

  if (!existingCartItem) {
    throw { code: 404, message: "Cart item not found" }
  }

  if (existingCartItem.amount === 1) {
    return await deleteItem(existingCartItem.id)
  } else {
    const updatedCartItem = await existingCartItem.update({
      ...payload,
      amount: existingCartItem.amount - 1,
    })
    return updatedCartItem ? true : false
  }
}

export const deleteItem = async (id: number): Promise<boolean> => {
  const deletedCartItem = await Cart.destroy({
    where: {
      id: id,
    },
  })

  return deletedCartItem ? true : false
}
