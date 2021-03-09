import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CLOSE_PULL_REQUEST from '../operations/mutations/closePullRequest'
import { useMutation } from '@apollo/client'

const ClosePullRequestButton = ({ pullRequestIds, clientMutationId }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [closePullRequest] = useMutation(CLOSE_PULL_REQUEST)

  const handleClosePullRequests = () => {
    handleClose()
    pullRequestIds.forEach((pullRequestId) => {
      closePullRequest({
        variables: {
          pullRequestId: pullRequestId,
          clientMutationId: clientMutationId,
        },
      })
    })
  }
  return (
    <>
      <Button
        variant='danger'
        disabled={pullRequestIds.length === 0}
        onClick={handleShow}
      >
        Close Selected Pull Requests
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your about to close {pullRequestIds.length} pull requests. There is no
          looking back after this.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClosePullRequests}>
            Close Pull Request(s)
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ClosePullRequestButton
