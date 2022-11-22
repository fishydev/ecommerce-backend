import { Category, Product } from "./models"

// const isDev = process.env.NODE_ENV

const dbInit = () => Promise.all([Category.sync(), Product.sync()])

export default dbInit
