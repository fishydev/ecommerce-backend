import { Category, Product, User, Cart, Checkout } from "./models"

// const isDev = process.env.NODE_ENV

const dbInit = () =>
  Promise.all([
    Category.sync(),
    Product.sync(),
    User.sync(),
    Cart.sync(),
    Checkout.sync(),
  ])

export default dbInit
