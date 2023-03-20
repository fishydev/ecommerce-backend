import { DataTypes, Model, Optional } from "sequelize"
import Category from "./Category"
import sequelizeConnection from "../config"
import Admin from "./Admin"

interface ColorAttributes {
  id: number
  name: string
  hex: string
  createdBy: number
}

export interface ColorOutput extends Required<ColorAttributes> {}

class Color extends Model<ColorAttributes> implements ColorAttributes {
  public id!: number
  public name!: string
  public hex!: string
  public createdBy!: number
}

Color.init(
  {
    id: {
      field: "color_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    hex: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: "created_by",
    },
  },
  {
    freezeTableName: true,
    sequelize: sequelizeConnection,
    timestamps: false,
    paranoid: false,
  }
)

Color.belongsTo(Admin, {
  foreignKey: {
    allowNull: false,
    field: "created_by",
    name: "createdBy",
  },
})

export default Color
