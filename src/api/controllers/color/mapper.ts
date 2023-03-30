import { ColorOutput } from "../../../db/models/Color"
import { TColorOption } from "../../interfaces/color.interface"

export const toOptions = (color: ColorOutput): TColorOption => {
  return {
    id: color.id,
    name: color.name,
    hex: color.hex,
  }
}
