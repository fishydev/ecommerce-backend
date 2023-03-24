import { Op, literal } from "sequelize"
import { Fn } from "sequelize/types/utils"
import { Product, Category, Color, Brand } from "../models"
import { ProductOutput } from "../models/Product"
import { ProductFilters, TProductListItem } from "./types"

export const getAll = async (
  filters?: ProductFilters
): Promise<TProductListItem[]> => {
  const sortOption = (sort: "lth" | "htl") => {
    return sort === "lth" ? "ASC" : "DESC"
  }

  const res: any = Product.findAll({
    where: {
      ...(filters?.colors &&
        filters.colors.length > 0 && { colorId: { [Op.in]: filters.colors } }),
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
      exclude: ["createdBy"],
    },
    include: [
      {
        model: Category,
        where: {
          ...(filters?.types &&
            filters.types.length > 0 && { uuid: { [Op.in]: filters.types } }),
        },
        attributes: ["type"],
        required: true,
      },
      {
        model: Color,
        required: true,
        attributes: ["name", "hex"],
      },
      {
        model: Brand,
        required: true,
        attributes: ["name"],
      },
    ],
    ...(filters?.sort && {
      order: [["discountPrice", sortOption(filters.sort)]],
    }),
  })
  return res as TProductListItem[]
}

export const getByUuid = async (
  uuid: string
): Promise<TProductListItem | null> => {
  const res: any = Product.findOne({
    where: {
      uuid: uuid,
    },
    include: [
      {
        model: Color,
        required: true,
        attributes: ["name", "hex"],
      },
      {
        model: Brand,
        required: true,
        attributes: ["name"],
      },
    ],
  })
  return res as TProductListItem
}
