export const schema = gql`
  type Product {
    id: Int!
    name: String!
    price: String!
    quantity: Int!
    sku: String!
    createdAt: DateTime!
    users: [User]
    shipment: Shipment
  }

  type Query {
    products: [Product!]!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    updateProduct(input: UpdateProductInput!): Product
  }

  input CreateProductInput {
    name: String!
    price: String!
    quantity: Int!
    sku: String!
    shipmentId: Int
    userId: Int
  }

  input UpdateProductInput {
    id: Int!
    name: String
    price: String
    quantity: Int
    sku: String
    shipmentId: Int
  }
`
