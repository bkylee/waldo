import React, { useEffect, useState } from 'react'
import HitPrompt from './HitPrompt';

const HitMiss = ({pres, mald, wald, hit, setHit, PA, check}) => {
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

  return (
  <>
    {hit ? <HitPrompt name={target} close={close} /> : null}
  </>
  )
}
export default HitMiss
