import { get } from 'firebase/database';
import React, {useState, useEffect} from 'react';
import HitMiss from './HitMiss'

const Battle = ({dbRef, setHit, hit}) => {
	useEffect(()=>{
		const getCoords = async () => {
		  get(child(dbRef, `users/BAtt`)).then((snapshot) => {
			if (snapshot.exists()) {
			  console.log(snapshot.val());
			} else {
			  console.log("No data available");
			}
		  }).catch((error) => {
			console.error(error);
		  });
		}
		getCoords();
	  },[]);

	// get coordinates for mouse click based on page, page offset, and element 
  const [coords, setCoords] = useState({x:0, y:0});
  const getCoords = (e) =>{
    const box  = e.currentTarget.getBoundingClientRect();
    setCoords({x : e.pageX - window.pageXOffset -box.left , y : e.pageY - window.pageYOffset -box.top});
    console.log(coords);
  };

  	//check if user has found waldo 
      useEffect(() => {
      if (coords.x >= battle.Waldo.x1 && coords.x <= battle.Waldo.x2 && coords.y >= battle.Waldo.y1 && coords.y <= battle.Waldo.y2){
            setHit(true);
              }else{
              setHit(false);
          };
    }, [coords]);
    
  return (
    <>
    <HitMiss setHit={setHit} hit={hit}/>
    <img src={require('../images/battle.png')} onClick={(e)=>getCoords(e)} alt="" />
    </>
  )
}

export default Battle