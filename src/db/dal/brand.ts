import { Brand } from "../models"
import { BrandOutput } from "../models/Brand"

export const getAll = async (): Promise<BrandOutput[]> => {
  return Brand.findAll({})
}
