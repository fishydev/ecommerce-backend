import {
  Category,
  Product,
  User,
  Cart,
  Checkout,
  Brand,
  Color,
  Admin,
} from "./models"

// const isDev = process.env.NODE_ENV

const dbInit = () =>
  Promise.all([
    Admin.sync(),
    Category.sync(),
    Brand.sync(),
    Color.sync(),
    Product.sync(),
    User.sync(),
    Cart.sync(),
    Checkout.sync(),
  ])

export default dbInit
