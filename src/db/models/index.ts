import Category from "./Category"
import Product from "./Product"
import User from "./User"
import Cart from "./Cart"
import Checkout from "./Checkout"
import Brand from "./Brand"
import Color from "./Color"
import Admin from "./Admin"
import Role from "./Role"

Admin.belongsToMany(Role, { through: "admin_role" })

Brand.belongsTo(Admin, {
  foreignKey: {
    allowNull: false,
    field: "created_by",
    name: "createdBy",
  },
})

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
  constraints: false,
})

Cart.hasOne(Checkout, {
  foreignKey: {
    field: "checkout_id",
    allowNull: true,
    name: "checkoutId",
  },
})

Category.belongsTo(Admin, {
  foreignKey: {
    allowNull: false,
    field: "created_by",
    name: "createdBy",
  },
})

Checkout.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    field: "user_id",
    name: "userId",
  },
})

Color.belongsTo(Admin, {
  foreignKey: {
    allowNull: false,
    field: "created_by",
    name: "createdBy",
  },
})

Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
    field: "category_id",
    name: "categoryId",
  },
})

Product.belongsTo(Color, {
  foreignKey: {
    allowNull: false,
    field: "color_id",
    name: "colorId",
  },
})

Product.belongsTo(Brand, {
  foreignKey: {
    allowNull: false,
    field: "brand_id",
    name: "brandId",
  },
})

Product.belongsTo(Admin, {
  foreignKey: {
    allowNull: false,
    field: "created_by",
    name: "createdBy",
  },
})

Role.belongsToMany(Admin, { through: "admin_role" })

export { Category, Product, User, Cart, Checkout, Brand, Color, Admin, Role }
