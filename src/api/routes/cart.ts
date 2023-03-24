import { Router, Request, Response, NextFunction } from "express"
import { getUserDataFromAuthHeader } from "../../utils/jsonwebtoken"
import * as cartController from "../controllers/cart"
import { AddCartItemDTO, RemoveCartItemDTO } from "../dto/cart.dto"
import { AddCartItemData } from "../interfaces"

const cartRouter = Router()

cartRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"]
    if (!token) throw { code: 403, message: "Forbidden" }
    const userData = getUserDataFromAuthHeader(token)
    const result = await cartController.getByUserId(userData.id)
    return res.status(200).send(result)
  } catch (err) {
    next(err)
  }
})

cartRouter.put(
  "/add/:uuid",
  async (req: Request, res: Response, next: NextFunction) => {
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
    } catch (err) {
      next(err)
    }
  }
)

cartRouter.put(
  "/substract/:cartItemId",
  async (req: Request, res: Response, next: NextFunction) => {
    const cartItemId = Number(req.params.cartItemId)
    try {
      const result = await cartController.substractItem(cartItemId)
      if (result) {
        return res.status(200).send("item removed from cart")
      }
    } catch (err) {
      next(err)
    }
  }
)

cartRouter.delete(
  "/:cartItemId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cartItemId = Number(req.params.cartItemId)
      const result = await cartController.deleteItem(cartItemId)
      if (result) {
        return res.status(200).send("Item deleted from cart")
      }
    } catch (err) {
      next(err)
    }
  }
)

cartRouter.get(
  "/summary",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers["authorization"]
      if (!token) throw { code: 403, message: "Forbidden" }
      const userData = getUserDataFromAuthHeader(token)
      const result = await cartController.getSummary(userData.id)
      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

cartRouter.get(
  "/checkout/:checkoutId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const checkoutId = Number(req.params.checkoutId)
      const token = req.headers["authorization"]!
      const userData = getUserDataFromAuthHeader(token)
      const result = await cartController.getByCheckoutId(
        checkoutId,
        userData.id
      )
      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default cartRouter
