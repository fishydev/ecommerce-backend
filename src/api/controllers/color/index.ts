import * as service from "../../services/ColorService"
import * as mapper from "./mapper"
import { IColor, TColorOption } from "../../interfaces/color.interface"

export const getAll = async (): Promise<IColor[]> => {
  return await service.getAll()
}

export const getOptions = async (): Promise<TColorOption[]> => {
  return (await service.getAll()).map(mapper.toOptions)
}
