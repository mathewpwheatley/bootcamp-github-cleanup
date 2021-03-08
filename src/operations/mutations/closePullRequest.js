import { gql } from '@apollo/client'

const CLOSE_PULL_REQUEST = gql`
  mutation {
    closePullRequest(
      input: {
        pullRequestId: "MDExOlB1bGxSZXF1ZXN0Mzk1MzE5Mzg1"
        clientMutationId: "MDQ6VXNlcjYxOTk2OTEz"
      }
    ) {
      pullRequest {
        state
      }
    }
  }
`
export default CLOSE_PULL_REQUEST
