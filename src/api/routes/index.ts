import { Router } from "express"
import categoryRouter from "./categories"
import productRouter from "./products"
import userRouter from "./users"
import { auth } from "../controllers/auth"

const router = Router()

router.use("/category", categoryRouter)
router.use("/product", productRouter)
router.use("/user", userRouter)

export default router
