import { Router } from "express"
import categoryRouter from "./categories"
import productRouter from "./products"

const router = Router()

router.use("/category", categoryRouter)
router.use("/product", productRouter)

export default router
