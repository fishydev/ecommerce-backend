import jwt, { Secret, JwtPayload } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import * as dotenv from "dotenv"
dotenv.config()

const JWT_SECRET: Secret = process.env.JWT_SECRET as string

export interface CustomRequest extends Request {
  token: string | JwtPayload
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
      throw new Error()
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    ;(req as CustomRequest).token = decoded
    next()
  } catch (err) {
    res.status(401).send("Not Authorized")
  }
}
