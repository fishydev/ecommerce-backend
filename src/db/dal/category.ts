// import { Op } from "sequelize"
import { Category } from "../models"
import { CategoryOutput } from "../models/Category"

export const getAll = async (): Promise<CategoryOutput[]> => {
  return Category.findAll({})
}

export const getOptions = async (): Promise<
  Pick<CategoryOutput, "uuid" | "type">[]
> => {
  return Category.findAll({
    attributes: ["uuid", "type"],
  })
}
