import { gql } from "apollo-boost";

/*------------------------------- initial data ---------------------------- */
export const formData = {
  formValue: "",
};
/*----------------------------------- types ------------------------------ */
export const formTypeDefs = gql`
  extend type Mutation {
    SetInputValue(value: string!): string!
  }
`;
/*-------------------------------- functions ----------------------------- */
export const SET_INPUT_VALUE = gql`
  mutation SetInputValue($value: String!) {
    setInputValue(value: $value) @client
  }
`;

export const GET_FORM_VALUE = gql`
  {
    formValue @client
  }
`;
/*-------------------------------- resolver ----------------------------- */
export const formResolver = {
  Mutation: {
    setInputValue: (_root, { value }, { cache }) => {
      cache.writeQuery({
        query: GET_FORM_VALUE,
        data: { formValue: value },
      });
    },
  },
};
