import * as service from "../../services/CategoryService"
import { ICategory } from "../../interfaces"
import * as mapper from "./mapper"

export const getAll = async (): Promise<ICategory[]> => {
  return (await service.getAll()).map(mapper.toCategory)
}
