import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import { IUser } from "../api/interfaces"
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string

export const signToken = (payload: IUser) => {
  return jwt.sign(
    {
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
    },
    JWT_SECRET,
    {
      expiresIn: "1 days",
    }
  )
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET)
}
