import * as service from "../../services/ProductService"
import { IProduct, Product, IProductFilters } from "../../interfaces"
import * as mapper from "./mapper"
import { TProductItem } from "../../../db/dal/types"

export const getAll = async (
  filters?: IProductFilters
): Promise<TProductItem[]> => {
  return await service.getAll(filters)
}

export const getByUuid = async (uuid: string): Promise<TProductItem | null> => {
  return await service.getByUuid(uuid)
}
