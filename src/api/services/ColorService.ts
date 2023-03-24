import * as colorDal from "../../db/dal/color"
import { ColorOutput } from "../../db/models/Color"

export const getAll = (): Promise<ColorOutput[]> => {
  return colorDal.getAll()
}
