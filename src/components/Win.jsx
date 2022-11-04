import {set, ref, getDatabase, orderByChild, onValue, query, limitToFirst} from 'firebase/database';
import React, { useState, useEffect } from 'react'


const Win = ({timer, PA, active }) => {
    const [userInfo, setUserInfo] = useState("");
    const [scores, setScores] = useState(null);
    const [output, setOutput] = useState(null);

    const db= getDatabase();

    const createScore = () =>{
        set(ref(db, `Battle/High Scores/${userInfo}`), { 'score':timer });
    };

    const db2 = query(ref(db,`Battle/High Scores/`), orderByChild('score'), limitToFirst(5));
    const getScores = () =>{
        onValue(db2, (snapshot)=>{
            setScores(snapshot.val());
            });
        };

    // const scoreRef = ref(db, 'Battle/High Scores/');
    useEffect(() => {
        getScores(); 
    }, [active]);

    useEffect(()=>{scores.map(score=>{return(
        <div>{score}</div>
    )})
},[scores])
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
            {output}
        </div>
        <button type='button' onClick={PA}>Play Again</button>
        
    </div>
  )
}

export default Win