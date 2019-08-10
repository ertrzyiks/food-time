import gql from 'graphql-tag'

export const UPDATE_ENTRY_TIME = gql`
  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int) {
    updateEntry(id: $id, time: $time, extra_food: $extra_food) {
      id
      time
      extra_food
    }
  }
`
