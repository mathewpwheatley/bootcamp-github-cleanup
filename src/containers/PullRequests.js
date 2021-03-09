import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import GET_ALL_PULL_REQUESTS from '../operations/queries/getAllPullRequests'
import TableNavigationBar from './TableNavigationBar'
import TablePagination from '../components/TablePagination'
import CommonTable from '../components/CommonTable'
import ClosePullRequestButton from '../components/ClosePullRequestButton'

const PullRequests = () => {
  const countPerPageOptions = [10, 25, 50, 100]
  const currentStateOptions = ['OPEN', 'CLOSED', 'MERGED']

  const [currentPage, setCurrentPage] = useState(1)
  const [pageCursor, setPageCursor] = useState()
  const [pageCursorDirection, setPageCursorDirection] = useState('after')
  const [countPerPage, setCountPerPage] = useState(countPerPageOptions[0])
  const [currentStates, setCurrentStates] = useState(currentStateOptions[0])
  const [selectedIds, setSelectedIds] = useState([])

  const useQueryVariables = () => {
    const variables = { states: currentStates }
    if (pageCursorDirection === 'after') {
      variables.first = countPerPage
      variables.after = pageCursor
    } else {
      variables.last = countPerPage
      variables.before = pageCursor
    }
    return variables
  }

  const { loading, error, data } = useQuery(GET_ALL_PULL_REQUESTS, {
    variables: useQueryVariables(),
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :({error.message}</p>

  // Table pagination variables & functions
  const pageCount = Math.ceil(
    data.viewer.pullRequests.totalCount / countPerPage
  )

  const pageCountAction = (selectedCountPerPage) => {
    setCountPerPage(selectedCountPerPage)
  }

  const statesChangeAction = (clickedState) => {
    if (currentStates.includes(clickedState)) {
      if (currentStates.length === 1) {
        setCurrentStates(currentStateOptions)
      } else {
        setCurrentStates(currentStates.filter((key) => key !== clickedState))
      }
    } else {
      setCurrentStates([...currentStates, clickedState])
    }
  }

  const nextPageAction = () => {
    setCurrentPage(currentPage + 1)
    setPageCursor(data.viewer.pullRequests.pageInfo.endCursor)
    setPageCursorDirection('after')
  }

  const previousPageAction = () => {
    setCurrentPage(currentPage - 1)
    setPageCursor(data.viewer.pullRequests.pageInfo.startCursor)
    setPageCursorDirection('before')
  }

  const selectAction = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((key) => key !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const selectAllAction = () => {
    if (selectedIds.length === 0) {
      setSelectedIds(
        data.viewer.pullRequests.nodes
          .filter((pullRequest) => {
            return pullRequest.state === 'OPEN'
          })
          .map((pullRequest) => {
            return pullRequest.id
          })
      )
    } else {
      setSelectedIds([])
    }
  }

  return (
    <>
      <TableNavigationBar
        countPerPage={countPerPage}
        countPerPageOptions={countPerPageOptions}
        pageCountAction={pageCountAction}
        stateOptions={currentStateOptions}
        currentStates={currentStates}
        statesChangeAction={statesChangeAction}
      />
      <CommonTable
        variant='pullRequests'
        data={data.viewer.pullRequests.nodes}
        selectedIds={selectedIds}
        selectAction={selectAction}
        selectAllAction={selectAllAction}
      />
      <TablePagination
        currentPage={currentPage}
        pageCount={pageCount}
        nextPageAction={nextPageAction}
        previousPageAction={previousPageAction}
      />
      <ClosePullRequestButton
        pullRequestIds={selectedIds}
        clientMutationId={data.viewer.id}
      />
    </>
  )
}

export default PullRequests
