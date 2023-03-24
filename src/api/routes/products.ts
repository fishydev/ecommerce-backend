import { Router, Request, Response, NextFunction } from "express"
import * as productController from "../controllers/products"
import { IProductFilters } from "../interfaces/product.interface"

const productRouter = Router()

productRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.body.data as IProductFilters
      const results = await productController.getAll(query)
      return res.status(200).send(results)
    } catch (err) {
      next(err)
    }
  }
)

productRouter.get(
  "/:uuid",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.uuid
      const result = await productController.getByUuid(productId)
      if (!result) {
        return res.status(404).send("Product Not Found")
      }
      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default productRouter
