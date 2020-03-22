import gql from "graphql-tag"

export const GET_ACTIVITY_LOG = gql`
  query getActivityLog($spaceId: String!) {
    activity_log(spaceId: $spaceId) {
      id
      spaceId
      time
      message
    }
  }
`
