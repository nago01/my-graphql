import {gql} from "@apollo/client";

export const CREATE_USER = gql `
mutation createUser($name : String!){
    createUser(name : $name) {
      name
      email
      age
    }
  }
`;