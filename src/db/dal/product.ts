import { Op, literal } from "sequelize"
import { Fn } from "sequelize/types/utils"
import { Product, Category } from "../models"
import { ProductOutput } from "../models/Product"
import { ProductFilters } from "./types"

export const getAll = async (
  filters?: ProductFilters
): Promise<ProductOutput[]> => {
  const sortOption = (sort: "lth" | "htl") => {
    return sort === "lth" ? "ASC" : "DESC"
  }

  return Product.findAll({
    where: {
      ...(filters?.colors &&
        filters.colors.length > 0 && { color: { [Op.in]: filters.colors } }),
      ...(filters?.query && {
        productTitle: { [Op.substring]: filters.query },
      }),
    },
    attributes: {
      include: [
        [
          literal(
            "Product.price - (Product.price * Product.discount_percent / 100)"
          ),
          "discountPrice",
        ],
      ],
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
    ...(filters?.sort && {
      order: [["discountPrice", sortOption(filters.sort)]],
    }),
  })
}

export const getByUuid = async (
  uuid: string
): Promise<ProductOutput | null> => {
  return Product.findOne({
    where: {
      uuid: uuid,
    },
  })
}
