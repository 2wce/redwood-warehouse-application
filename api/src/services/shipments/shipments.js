import { db } from 'src/lib/db'

/**
 *
 * @typedef {import("../warehouses/warehouses").Warehouse} Warehouse
 * @typedef {import("../users/users").User} User
 * @typedef {import("../products/products").Product} Product
 *
 * @typedef {Object} Shipment
 * @property {number} id shipment id
 * @property {string} destination shipment destination
 * @property {number} quantity shipment quantity
 * @property {Array<Product>} products products
 * @property {Warehouse} warehouse warehouse
 * @property {User} user user
 *
 * @typedef {Object} ShipmentInput
 * @property {number=} id shipment id
 * @property {number=} userId user id
 * @property {number=} productId product id
 * @property {number=} warehouseId warehouse id
 * @property {string} destination shipment destination
 * @property {number} quantity shipment quantity
 *
 */

/**
 * @return {Array<Shipment>}
 */
export const shipments = () => {
  return db.shipment.findMany()
}

/**
 * @param {{input: ShipmentInput}} args
 * @return {Shipment}
 */
export const createShipment = ({ input }) => {
  return db.shipment.create({ data: input })
}

/**
 * @param {{input: ShipmentInput}} args
 * @return {Shipment}
 */
export const updateShipment = ({ input }) => {
  return db.shipment.update({ where: { id: input.id }, data: input })
}

export const Shipment = {
  products: (_obj, { root }) =>
    db.shipment.findOne({ where: { id: root.id } }).products(),
  user: (_obj, { root }) =>
    db.shipment.findOne({ where: { id: root.id } }).user(),
  warehouse: (_obj, { root }) =>
    db.shipment.findOne({ where: { id: root.id } }).warehouse(),
}
