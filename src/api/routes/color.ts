import { Router, Request, Response, NextFunction } from "express"
import * as colorController from "../controllers/color"

const colorRouter = Router()

colorRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await colorController.getAll()
      return res.status(200).send(results)
    } catch (err) {
      next(err)
    }
  }
)

colorRouter.get(
  "/option",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await colorController.getColorOptions()
      return res.status(200).send(results)
    } catch (err) {
      next(err)
    }
  }
)

export default colorRouter
