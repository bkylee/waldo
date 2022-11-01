import React from 'react'

const HitPrompt = ({name, close}) => {
  return (
    <><h2>You found {name}!</h2><button type='button' onClick={close}>Close</button></>
  )
}

export default HitPrompt