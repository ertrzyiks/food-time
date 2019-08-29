import gql from "graphql-tag";

export const GET_ENTRIES = gql`
  query getEntries($spaceId: String!) {
    entries(spaceId: $spaceId) {
      id
      time
      extra_food
      spaceId
      type  
      vitamin
    }
  }
`
