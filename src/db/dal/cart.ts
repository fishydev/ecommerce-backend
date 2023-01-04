// import { Op } from "sequelize"
import { fn, literal, Op } from "sequelize"
import { Cart, Product } from "../models"
import { CartInput, CartOutput } from "../models/Cart"
import { CartItem, SummaryResult } from "./types"

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

export const getByUserId = async (userId: number): Promise<CartItem[]> => {
  const result = (await Cart.findAll({
    where: {
      userId: userId,
      deletedAt: {
        [Op.is]: undefined,
      },
      boughtAt: {
        [Op.is]: undefined,
      },
    },
    attributes: ["id", "amount", [literal("amount*Product.price"), "total"]],
    include: [
      {
        model: Product,
        required: true,
        as: "product",
        attributes: ["productTitle", "imageUrl", "price", "uuid"],
      },
    ],
  })) as any

  return result as CartItem[]
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
      deletedAt: {
        [Op.is]: undefined,
      },
      boughtAt: {
        [Op.is]: undefined,
      },
    },
  })

  if (existingCartItem) {
    const updatedCartItem = await existingCartItem.update({
      ...payload,
      amount: existingCartItem.amount + 1,
    })
    return updatedCartItem ? true : false
  } else {
    return create(payload)
  }
}

export const substractItem = async (cartItemId: number): Promise<boolean> => {
  const existingCartItem = await Cart.findByPk(cartItemId)

  if (!existingCartItem) {
    throw { code: 404, message: "Cart item not found" }
  }

  if (existingCartItem.amount === 1) {
    return deleteItem(existingCartItem.id)
  } else {
    const updatedCartItem = await existingCartItem.update({
      ...existingCartItem,
      amount: existingCartItem.amount - 1,
    })
    return updatedCartItem ? true : false
  }
}

export const deleteItem = async (cartItemId: number): Promise<boolean> => {
  const toDeleteItem = await Cart.findByPk(cartItemId)

  if (!toDeleteItem) {
    throw { code: 404, message: "Cart item not found" }
  }

  const deletedCartItem = await Cart.destroy({
    where: {
      id: cartItemId,
    },
  })

  return deletedCartItem ? true : false
}

export const getSummary = async (userId: number): Promise<SummaryResult> => {
  const cartContent = (await Cart.findAll({
    where: {
      userId: userId,
      boughtAt: {
        [Op.is]: undefined,
      },
      deletedAt: {
        [Op.is]: undefined,
      },
    },
    attributes: ["amount"],
    include: [
      {
        model: Product,
        required: true,
        as: "product",
        attributes: ["productTitle", "imageUrl", "price", "uuid"],
      },
    ],
    limit: 3,
  })) as any

  const cartItemTotal = await Cart.count({
    where: {
      userId: userId,
      boughtAt: {
        [Op.is]: undefined,
      },
      deletedAt: {
        [Op.is]: undefined,
      },
    },
  })

  return {
    content: cartContent as CartItem[],
    remainder: cartItemTotal > 3 ? cartItemTotal - 3 : 0,
  }
}

export const checkoutCart = async (
  userId: number,
  checkoutId: number
): Promise<boolean> => {
  const result = await Cart.update(
    {
      checkoutId: checkoutId,
      boughtAt: new Date(),
    },
    {
      where: {
        userId: userId,
        boughtAt: {
          [Op.is]: undefined,
        },
        deletedAt: {
          [Op.is]: undefined,
        },
      },
    }
  )

  return result ? true : false
}

export const getByCheckoutId = async (
  checkoutId: number,
  userId: number
): Promise<CartItem[]> => {
  const result = (await Cart.findAll({
    where: {
      checkoutId: checkoutId,
      userId: userId,
      boughtAt: {
        [Op.not]: undefined,
      },
    },
    attributes: ["id", "amount", [literal("amount*Product.price"), "total"]],
    include: [
      {
        model: Product,
        required: true,
        as: "product",
        attributes: ["productTitle", "imageUrl", "price", "uuid"],
      },
    ],
  })) as any

  return result as CartItem[]
}
