export const schema = gql`
  type Warehouse {
    id: Int!
    name: String!
    location: String
    shipment: Shipment
    user: User
  }

  type Query {
    warehouses: [Warehouse!]!
  }

  type Mutation {
    createWarehouse(input: CreateWarehouseInput!): Warehouse
    updateWarehouse(input: UpdateWarehouseInput!): Warehouse
  }

  input CreateWarehouseInput {
    name: String!
    location: String
    userId: Int
  }

  input UpdateWarehouseInput {
    id: Int!
    name: String
    location: String
  }
`
