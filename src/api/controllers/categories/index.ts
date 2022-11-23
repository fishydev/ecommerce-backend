import * as service from "../../services/CategoryService"
import { ICategory, CategoryOption } from "../../interfaces"
import * as mapper from "./mapper"

export const getAll = async (): Promise<ICategory[]> => {
  return (await service.getAll()).map(mapper.toCategory)
}

export const getOptions = async (): Promise<CategoryOption[]> => {
  return (await service.getOptions()).map(mapper.toCategoryOption)
}
