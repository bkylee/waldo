import React, {useState, useEffect} from 'react';
import HitMiss from './HitMiss'
import wImage from '../images/battle/waldo.png';
import mImage from '../images/battle/maldo.png';
import pImage from '../images/battle/president.png';
import { Link } from 'react-router-dom';

const Battle = ({waldo, maldo, president}) => {
	const [hit, setHit] = useState(null);
	const [pres, setPres] = useState(false);
	const [wald, setWald] = useState(false);
	const [mald, setMald] = useState(false);
	const [check, setCheck] = useState(false);
  const [coords, setCoords] = useState({x:0, y:0});

  const onClick = (e) =>{
    const box  = e.currentTarget.getBoundingClientRect();
    setCoords({x : e.pageX - window.pageXOffset -box.left , y : e.pageY - window.pageYOffset -box.top});
    console.log(coords);
	if (coords.x >= waldo.x1 && coords.x <= waldo.x2 && coords.y >= waldo.y1 && coords.y <= waldo.y2){
		setWald(true);
		setHit(true);
  	}
	if (coords.x >= maldo.x1 && coords.x <= maldo.x2 && coords.y >= maldo.y1 && coords.y <= maldo.y2){
		setMald(true);
		setHit(true);
  	}
	if (coords.x >= president.x1 && coords.x <= president.x2 && coords.y >= president.y1 && coords.y <= president.y2){
		setPres(true);
		setHit(true);
  	};
  };
  
  const PA = () =>{
    setCheck(false);
	setWald(false);
	setMald(false);
	setPres(false);
	}

	useEffect(()=>{
		if (pres && mald && wald){
		  setCheck(true);
		};
	  },[pres, mald, wald])
    
  return (
    <>
	<div className='header'>	
		<h1 className='find'>Find the President <img src={pImage} alt=""/>, Waldo <img src={wImage} alt=""/>, and Maldo <img src={mImage} alt=""/> </h1>
		<Link to='/battle/solution'>Solution</Link>
	</div>
		<HitMiss pres={pres} wald={wald} mald={mald} coords={coords} hit={hit} setHit={setHit} PA={PA} check={check} />
    <img src={require('../images/battle/battle.png')} onClick={(e)=>onClick(e)} alt="" />
    </>
  )
}

export default Battle