import { ColorOutput } from "../../../db/models/Color"
import { IColorOption } from "../../interfaces/color.interface"

export const toColorOption = (color: ColorOutput): IColorOption => {
  return {
    id: color.id,
    name: color.name,
    hex: color.hex,
  }
}
