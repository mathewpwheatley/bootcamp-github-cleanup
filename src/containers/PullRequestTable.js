import React from 'react'
import { Table } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import GET_ALL_PULL_REQUESTS from '../operations/queries/getAllPullRequests'

const PullRequestTable = () => {
  const useQueryVariables = () => {
    return {
      // cursor: '',
      first: 5,
      // states: 'OPEN',
    }
  }

  const { loading, error, data } = useQuery(GET_ALL_PULL_REQUESTS, {
    variables: useQueryVariables(),
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :({error.message}</p>

  const createTable = () => {
    return (
      <Table className='text-center' size='sm' hover bordered>
        <thead className='thead-light'>
          <tr>
            <th>Cursor</th>
            <th>ID</th>
            <th>Title</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.viewer.pullRequests.edges.map((pullRequest) => {
            return (
              <tr>
                <td>{pullRequest.cursor}</td>
                <td>{pullRequest.node.id}</td>
                <td>{pullRequest.node.title}</td>
                <td>{pullRequest.node.state}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
  return <div>{createTable()}</div>
}

export default PullRequestTable
