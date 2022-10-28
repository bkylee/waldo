import React from 'react';

const Battle = ({coords, getCoords}) => {
  return (
    <>
    <img src={require('../images/battle.png')} onClick={(e)=>getCoords(e)} alt="" />
    </>
  )
}

export default Battle