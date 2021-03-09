import React from 'react'
import { Pagination } from 'react-bootstrap'

const TablePagination = ({
  currentPage,
  pageCount,
  nextPageAction,
  previousPageAction,
}) => {
  // Add pages to pagination items
  let pageItems = []

  currentPage > 1 &&
    pageItems.push(<Pagination.Prev onClick={previousPageAction} />)
  // Add first page and ellipsis
  if (currentPage !== 1) {
    pageItems.push(
      <Pagination.Item key={1} active={false} disabled={true}>
        1
      </Pagination.Item>,
      <Pagination.Ellipsis disabled={true} />
    )
  }
  // Add current pages
  pageItems.push(
    <Pagination.Item disabled={true} key={currentPage} active={true}>
      {currentPage}
    </Pagination.Item>
  )
  // Add last page and ellipsis
  if (currentPage !== pageCount) {
    pageItems.push(
      <Pagination.Ellipsis disabled={true} />,
      <Pagination.Item key={pageCount} active={false} disabled={true}>
        {pageCount}
      </Pagination.Item>
    )
  }

  currentPage < pageCount &&
    pageItems.push(<Pagination.Next onClick={nextPageAction} />)

  return <Pagination>{pageItems}</Pagination>
}

export default TablePagination
