import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config"
import Admin from "./Admin"

interface CategoryAttributes {
  id: number
  uuid: string
  type: string
  imageUrl: string
  alt: string
  createdBy: number
}

export interface CategoryOutput extends Required<CategoryAttributes> {}

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: number
  public uuid!: string
  public type!: string
  public imageUrl!: string
  public alt!: string
  public createdBy!: number
}

Category.init(
  {
    id: {
      field: "category_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    type: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    imageUrl: {
      field: "image_url",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    alt: {
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

export default Category
