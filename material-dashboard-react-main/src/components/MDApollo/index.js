// Importing Apollo
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error"; // Built-in method to handle errors

const errorLink = onError(({graphqlErrors , networkError}) => {
    if (graphqlErrors) {
        graphqlErrors.map(({message , location , path}) => {
            alert(`Graphql Error ${message}`)
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:2000/graphql" })
])

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})