import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config"
import Checkout from "./Checkout"
import Product from "./Product"
import User from "./User"

interface CartAttributes {
  id: number
  userId: number
  productId: number
  checkoutId?: number
  amount: number
  boughtAt?: Date
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface CartInput extends Optional<CartAttributes, "id" | "amount"> {}
export interface CartOutput extends Required<CartAttributes> {}

class Cart extends Model<CartAttributes, CartInput> implements CartAttributes {
  public id!: number
  public userId!: number
  public productId!: number
  public checkoutId!: number
  public amount!: number

  public readonly boughtAt!: Date
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Cart.init(
  {
    id: {
      field: "cart_id",
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
    checkoutId: {
      field: "checkout_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    boughtAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    sequelize: sequelizeConnection,
    timestamps: true,
    paranoid: true,
  }
)

Cart.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    field: "user_id",
    name: "userId",
  },
})

Cart.belongsTo(Product, {
  foreignKey: {
    allowNull: false,
    field: "product_id",
    name: "productId",
  },
  as: "product",
})

Cart.belongsTo(Checkout, {
  foreignKey: {
    field: "checkout_id",
    allowNull: true,
    name: "checkoutId",
  },
})

export default Cart
