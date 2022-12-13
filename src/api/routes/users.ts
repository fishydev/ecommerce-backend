import e, { Router, Request, Response } from "express"
import * as userController from "../controllers/user"
import { LoginDTO, CreateUserDTO } from "../dto/user.dto"
import { IUser } from "../interfaces"

const userRouter = Router()

userRouter.post("/", async (req: Request, res: Response) => {
  const payload = req.body as CreateUserDTO
  try {
    const result = await userController.create(payload)
    if (result) {
      res.status(200).send("Account successfully created")
    }
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    }
  }
})

userRouter.get("/:email", async (req: Request, res: Response) => {
  const email = req.params.email
  const result = await userController.getByEmail(email)
  if (!result) {
    return res.status(404).send("User Not Found")
  }
  return res.status(200).send(result)
})

userRouter.get("/", async (req: Request, res: Response) => {
  const result = await userController.getAll()
  return res.status(200).send(result)
})

userRouter.post("/auth", async (req: Request, res: Response) => {
  const payload = req.body as LoginDTO
  try {
    const result = await userController.login(payload)
    return res.status(200).send(result)
  } catch (error: any) {
    if (error.code && error.message) {
      return res.status(error.code).send(error.message)
    }
  }
})

export default userRouter
