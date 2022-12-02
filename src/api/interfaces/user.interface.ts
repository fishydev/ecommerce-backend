export interface IUser {
  id: number
  email: string
  password: string
  firstName: string
  lastName: string
  address?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export type LoginResponse = Pick<IUser, "email" | "firstName" | "lastName"> & {
  token: string
}
