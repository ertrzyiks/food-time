import gql from "graphql-tag";

export const GET_SPACES = gql`
  query getSpaces {
    spaces {
      id
      display_name
    }
  }
`
