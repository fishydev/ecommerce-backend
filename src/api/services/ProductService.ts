import * as productDal from "../../db/dal/product"
import { TProductListItem } from "../../db/dal/types"
import { ProductOutput } from "../../db/models/Product"
import { IProductFilters } from "../interfaces"

export const getAll = (
  filters?: IProductFilters
): Promise<TProductListItem[]> => {
  return productDal.getAll(filters)
}

export const getByUuid = (uuid: string): Promise<TProductListItem | null> => {
  return productDal.getByUuid(uuid)
}
