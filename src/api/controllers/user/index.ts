import * as service from "../../services/UserService"
import { IUser, LoginResponse } from "../../interfaces/user.interface"
import { CreateUserDTO, LoginDTO } from "../../dto/user.dto"
import { comparePassword, hashPassword } from "../../../utils/bcrypt"
import { signToken } from "../../../utils/jsonwebtoken"
import * as mapper from "./mapper"

export const getAll = async (): Promise<IUser[]> => {
  return await service.getAll()
}

export const create = async (payload: CreateUserDTO): Promise<IUser> => {
  const duplicateUser = await service.getByEmail(payload.email)
  if (duplicateUser) throw { code: 409, message: "Email already exist" }
  payload.password = await hashPassword(payload.password)
  return await service.create(payload)
}

export const getByEmail = async (email: string): Promise<IUser | null> => {
  return await service.getByEmail(email)
}

export const login = async (payload: LoginDTO): Promise<LoginResponse> => {
  const user = await service.getByEmail(payload.email)
  if (!user) throw { code: 404, message: "No email found" }

  const isMatch = await comparePassword(payload.password, user.password)
  if (isMatch) {
    const token = signToken(user)
    return mapper.toLoginResponse(user, token)
  } else {
    throw { code: 403, message: "Wrong password" }
  }
}
