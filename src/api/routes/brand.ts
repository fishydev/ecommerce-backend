import { Router, Request, Response, NextFunction } from "express"
import * as brandController from "../controllers/brand"

const brandRouter = Router()

brandRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await brandController.getAll()
      return res.status(200).send(results)
    } catch (err) {
      next(err)
    }
  }
)

export default brandRouter
