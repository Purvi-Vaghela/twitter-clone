import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== 'undefined'
// if server side rendered page isClient == false

export const graphQLClient = new GraphQLClient("http://localhost:8000/graphql", {
    headers: () => ({
        Authorization: isClient ? `Bearer ${window.localStorage.getItem("__twitter_token")}` : "" ,
    })
});