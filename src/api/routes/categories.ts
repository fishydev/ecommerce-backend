import { Router, Request, Response } from "express"
import * as categoryController from "../controllers/categories"

const categoryRouter = Router()

categoryRouter.get("/", async (req: Request, res: Response) => {
  const results = await categoryController.getAll()
  return res.status(200).send(results)
})

export default categoryRouter
