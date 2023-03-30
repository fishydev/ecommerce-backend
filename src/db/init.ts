import {
  Admin,
  User,
  Product,
  Category,
  Cart,
  Checkout,
  Brand,
  Color,
  Role,
} from "./models"

// const isDev = process.env.NODE_ENV

const dbInit = () => {
  Admin.sync({ force: true })
  Category.sync({ force: true })
  Brand.sync({ force: true })
  Color.sync({ force: true })
  User.sync({ force: true })
  Product.sync({ force: true })
  Cart.sync({ force: true })
  Checkout.sync({ force: true })
  Role.sync({ force: true })
}

export default dbInit
