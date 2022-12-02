// import { Op } from "sequelize"
import { User } from "../models"
import { UserInput, UserOutput } from "../models/User"

export const getAll = async (): Promise<UserOutput[]> => {
  return User.findAll({})
}

export const getByEmail = async (email: string): Promise<UserOutput | null> => {
  return User.findOne({
    where: {
      email: email,
    },
  })
}

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const user = await User.create(payload)

  return user
}
