import gql from "graphql-tag"

export const GET_WEEK_STATS = gql`
  query getStats($spaceId: String!, $daysAgo: Int!) {
    stats(spaceId: $spaceId, daysAgo: $daysAgo) {
      night_breaks {
        date
        firstBreakDurationInMins
        secondBreakDurationInMins
      }

      average_day_break {
        date
        average_duration_mins
      }
    }
  }
`
