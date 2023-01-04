import { Router, Request, Response } from "express"
import { getUserDataFromAuthHeader } from "../../utils/jsonwebtoken"
import * as cartController from "../controllers/cart"
import { AddCartItemDTO, RemoveCartItemDTO } from "../dto/cart.dto"
import { AddCartItemData } from "../interfaces"

const cartRouter = Router()

cartRouter.get("/", async (req: Request, res: Response) => {
  try {
    const token = req.headers["authorization"]
    if (!token) throw { code: 403, message: "Forbidden" }
    const userData = getUserDataFromAuthHeader(token)
    const result = await cartController.getByUserId(userData.id)
    return res.status(200).send(result)
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    } else {
      console.log(error)
    }

    return res.status(500).send(error)
  }
})

cartRouter.put("/add/:uuid", async (req: Request, res: Response) => {
  const productUuid = req.params.uuid as string
  const authHeader = req.headers["authorization"] as string
  const user = getUserDataFromAuthHeader(authHeader)
  const payload: AddCartItemDTO = {
    userId: user.id,
    productUuid: productUuid,
  }
  try {
    const result = await cartController.addItem(payload)
    if (result) {
      return res.status(200).send("Item added to cart")
    }
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    }
  }
})

cartRouter.put(
  "/substract/:cartItemId",
  async (req: Request, res: Response) => {
    const cartItemId = Number(req.params.cartItemId)
    try {
      const result = await cartController.substractItem(cartItemId)
      if (result) {
        return res.status(200).send("item removed from cart")
      }
    } catch (error: any) {
      if (error.code && error.message) {
        return res.status(error.code).send(error.message)
      }
    }
  }
)

cartRouter.delete("/:cartItemId", async (req: Request, res: Response) => {
  try {
    const cartItemId = Number(req.params.cartItemId)
    const result = await cartController.deleteItem(cartItemId)
    if (result) {
      return res.status(200).send("Item deleted from cart")
    }
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    }
  }
})

cartRouter.get("/summary", async (req: Request, res: Response) => {
  try {
    const token = req.headers["authorization"]
    if (!token) throw { code: 403, message: "Forbidden" }
    const userData = getUserDataFromAuthHeader(token)
    const result = await cartController.getSummary(userData.id)
    return res.status(200).send(result)
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    } else {
      console.log(error)
    }

    return res.status(500).send(error)
  }
})

cartRouter.get("/checkout/:checkoutId", async (req: Request, res: Response) => {
  try {
    const checkoutId = Number(req.params.checkoutId)
    const token = req.headers["authorization"]!
    const userData = getUserDataFromAuthHeader(token)
    const result = await cartController.getByCheckoutId(checkoutId, userData.id)
    return res.status(200).send(result)
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    } else {
      console.log(error)
    }

    return res.status(500).send(error)
  }
})

export default cartRouter
