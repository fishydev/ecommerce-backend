import * as service from "../../services/ColorService"
import { IColor } from "../../interfaces"

export const getAll = async (): Promise<IColor[]> => {
  return await service.getAll()
}
