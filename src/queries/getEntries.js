import gql from "graphql-tag";

export const GET_ENTIRES = gql`
  query getEntries($spaceId: String!) {
    entries(spaceId: $spaceId) {
      id
      time
    }
  }
`
