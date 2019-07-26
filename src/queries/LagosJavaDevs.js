import gql from "graphql-tag";

export const LAGOS_JAVA_DEVS_QUERY = gql`
  query {
    search(query: "location:lagos language:java", type: USER, first: 20) {
      edges {
        node {
          ... on User {
            id
            name
            bio
            url
            login
            avatarUrl
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;
