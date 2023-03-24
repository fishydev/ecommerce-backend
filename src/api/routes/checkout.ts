import { Router, Request, Response, NextFunction } from "express"
import { getUserDataFromAuthHeader } from "../../utils/jsonwebtoken"
import * as checkoutController from "../controllers/checkout"
import { AddCheckoutDTO } from "../dto/checkout.dto"

const checkoutRouter = Router()

checkoutRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers["authorization"]!
      const userData = getUserDataFromAuthHeader(token)
      const result = await checkoutController.getByUserId(userData.id)
      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

checkoutRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers["authorization"]!
      const userData = getUserDataFromAuthHeader(token)
      const data = {
        userId: userData.id,
        ...req.body,
      } as AddCheckoutDTO
      await checkoutController.create(data)
      return res.status(200).send("Checkout success")
    } catch (err) {
      next(err)
    }
  }
)

export default checkoutRouter
