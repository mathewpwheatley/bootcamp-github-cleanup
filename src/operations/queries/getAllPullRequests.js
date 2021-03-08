import { gql } from '@apollo/client'

const GET_ALL_PULL_REQUESTS = gql`
  query GetAllPullRequests(
    $first: Int
    $after: String
    $states: [PullRequestState!]
  ) {
    viewer {
      pullRequests(first: $first, after: $after, states: $states) {
        totalCount
        edges {
          cursor
          node {
            id
            title
            createdAt
            updatedAt
            state
          }
        }
      }
    }
  }
`
export default GET_ALL_PULL_REQUESTS
