import React, {useState, useEffect} from 'react';
import HitMiss from './HitMiss'
import wImage from '../images/battle/waldo.png';
import mImage from '../images/battle/maldo.png';
import pImage from '../images/battle/president.png';
import Win from './Win';
import { Link } from 'react-router-dom';

const Battle = ({waldo, maldo, president, db}) => {
	const [hit, setHit] = useState(null);
	const [pres, setPres] = useState(false);
	const [wald, setWald] = useState(false);
	const [mald, setMald] = useState(false);
	const [check, setCheck] = useState(false);
  const [coords, setCoords] = useState({x:0, y:0});
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(true);

  const onClick = (e) =>{
    const box  = e.currentTarget.getBoundingClientRect();
    setCoords({x : e.pageX - window.pageXOffset -box.left , y : e.pageY - window.pageYOffset -box.top});
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
  
  useEffect(()=>{
	let interval = null;
	if (active){
		interval = setInterval(()=>{
			setTimer(seconds => seconds + 1);
		}, 1000);
	}else if(!active && timer !== 0){
		clearInterval(interval);
	}
	return () => clearInterval(interval);
  },[active, timer]);

  const PA = () =>{
    setCheck(false);
	setWald(false);
	setMald(false);
	setPres(false);
	setHit(false);
	setTimer(0);
	setActive(true);
	}

	useEffect(()=>{
		if (pres && mald && wald){
		  setCheck(true);
		  setActive(false);
		};
	  },[pres, mald, wald]);
    
  return (
    <>
	<div className='header'>	
		<h1 className='find'>Find the President <img src={pImage} alt=""/>, Waldo <img src={wImage} alt=""/>, and Maldo <img src={mImage} alt=""/> </h1>
		<h2 className='timer'>{timer}</h2>
		<Link to='/battle/solution'>Solution</Link>
	</div>
		<HitMiss pres={pres} wald={wald} mald={mald} coords={coords} hit={hit} setHit={setHit} PA={PA} check={check} />
		{check ?<Win db={db}timer={timer} setTimer={setTimer} setActive={setActive} setHit={setHit} PA={PA}/> : null }
    <img src={require('../images/battle/battle.png')} onClick={(e)=>onClick(e)} alt="" />
    </>
  )
}

export default Battle