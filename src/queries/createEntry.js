import gql from "graphql-tag";

export const CREATE_ENTRY = gql`
  mutation CreateEntry($spaceId: String!, $time: Int!) {
    createEntry(spaceId: $spaceId, time: $time) {
      id
      time
      extra_food
      type  
      vitamin
      source
    }
  }
`
