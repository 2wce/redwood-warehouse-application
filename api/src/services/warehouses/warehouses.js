import { db } from 'src/lib/db'

/**
 * @typedef {import("../shipments/shipments").Shipment} Shipment
 * @typedef {import("../users/users").User} User
 *
 * @typedef {Object} Warehouse
 * @property {number} id user id
 * @property {string} name warehouse name
 * @property {number} location warehouse location
 * @property {Array<Shipment>} shipments warehouse shipments
 * @property {User} user warehouse owner
 *
 * @typedef {Object} WarehouseInput
 * @property {number=} id user id
 * @property {number=} shipmentId shipment id
 * @property {number=} userId user id
 * @property {string} name warehouse name
 * @property {number} location warehouse location
 *
 */

/**
 * @return {Array<Warehouse>}
 */
export const warehouses = () => {
  return db.warehouse.findMany()
}

/**
 * @param {{input: WarehouseInput}} args
 * @return {Warehouse}
 */
export const createWarehouse = ({ input }) => {
  return db.warehouse.create({ data: input })
}

/**
 * @param {{input: WarehouseInput}} args
 * @return {Warehouse}
 */
export const updateWarehouse = ({ input }) => {
  return db.warehouse.update({ where: { id: input.id }, data: input })
}

export const Warehouse = {
  shipments: (_obj, { root }) =>
    db.warehouse.findOne({ where: { id: root.id } }).shipments(),
  user: (_obj, { root }) =>
    db.warehouse.findOne({ where: { id: root.id } }).user(),
}
