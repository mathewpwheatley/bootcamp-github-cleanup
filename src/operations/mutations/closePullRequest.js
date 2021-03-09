import { gql } from '@apollo/client'

const CLOSE_PULL_REQUEST = gql`
  mutation closePullRequest($pullRequestId: ID, $clientMutationId: String) {
    closePullRequest(
      input: {
        pullRequestId: $pullRequestId
        clientMutationId: $clientMutationId
      }
    ) {
      pullRequest {
        id
        state
      }
    }
  }
`
export default CLOSE_PULL_REQUEST
