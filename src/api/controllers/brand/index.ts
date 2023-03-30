import * as service from "../../services/BrandService"
import { IBrand } from "../../interfaces"

export const getAll = async (): Promise<IBrand[]> => {
  return await service.getAll()
}

export const getOptions = async (): Promise<IBrand[]> => {
  return await service.getAll()
}
