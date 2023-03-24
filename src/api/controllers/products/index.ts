import * as service from "../../services/ProductService"
import { IProduct, Product, IProductFilters } from "../../interfaces"
import * as mapper from "./mapper"
import { TProductListItem } from "../../../db/dal/types"

export const getAll = async (
  filters?: IProductFilters
): Promise<TProductListItem[]> => {
  return await service.getAll(filters)
}

export const getByUuid = async (
  uuid: string
): Promise<TProductListItem | null> => {
  return await service.getByUuid(uuid)
}
