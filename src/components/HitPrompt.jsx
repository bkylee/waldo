import React from 'react'

const HitPrompt = ({name, close}) => {
  return (
    <div id='hitMiss'><h2>You found {name}!</h2><button type='button' onClick={close}>Close</button></div>
  )
}

export default HitPrompt