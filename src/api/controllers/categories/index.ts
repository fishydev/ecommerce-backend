import * as service from "../../services/CategoryService"
import { TCategoryOption } from "../../interfaces"
import * as mapper from "./mapper"
import { TCategory } from "../../interfaces/category.interface"

export const getAll = async (): Promise<TCategory[]> => {
  return (await service.getAll()).map(mapper.toCategory)
}

export const getOptions = async (): Promise<TCategoryOption[]> => {
  return (await service.getAll()).map(mapper.toCategoryOption)
}
