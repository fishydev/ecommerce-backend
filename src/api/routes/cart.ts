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
    }
    return res.status(500).send(error)
  }
})

cartRouter.post("/add", async (req: Request, res: Response) => {
  const itemData = req.body as AddCartItemData
  const authHeader = req.headers["Authorization"] as string
  const user = getUserDataFromAuthHeader(authHeader)
  const payload: AddCartItemDTO = {
    userId: user.id,
    productId: itemData.amount,
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

cartRouter.post("/remove", async (req: Request, res: Response) => {
  const itemData = req.body as AddCartItemData
  const authHeader = req.headers["Authorization"] as string
  const user = getUserDataFromAuthHeader(authHeader)
  const payload: RemoveCartItemDTO = {
    userId: user.id,
    productId: itemData.amount,
  }
  try {
    const result = await cartController.removeItem(payload)
    if (result) {
      return res.status(200).send("Item removed from cart")
    }
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    }
  }
})

cartRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const result = await cartController.deleteItem(id)
    if (result) {
      return res.status(200).send("Item deleted from cart")
    }
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    }
  }
})
