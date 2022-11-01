import React, { useEffect, useState } from 'react'
import HitPrompt from './HitPrompt';

const HitMiss = ({pres, mald, wald, hit, setHit}) => {
  const [check, setCheck] = useState(false);
  const [target, setTarget] = useState();
  const close = ()=>{
   setHit(false);
  };
  useEffect(()=>{
    setTarget("The President")
  },[pres]);

  useEffect(()=>{
    setTarget("Maldo")
  },[mald]);

  useEffect(()=>{
    setTarget("Waldo")
  },[wald]);

  useEffect(()=>{
    if (pres && mald && wald){
      setCheck(true);
    };
  },[pres, mald, wald])



  const PA = () =>{
    setCheck(false);
}

  return (<>
    {check?<div>You win! <button type='button' onClick={PA}>Play Again</button></div> : null }
    {hit ? <HitPrompt name={target} close={close} /> : null}
    </>
  )
}
export default HitMiss
