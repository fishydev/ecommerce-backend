import { Router, Request, Response } from "express"
import * as productController from "../controllers/products"
import { IProductFilters } from "../interfaces/product.interface"

const productRouter = Router()

productRouter.post("/", async (req: Request, res: Response) => {
  const query = req.body.data as IProductFilters
  const results = await productController.getAll(query)
  return res.status(200).send(results)
})

productRouter.get("/:uuid", async (req: Request, res: Response) => {
  const productId = req.params.uuid
  const result = await productController.getByUuid(productId)
  if (!result) {
    return res.status(404).send("Product Not Found")
  }
  return res.status(200).send(result)
})

export default productRouter
