import { db } from 'src/lib/db'
/**
 *
 * @typedef {import("../shipments/shipments").Shipment} Shipment
 * @typedef {import("../users/users").User} User
 *
 * @typedef {Object} Product
 * @property {number} id product id
 * @property {string} name product name
 * @property {string} price product price
 * @property {number} quantity product quantity
 * @property {string} sku SKU
 * @property {Array<User>} users product users
 * @property {Shipment} shipment product shipment
 *
 * @typedef {Object} ProductInput
 * @property {number} userId user id
 * @property {number} shipmentId shipment id
 * @property {string} name product name
 * @property {string} price product price
 * @property {number} quantity product quantity
 * @property {string} sku SKU
 *
 */

/**
 * @return {Array<Product>}
 */
export const products = () => {
  return db.product.findMany()
}

/**
 * @param {{input: ProductInput}} args
 * @return {Product}
 */
export const createProduct = ({ input }) => {
  // deconstruct input to remove unformatted related fields
  const { userId, shipmentId, ...rest } = input

  // format data with optional related fields
  const data = {
    ...rest,
    ...(input.userId && {
      user: {
        connect: { id: userId },
      },
    }),
    ...(shipmentId && {
      shipment: {
        connect: { id: shipmentId },
      },
    }),
  }

  // create product
  return db.product.create({ data })
}

export const updateProduct = ({ input }) => {
  return db.product.update({ where: { id: input.id }, data: input })
}

export const Product = {
  users: (_obj, { root }) =>
    db.product.findOne({ where: { id: root.id } }).users(),
  shipment: (_obj, { root }) =>
    db.product.findOne({ where: { id: root.id } }).shipment(),
}
