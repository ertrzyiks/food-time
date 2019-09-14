import gql from 'graphql-tag'

export const UPDATE_ENTRY = gql`
  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int, $type: String, $vitamin: Boolean, $source: String, $feeding_duration: Int) {
    updateEntry(id: $id, time: $time, extra_food: $extra_food, type: $type, vitamin: $vitamin, source: $source, feeding_duration: $feeding_duration) {
      id
      time
      extra_food
      type  
      vitamin
      source
      feeding_duration
    }
  }
`
