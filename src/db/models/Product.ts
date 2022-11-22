import { DataTypes, Model, Optional } from "sequelize"
import Category from "./Category"
import sequelizeConnection from "../config"

interface ProductAttributes {
  id: number
  uuid: string
  productTitle: string
  brand: string
  color: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  reviews: number
  imageUrl: string
  alt: string
}

export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number
  public uuid!: string
  public productTitle!: string
  public brand!: string
  public color!: string
  public description!: string
  public price!: number
  public discountPercentage!: number
  public rating!: number
  public reviews!: number
  public imageUrl!: string
  public alt!: string
}

Product.init(
  {
    id: {
      field: "product_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    productTitle: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    brand: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    color: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    alt: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize: sequelizeConnection,
    timestamps: false,
    paranoid: false,
  }
)

export default Product

Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
    field: "category_id",
    name: "categoryId",
  },
})
