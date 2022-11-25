import * as productDal from "../../db/dal/product"
import { ProductOutput } from "../../db/models/Product"
import { IProductFilters } from "../interfaces"

export const getAll = (filters?: IProductFilters): Promise<ProductOutput[]> => {
  return productDal.getAll(filters)
}

export const getByUuid = (uuid: string): Promise<ProductOutput | null> => {
  return productDal.getByUuid(uuid)
}
