import React from 'react'
import { useEffect } from 'react';

const HitMiss = ({hit, miss, setHit, setMiss, done}) => {
  let output;
    useEffect(() => {
    if(hit){
        setMiss(false);
        output = 
        <div id='hitMiss'>You found him! <button type='button' onClick={done}>Close</button></div>
    }else{
        setHit(false);
        output=
        <div id='hitMiss'>You missed</div>
    }
    return () => {}
  }, [hit, miss])
    return (
    {output}
  )
}

export default HitMiss