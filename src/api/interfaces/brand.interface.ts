export interface IBrand {
  id: number
  name: string
  url: string
  description: string
  createdBy: number
}

export type TBrand = Omit<IBrand, "createdBy">

export type TBrandOption = Pick<IBrand, "id" | "name">
