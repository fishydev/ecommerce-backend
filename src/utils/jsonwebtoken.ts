import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import { IUser } from "../api/interfaces"
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string

type UserData = {
  id: number
  email: string
  firstName: string
  lastName: string
}

export const signToken = (payload: IUser) => {
  return jwt.sign(
    {
      id: payload.id,
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

export const getUserDataFromAuthHeader = (authHeader: string) => {
  if (!authHeader) {
    throw { code: 403, message: "Unauthorized" }
  }
  const token = authHeader.replace("Bearer ", "")
  return jwt.decode(token) as UserData
}
