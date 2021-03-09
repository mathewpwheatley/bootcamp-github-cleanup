import React from 'react'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

const StateCheckboxes = ({
  stateOptions,
  currentStates,
  statesChangeAction,
}) => {
  const mapCheckboxes = () => {
    return stateOptions.map((stateOption) => {
      return (
        <ToggleButton
          title={stateOption}
          value={stateOption}
          type='checkbox'
          variant='primary'
          onClick={() => statesChangeAction(stateOption)}
        >
          {stateOption}
        </ToggleButton>
      )
    })
  }
  return (
    <ToggleButtonGroup type='checkbox' value={currentStates}>
      {mapCheckboxes()}
    </ToggleButtonGroup>
  )
}

export default StateCheckboxes
