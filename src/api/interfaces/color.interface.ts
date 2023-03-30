export interface IColor {
  id: number
  name: string
  hex: string
  createdBy: number
}

export type TColorOption = Omit<IColor, "createdBy">
