import e, { Router, Request, Response, NextFunction } from "express"
import * as userController from "../controllers/user"
import { LoginDTO, CreateUserDTO } from "../dto/user.dto"
import { IUser } from "../interfaces"

const userRouter = Router()

userRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body as CreateUserDTO
    try {
      const result = await userController.create(payload)
      if (result) {
        res.status(200).send("Account successfully created")
      }
    } catch (err) {
      next(err)
    }
  }
)

userRouter.get(
  "/:email",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.params.email
      const result = await userController.getByEmail(email)
      if (!result) {
        return res.status(404).send("User Not Found")
      }
      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

userRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userController.getAll()
    return res.status(200).send(result)
  } catch (err) {
    next(err)
  }
})

userRouter.post(
  "/auth",
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body as LoginDTO
    try {
      const result = await userController.login(payload)
      return res.status(200).send(result)
    } catch (err) {
      next(err)
    }
  }
)

export default userRouter
