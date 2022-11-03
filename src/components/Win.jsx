import {set, ref} from 'firebase/database';
import React, { useState } from 'react'

const Win = ({timer, PA, db}) => {
    const [userInfo, setUserInfo] = useState("");
    const [sub, setSub] = useState(true);
    
    const createScore = () =>{
        set(ref(db, `Battle/High Scores/` + userInfo),{
            time: timer
        })
    }
 
  return (
    <div>
        <h1>You found everyone!</h1>
        <div>
            <h1>Your time was {timer}</h1>
            <form>
                <label htmlFor='name' >Name
                <input type='text' id='name' value={userInfo} onChange={(e)=>{setUserInfo(e.target.value)}}/> </label>
                <button type='button' onClick={createScore}>Submit</button>
            </form>
        </div>
        <div id='scores'>    
            <h1>High Scores</h1>
            {/* scores */}
        </div>
        <button type='button' onClick={PA}>Play Again</button>
        
    </div>
  )
}

export default Win