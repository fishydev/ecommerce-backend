import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config"

interface CartAttributes {
  id: number
  userId: number
  productId: number
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

export default Cart
