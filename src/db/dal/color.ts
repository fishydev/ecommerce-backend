import { Color } from "../models"
import { ColorOutput } from "../models/Color"

export const getAll = async (): Promise<ColorOutput[]> => {
  return Color.findAll({})
}
