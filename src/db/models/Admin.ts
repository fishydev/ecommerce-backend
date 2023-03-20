import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config"

interface AdminAttributes {
  id: number
  email: string
  password: string
  firstName: string
  lastName: string
  level: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface AdminInput extends Optional<AdminAttributes, "id"> {}
export interface AdminOutput extends Required<AdminAttributes> {}

class Admin
  extends Model<AdminAttributes, AdminInput>
  implements AdminAttributes
{
  public id!: number
  public email!: string
  public password!: string
  public firstName!: string
  public lastName!: string
  public level!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Admin.init(
  {
    id: {
      field: "admin_id",
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize: sequelizeConnection,
    timestamps: true,
    paranoid: true,
  }
)

export default Admin
