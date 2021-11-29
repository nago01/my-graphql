import {gql} from "@apollo/client";

export const BACKEND_QUERY = gql `
query {
    users {
      name
      age
      email
    }
  }
`;