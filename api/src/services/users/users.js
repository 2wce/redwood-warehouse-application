import { UserInputError } from '@redwoodjs/api'

import { db } from 'src/lib/db'

/**
 *
 * @typedef {import("../warehouses/warehouses").Warehouse} Warehouse
 * @typedef {import("../shipments/shipments").Shipment} Shipment
 * @typedef {import("../products/products").Product} Product
 *
 * @typedef {Object} User
 * @property {number} id user id
 * @property {string} name user full name
 * @property {number} email user email
 * @property {Array<Shipment>} shipments shipments
 * @property {Array<Warehouse>} warehouses warehouses
 * @property {Product} product product
 *
 * @typedef {Object} UserInput
 * @property {number=} id user id
 * @property {number=} shipmentId shipment id
 * @property {number=} productId product id
 * @property {number=} warehouseId warehouse id
 * @property {string=} name user full name
 * @property {number} email user email
 *
 */

/**
 * @param {UserInput} input
 * @return {void}
 */
const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new user", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

/**
 * @return {Array<User>}
 */
export const users = () => {
  return db.user.findMany()
}

/**
 * @param {{input: UserInput}} args
 * @return {User}
 */
export const createUser = ({ input }) => {
  validate(input)
  return db.user.create({ data: input })
}

/**
 * @param {{input: UserInput}} args
 * @return {User} user
 */
export const updateUser = ({ input }) => {
  // get updateable value for user
  const { id, name, email } = input

  // format data object
  const data = {
    ...(name && { name }),
    ...(email && { email }),
  }

  // if there is no data just return the user
  if (Object.keys(data).length === 0) {
    return db.user.find({ id })
  }

  // update user & return
  return db.user.update({ where: { id: id }, data })
}

/**
 * @param {{id: number}} args
 * @return {User}
 */
export const deleteUser = ({ id }) => {
  return db.user.delete({ where: { id } })
}

export const User = {
  product: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).product(),
  shipments: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).shipments(),
  warehouses: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).warehouses(),
}
