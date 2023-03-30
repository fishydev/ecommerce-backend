import { CategoryOutput } from "../../../db/models/Category"
import {
  ICategory,
  TCategory,
  TCategoryOption,
} from "../../interfaces/category.interface"

export const toCategory = (category: CategoryOutput): TCategory => {
  return {
    id: category.id,
    uuid: category.uuid,
    type: category.type,
    imageUrl: category.imageUrl,
    alt: category.alt,
  }
}

export const toCategoryOption = (category: CategoryOutput): TCategoryOption => {
  return {
    id: category.id,
    uuid: category.uuid,
    type: category.type,
  }
}
