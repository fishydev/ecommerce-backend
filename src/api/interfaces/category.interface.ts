export interface ICategory {
  id: number
  uuid: string
  type: string
  imageUrl: string
  alt: string
}

export type CategoryOption = Pick<ICategory, "uuid" | "type">
