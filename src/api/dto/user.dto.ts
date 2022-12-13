export type CreateUserDTO = {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}

export type LoginDTO = {
  email: string
  password: string
}
