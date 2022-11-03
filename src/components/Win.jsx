import {set, ref, getDatabase, get, onValue, query} from 'firebase/database';
import React, { useState, useEffect } from 'react'


const Win = ({timer, PA, active }) => {
    const [userInfo, setUserInfo] = useState("");
    const [scores, setScores] = useState(null);


    const db= getDatabase();
    // const db2 = query(ref(db, ))
    const createScore = () =>{
        set(ref(db, `Battle/High Scores/`), { [userInfo]:timer });
    };

    const scoreRef = ref(db, 'Battle/High Scores/');
    useEffect(() => {
        const getScores = () =>{
            onValue(scoreRef, (snapshot)=>{
                const data = snapshot.val();
                setScores(data);
            });
        };
        if(active === false){getScores(); console.log(scores)}
    }, [active]);

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
            {}
        </div>
        <button type='button' onClick={PA}>Play Again</button>
        
    </div>
  )
}

export default Win