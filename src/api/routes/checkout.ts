import { Router, Request, Response } from "express"
import { getUserDataFromAuthHeader } from "../../utils/jsonwebtoken"
import * as checkoutController from "../controllers/checkout"
import { AddCheckoutDTO } from "../dto/checkout.dto"

const checkoutRouter = Router()

checkoutRouter.get("/", async (req: Request, res: Response) => {
  try {
    const token = req.headers["authorization"]!
    const userData = getUserDataFromAuthHeader(token)
    const result = await checkoutController.getByUserId(userData.id)
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

checkoutRouter.post("/", async (req: Request, res: Response) => {
  try {
    const token = req.headers["authorization"]!
    const userData = getUserDataFromAuthHeader(token)
    const data = {
      userId: userData.id,
      ...req.body,
    } as AddCheckoutDTO
    await checkoutController.create(data)
    return res.status(200).send("Checkout success")
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    } else {
      console.log(error)
    }

    return res.status(500).send(error)
  }
})

export default checkoutRouter
