import * as productDal from "../../db/dal/product"
import { TProductItem } from "../../db/dal/types"
import { ProductOutput } from "../../db/models/Product"
import { IProductFilters } from "../interfaces"

export const getAll = (filters?: IProductFilters): Promise<TProductItem[]> => {
  return productDal.getAll(filters)
}

export const getByUuid = (uuid: string): Promise<TProductItem | null> => {
  return productDal.getByUuid(uuid)
}
