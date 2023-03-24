import * as brandDal from "../../db/dal/brand"
import { BrandOutput } from "../../db/models/Brand"

export const getAll = (): Promise<BrandOutput[]> => {
  return brandDal.getAll()
}
