import { Category, Product, User } from "./models"

// const isDev = process.env.NODE_ENV

const dbInit = () => Promise.all([Category.sync(), Product.sync(), User.sync()])

export default dbInit
