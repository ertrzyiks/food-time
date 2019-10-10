import gql from "graphql-tag"

export const GET_STATS = gql`
  query getStats($spaceId: String!) {
    stats(spaceId: $spaceId) {
      extra_food_per_day {
        date
        extra_food
      }
        
      feeding_count_per_day {
        date
        feeding_count
      }
        
      night_breaks {
        date
        firstBreakDurationInMins
        secondBreakDurationInMins
      }
    }
  }
`
