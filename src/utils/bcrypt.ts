import * as bcrpyt from "bcrypt"

const saltRounds = 10

export const hashPassword = async (plainPassword: string) => {
  return await bcrpyt.hash(plainPassword, saltRounds)
}

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return await bcrpyt.compare(plainPassword, hashedPassword)
}
