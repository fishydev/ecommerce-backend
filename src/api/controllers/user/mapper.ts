import { IUser } from "../../interfaces"
import { UserOutput } from "../../../db/models/User"
import { LoginResponse } from "../../interfaces/user.interface"

export const toUser = (user: UserOutput): IUser => {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
  }
}

export const toLoginResponse = (
  user: UserOutput,
  token: string
): LoginResponse => {
  return {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    token: token,
  }
}
