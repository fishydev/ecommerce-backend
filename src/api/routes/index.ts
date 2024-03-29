import { Router } from "express"
import categoryRouter from "./categories"
import productRouter from "./products"
import userRouter from "./users"
import cartRouter from "./cart"
import checkoutRouter from "./checkout"
import { auth } from "../controllers/auth"

const router = Router()

router.use("/category", categoryRouter)
router.use("/product", productRouter)
router.use("/user", userRouter)
router.use("/cart", auth, cartRouter)
router.use("/checkout", auth, checkoutRouter)

export default router
