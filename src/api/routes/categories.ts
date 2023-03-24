import { Router, Request, Response, NextFunction } from "express"
import * as categoryController from "../controllers/categories"

const categoryRouter = Router()

categoryRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await categoryController.getAll()
      return res.status(200).send(results)
    } catch (err) {
      next(err)
    }
  }
)

categoryRouter.get(
  "/option",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await categoryController.getOptions()
      return res.status(200).send(results)
    } catch (err) {
      next(err)
    }
  }
)

export default categoryRouter
