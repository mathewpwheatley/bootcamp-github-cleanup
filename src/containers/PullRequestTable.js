import React, { useState } from 'react'
import {
  ToggleButtonGroup,
  ToggleButton,
  Pagination,
  Form,
  Nav,
  NavDropdown,
  Table,
} from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import GET_ALL_PULL_REQUESTS from '../operations/queries/getAllPullRequests'

const PullRequestTable = () => {
  const countPerPageOptions = [10, 25, 50, 100]
  const pullRequestStatesOptions = ['OPEN', 'CLOSED', 'MERGED']

  const [pageNumber, setPageNumber] = useState(1)
  const [pageCursor, setPageCursor] = useState()
  const [previousPageCursors, setPreviousPageCursors] = useState([])
  const [countPerPage, setCountPerPage] = useState(10)
  const [pullRequestStates, setPullRequestStates] = useState(
    pullRequestStatesOptions
  )

  const createCountPerPageDropdown = () => {
    const handleClick = (countPerPageSelection) => {
      setCountPerPage(countPerPageSelection)
    }

    return (
      <NavDropdown title={countPerPage} id='nav-dropdown'>
        {countPerPageOptions.map((count, index) => {
          return (
            <NavDropdown.Item
              name={count}
              eventKey={index}
              onClick={() => handleClick(count)}
            >
              {count}
            </NavDropdown.Item>
          )
        })}
      </NavDropdown>
    )
  }

  const createPullRequestStatesCheckboxs = () => {
    const handleClick = (pullRequestState) => {
      if (pullRequestStates.includes(pullRequestState)) {
        if (pullRequestStates.length === 1) {
          setPullRequestStates(pullRequestStatesOptions)
        } else {
          setPullRequestStates(
            pullRequestStates.filter((key) => key !== pullRequestState)
          )
        }
      } else {
        setPullRequestStates([...pullRequestStates, pullRequestState])
      }
    }

    return (
      <ToggleButtonGroup type='checkbox' value={pullRequestStates}>
        {pullRequestStatesOptions.map((pullRequestState) => {
          return (
            <ToggleButton
              title={pullRequestState}
              value={pullRequestState}
              type='checkbox'
              variant='primary'
              onClick={() => handleClick(pullRequestState)}
            >
              {pullRequestState}
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>
    )
  }

  const useQueryVariables = () => {
    return {
      after: pageCursor,
      first: countPerPage,
      states: pullRequestStates,
    }
  }

  const { loading, error, data } = useQuery(GET_ALL_PULL_REQUESTS, {
    variables: useQueryVariables(),
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :({error.message}</p>

  const createTableNav = () => {
    return (
      <Nav className='justify-content-end'>
        {createCountPerPageDropdown()}
        {createPullRequestStatesCheckboxs()}
      </Nav>
    )
  }

  const createTable = () => {
    return (
      <Table className='text-center' size='sm' hover bordered>
        <thead className='thead-light'>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Title</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.viewer.pullRequests.edges.map((pullRequest) => {
            return (
              <tr>
                <td>
                  <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' />
                  </Form.Group>
                </td>
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

  const createPagination = () => {
    const pageCount = Math.ceil(
      data.viewer.pullRequests.totalCount / countPerPage
    )

    // Add pages to pagination items
    let pageItems = []
    // Add previous button
    const previousPage = () => {
      setPageNumber(pageNumber - 1)
      setPageCursor(previousPageCursors[pageNumber - 1])
    }
    data.viewer.pullRequests.pageInfo.hasPreviousPage &&
      pageItems.push(<Pagination.Prev onClick={previousPage} />)
    // Add first page and ellipsis
    if (pageNumber !== 1) {
      pageItems.push(
        <Pagination.Item key={1} active={false} disabled={true}>
          1
        </Pagination.Item>,
        <Pagination.Ellipsis disabled={true} />
      )
    }
    // Add current pages
    pageItems.push(
      <Pagination.Item disabled={true} key={pageNumber} active={true}>
        {pageNumber}
      </Pagination.Item>
    )
    // Add last page and ellipsis
    if (pageNumber !== pageCount) {
      pageItems.push(
        <Pagination.Ellipsis disabled={true} />,
        <Pagination.Item key={pageCount} active={false} disabled={true}>
          {pageCount}
        </Pagination.Item>
      )
    }
    // Add next page button
    const nextPage = () => {
      setPageNumber(pageNumber + 1)
      !previousPageCursors.includes(pageCursor) &&
        setPreviousPageCursors([...previousPageCursors, pageCursor])
      setPageCursor(data.viewer.pullRequests.pageInfo.endCursor)
    }
    data.viewer.pullRequests.pageInfo.hasNextPage &&
      pageItems.push(<Pagination.Next onClick={nextPage} />)
    return <Pagination>{pageItems}</Pagination>
  }

  return (
    <>
      {console.log(pageNumber, pageCursor, previousPageCursors)}
      {createTableNav()}
      {createTable()}
      {createPagination()}
    </>
  )
}

export default PullRequestTable
