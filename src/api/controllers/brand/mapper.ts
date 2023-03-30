import { IBrand } from "../../interfaces"
import { TBrandOption } from "../../interfaces/brand.interface"

export const toBrandOption = (brand: IBrand): TBrandOption => {
  return {
    id: brand.id,
    name: brand.name,
  }
}
