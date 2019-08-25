import gql from 'graphql-tag'

export const CREATE_SPACE = gql`
  mutation CreateSpace($name: String!) {
    createSpace(name: $name) {
      id
      display_name
    }
  }
`
