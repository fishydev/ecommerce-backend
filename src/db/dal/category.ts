// import { Op } from "sequelize"
import { Category } from "../models"
import { CategoryOutput } from "../models/Category"

export const getAll = async (): Promise<CategoryOutput[]> => {
  return Category.findAll({})
}
