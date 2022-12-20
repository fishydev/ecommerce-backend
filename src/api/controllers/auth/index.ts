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
    const token = req.header("authorization")?.replace("Bearer ", "")

    if (!token) {
      throw { code: 403, message: "Forbidden" }
    }
    jwt.verify(token, JWT_SECRET)

    next()
  } catch (err: any) {
    if (err.code && err.message) {
      res.status(err.code).send(err.message)
    }
    if (err.name === "TokenExpiredError") {
      res.status(401).send("Session expired")
    }
    if (err.name === "JsonWebTokenError") {
      res.status(400).send("Bad Request")
    }

    console.log(err)
    res.status(500).send(`Internal Server Error`)
  }
}
