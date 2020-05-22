export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    product: Product
    shipments: Shipment
    warehouses: Warehouse
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    name: String
  }

  input UpdateUserInput {
    id: Int!
    email: String
    name: String
  }
`
