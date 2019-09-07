import gql from 'graphql-tag'

export const UPDATE_ENTRY_TIME = gql`
  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int, $type: String, $vitamin: Boolean, $source: String) {
    updateEntry(id: $id, time: $time, extra_food: $extra_food, type: $type, vitamin: $vitamin, source: $source) {
      id
      time
      extra_food
      type  
      vitamin
      source
    }
  }
`
