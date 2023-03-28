import * as service from "../../services/ProductService"
import { IProduct, IProductFilters } from "../../interfaces"
import * as mapper from "./mapper"
import { TProductItem } from "../../../db/dal/types"

export const getAll = async (
  filters?: IProductFilters
): Promise<IProduct[]> => {
  return (await service.getAll(filters)).map(mapper.toProduct)
}

export const getByUuid = async (uuid: string): Promise<TProductItem | null> => {
  return await service.getByUuid(uuid)
}
