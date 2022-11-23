import { Router, Request, Response } from "express"
import * as productController from "../controllers/products"
import { IProductFilters } from "../interfaces/product.interface"

const productRouter = Router()

productRouter.get("/", async (req: Request, res: Response) => {
  const query = req.body as IProductFilters
  const results = await productController.getAll(query)
  return res.status(200).send(results)
})

export default productRouter
