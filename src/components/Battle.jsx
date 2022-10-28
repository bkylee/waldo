import React from 'react';
import HitMiss from './HitMiss';

const Battle = ({getCoords}) => {
  return (
    <>
    <HitMiss />
    <img src={require('../images/battle.png')} onClick={(e)=>getCoords(e)} alt="" />
    </>
  )
}

export default Battle