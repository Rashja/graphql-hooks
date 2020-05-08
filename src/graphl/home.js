import { gql } from "apollo-boost";

export const homeTypeDefs = gql`
  extend type item {
    quantity: int!
  }
  extend type Mutation {
    AddItemToCart(item: Item!): [Item]!
  }
`;

export const GET_COLLECTIONS_BY_TITLE = gql`
  query GetCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      title
      items {
        name
        price
        imageUrl
      }
    }
  }
`;
