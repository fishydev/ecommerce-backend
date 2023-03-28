import * as service from "../../services/ColorService"
import * as mapper from "./mapper"
import { IColor, IColorOption } from "../../interfaces/color.interface"

export const getAll = async (): Promise<IColor[]> => {
  return await service.getAll()
}

export const getColorOptions = async (): Promise<IColorOption[]> => {
  return (await service.getAll()).map(mapper.toColorOption)
}
