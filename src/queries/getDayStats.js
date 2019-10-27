import gql from "graphql-tag"

export const GET_DAY_STATS = gql`
  query getStats($spaceId: String!, $daysAgo: Int!) {
    stats(spaceId: $spaceId, daysAgo: $daysAgo) {
      extra_food_per_day {
        date
        extra_food
      }
        
      feeding_count_per_day {
        date
        feeding_count
      }
    }
  }
`
