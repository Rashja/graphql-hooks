import { gql } from "apollo-boost";

/*------------------------------- initial data ---------------------------- */
export const counterData = {
  counter: 0,
};
/*----------------------------------- types ------------------------------ */
export const counterTypeDefs = gql`
  extend type Mutation {
    DecreaseCounter: int!
  }
`;
/*-------------------------------- functions ----------------------------- */
export const DECREASE_COUNTER = gql`
  mutation DecreaseCounter {
    decreaseCounter @client
  }
`;

export const GET_COUNTER = gql`
  {
    counter @client
  }
`;
/*-------------------------------- resolver ----------------------------- */
export const counterResolver = {
  Mutation: {
    decreaseCounter: (_root, data, { cache }) => {
      const { counter } = cache.readQuery({
        query: GET_COUNTER,
      });
      cache.writeQuery({
        query: GET_COUNTER,
        data: { counter: counter - 1 },
      });
      return counter;
    },
  },
};
