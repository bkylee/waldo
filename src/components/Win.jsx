import { getDatabase, ref, set} from 'firebase/database';
import React, { useEffect, useState } from 'react'

const Win = ({timer, PA}) => {
    const [userInfo, setUserInfo] = useState();
    const [sub, setSub] = useState(true);
    const dbRef = ref(getDatabase());
    const createScore = () =>{
        set(ref(dbRef, 'Battle/High Scores/' + userInfo), {
              timer
              });  
        }
 


  return (
    <div>
        <h1>You found everyone!</h1>
        <div>
            <h1>Your time was {timer}</h1>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' /> 
            <button type='button' onChange={(e)=>{setUserInfo(e.target.value)}} onClick={createScore}>Submit</button>
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