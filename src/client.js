import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

export default function getClient(token) {
  const httpLink = createHttpLink({uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:8080/food-time'})

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache({
      cacheRedirects: {
        Query: {
          entry: (_, args, { getCacheKey }) => getCacheKey({__typename: 'Entry', id: args.id})
        },
      },
    }),
    link: authLink.concat(httpLink)
  })
}
