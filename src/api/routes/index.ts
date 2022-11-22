import { Router } from "express"
import categoryRouter from "./categories"

const router = Router()

router.use("/category", categoryRouter)

export default router
