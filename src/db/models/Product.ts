import { DataTypes, Model, Optional } from "sequelize"
import Category from "./Category"
import sequelizeConnection from "../config"
import Color from "./Color"
import Brand from "./Brand"
import Admin from "./Admin"

interface ProductAttributes {
  id: number
  colorId: number
  brandId: number
  uuid: string
  productTitle: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  reviews: number
  imageUrl: string
  alt: string
  createdBy: number
}

export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number
  public colorId!: number
  public brandId!: number
  public uuid!: string
  public productTitle!: string
  public description!: string
  public price!: number
  public discountPercentage!: number
  public rating!: number
  public reviews!: number
  public imageUrl!: string
  public alt!: string
  public createdBy!: number
}

Product.init(
  {
    id: {
      field: "product_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    colorId: {
      field: "color_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    brandId: {
      field: "brand_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    productTitle: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: "product_title",
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
      field: "discount_percent",
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
      field: "image_url",
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

export default Product
