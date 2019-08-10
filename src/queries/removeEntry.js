import gql from 'graphql-tag'

export const REMOVE_ENTRY = gql`
  mutation RemoveEntry($id: String!) {
    removeEntry(id: $id) {
      message
      removedId
    }
  }
`
