import gql from "graphql-tag";

export const CREATE_ACTIVITY_LOG_ENTRY = gql`
  mutation CreateActivityLogEntry($spaceId: String!, $time: Int!, $message: String!) {
    createActivityLogEntry(spaceId: $spaceId, time: $time, message: $message) {
      id
      time
      spaceId
      message  
    }
  }
`
