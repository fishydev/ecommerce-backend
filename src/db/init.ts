import { Category, Product, User, Cart } from "./models"

// const isDev = process.env.NODE_ENV

const dbInit = () =>
  Promise.all([Category.sync(), Product.sync(), User.sync(), Cart.sync()])

export default dbInit
