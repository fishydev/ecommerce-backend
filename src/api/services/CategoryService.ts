import * as categoryDal from "../../db/dal/category"
import { CategoryOutput } from "../../db/models/Category"

export const getAll = (): Promise<CategoryOutput[]> => {
  return categoryDal.getAll()
}
