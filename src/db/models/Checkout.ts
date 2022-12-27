import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config"
import Product from "./Product"
import User from "./User"

interface CheckoutAttributes {
  id: number
  userId: number
  productId: number
  firstName: string
  lastName: string
  email: string
  address: string
  zipCode: number
  city: string
  country: string
  total: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface CheckoutInput extends Optional<CheckoutAttributes, "id"> {}
export interface CheckoutOutput extends Required<CheckoutAttributes> {}

class Checkout
  extends Model<CheckoutAttributes, CheckoutInput>
  implements CheckoutAttributes
{
  public id!: number
  public userId!: number
  public productId!: number
  public firstName!: string
  public lastName!: string
  public email!: string
  public address!: string
  public zipCode!: number
  public city!: string
  public country!: string
  public total!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Checkout.init(
  {
    id: {
      field: "checkout_id",
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      field: "user_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    productId: {
      field: "product_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      field: "first_name",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    lastName: {
      field: "last_name",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    email: {
      field: "email",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    address: {
      field: "address",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    zipCode: {
      field: "zip",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    city: {
      field: "city",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    country: {
      field: "country",
      type: DataTypes.CHAR,
      allowNull: false,
    },
    total: {
      field: "total",
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

Checkout.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    field: "user_id",
    name: "userId",
  },
})

Checkout.belongsTo(Product, {
  foreignKey: {
    allowNull: false,
    field: "product_id",
    name: "productId",
  },
  as: "product",
})

export default Checkout
