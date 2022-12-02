import * as userDal from "../../db/dal/user"
import { UserOutput, UserInput } from "../../db/models/User"

export const getAll = async (): Promise<UserOutput[]> => {
  return userDal.getAll()
}

export const getByEmail = async (email: string): Promise<UserOutput | null> => {
  return userDal.getByEmail(email)
}

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const user = await userDal.create(payload)

  return user
}
