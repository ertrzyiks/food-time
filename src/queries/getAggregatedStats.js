import gql from "graphql-tag"

export const GET_AGGREGATED_STATS = gql`
  query getAggregatedStats($spaceId: String!) {
    aggregated_stats(spaceId: $spaceId) {
      extra_food_per_week {
        week_start_date
        extra_food
      }
      
      feeding_count_per_week {
        week_start_date
        feeding_count
      }
    }
  }
`