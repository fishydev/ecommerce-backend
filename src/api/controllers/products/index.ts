import * as service from "../../services/ProductService"
import { IProduct, Product, IProductFilters } from "../../interfaces"
import * as mapper from "./mapper"

export const getAll = async (filters?: IProductFilters): Promise<Product[]> => {
  return (await service.getAll(filters)).map(mapper.toProduct)
}
