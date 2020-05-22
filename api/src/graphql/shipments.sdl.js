export const schema = gql`
  type Shipment {
    id: Int!
    destination: String!
    quantity: Int!
    products: Product
    user: User!
    warehouse: Warehouse!
  }

  type Query {
    shipments: [Shipment!]!
  }

  type Mutation {
    createShipment(input: CreateShipmentInput!): Shipment
    updateShipment(input: UpdateShipmentInput!): Shipment
  }

  input CreateShipmentInput {
    destination: String!
    quantity: Int!
    userId: Int!
    warehouseId: Int!
  }

  input UpdateShipmentInput {
    id: Int!
    destination: String
    quantity: Int
    userId: Int
    warehouseId: Int
  }
`
