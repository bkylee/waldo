import React, {useState, useEffect} from 'react';
import HitMiss from './HitMiss'

const Battle = ({waldo, maldo, president, setHit, hit}) => {

  const [coords, setCoords] = useState({x:0, y:0});
  const onClick = (e) =>{
    const box  = e.currentTarget.getBoundingClientRect();
    setCoords({x : e.pageX - window.pageXOffset -box.left , y : e.pageY - window.pageYOffset -box.top});
    console.log(coords);
	if (coords.x >= waldo.x1 && coords.x <= waldo.x2 && coords.y >= waldo.y1 && coords.y <= waldo.y2){
		setHit(true);
	  }else{
	  setHit(false);
  	};
	if (coords.x >= maldo.x1 && coords.x <= maldo.x2 && coords.y >= maldo.y1 && coords.y <= maldo.y2){
		setHit(true);
	  }else{
	  setHit(false);
  	};

	if (coords.x >= president.x1 && coords.x <= president.x2 && coords.y >= president.y1 && coords.y <= president.y2){
		setHit(true);
	  }else{
	  setHit(false);
  	};

  };
    
  return (
    <>
    <HitMiss setHit={setHit} hit={hit}/>
    <img src={require('../images/battle.png')} onClick={(e)=>onClick(e)} alt="" />
    </>
  )
}

export default Battle