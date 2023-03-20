import { DataTypes, Model, Optional } from "sequelize"
import Category from "./Category"
import sequelizeConnection from "../config"
import Admin from "./Admin"

interface BrandAttributes {
  id: number
  name: string
  url: string
  description: string
  createdBy: number
}

export interface BrandOutput extends Required<BrandAttributes> {}

class Brand extends Model<BrandAttributes> implements BrandAttributes {
  public id!: number
  public name!: string
  public url!: string
  public description!: string
  public createdBy!: number
}

Brand.init(
  {
    id: {
      field: "brand_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    url: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
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

Brand.belongsTo(Admin, {
  foreignKey: {
    allowNull: false,
    field: "created_by",
    name: "createdBy",
  },
})

export default Brand
