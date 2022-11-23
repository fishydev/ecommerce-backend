import { Op } from "sequelize"
import { Product, Category } from "../models"
import { ProductOutput } from "../models/Product"
import { ProductFilters } from "./types"

export const getAll = async (
  filters?: ProductFilters
): Promise<ProductOutput[]> => {
  console.log(`filters`)
  console.log(filters)
  return Product.findAll({
    where: {
      ...(filters?.colors &&
        filters.colors.length > 0 && { color: { [Op.in]: filters.colors } }),
    },
    include: [
      {
        model: Category,
        where: {
          ...(filters?.types &&
            filters.types.length > 0 && { uuid: { [Op.in]: filters.types } }),
        },
        required: true,
      },
    ],
  })
}
