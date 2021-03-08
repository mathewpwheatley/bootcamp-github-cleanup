import { gql } from '@apollo/client'

const GET_ALL_REPOSITORIES = gql`
  query {
    viewer {
      id
      repositories(first: 25) {
        totalCount
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  }
`
export default GET_ALL_REPOSITORIES
