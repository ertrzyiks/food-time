import gql from 'graphql-tag'

export const GET_ENTRY = gql`
  query getEntry($id: String!) {
    entry(id: $id) {
      id
      time
      extra_food
      spaceId
    }
  }
`
