import React, {useEffect, useState} from 'react';

const Battle = ({battleWaldo, setHit}) => {
  const [coords, setCoords] = useState({x:0, y:0});
  const getCoords = (e) =>{
    const box  = e.target.getBoundingClientRect();
    setCoords({x : e.screenX - box.left , y : e.screenY - box.right});
    if (coords.x >= battleWaldo.x1 && coords.x<= battleWaldo.x2 && coords.y >= battleWaldo.y1 && coords.y <= battleWaldo.y2){
      setHit(true);
    }else{
      setHit(false);
    };
  };
    
  return (
    <>
    <img src={require('../images/battle.png')} onClick={(e)=>getCoords(e)} alt="" />
    </>
  )
}

export default Battle