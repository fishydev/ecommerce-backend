import { ICategory } from "../../interfaces"
import { CategoryOutput } from "../../../db/models/Category"

export const toCategory = (category: CategoryOutput): ICategory => {
  return {
    id: category.id,
    uuid: category.uuid,
    type: category.type,
    imageUrl: category.imageUrl,
    alt: category.alt,
  }
}
