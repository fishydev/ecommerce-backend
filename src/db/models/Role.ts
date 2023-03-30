import { DataTypes, Model } from "sequelize"
import sequelizeConnection from "../config"
import Admin from "./Admin"

interface RoleAttributes {
  id: number
  name: string
  privilege: "R" | "W"
  createdBy: number
}

export interface RoleOutput extends Required<RoleAttributes> {}

class Role extends Model<RoleAttributes> implements RoleAttributes {
  public id!: number
  public name!: string
  public privilege!: "R" | "W"
  public createdBy!: number
}

Role.init(
  {
    id: {
      field: "role_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    privilege: {
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

export default Role
