import React from 'react'

const HitMiss = ({hit, setHit}) => {
  const done = () =>{
    setHit(false);
  }
    return (
    <>
    {hit?<div id='hitMiss'>You found him! <button type='button' onClick={done}>Close</button></div>:<div id='hitMiss'>You missed</div>}
    </>
  )
}

export default HitMiss


