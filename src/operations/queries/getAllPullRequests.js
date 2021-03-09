import { gql } from '@apollo/client'

const GET_ALL_PULL_REQUESTS = gql`
  query GetAllPullRequests(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $states: [PullRequestState!]
  ) {
    viewer {
      pullRequests(
        first: $first
        after: $after
        last: $last
        before: $before
        states: $states
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
        }
        edges {
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
