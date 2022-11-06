import { doc, getDoc, orderBy, query, collection} from "firebase/firestore";
import React, { useState, useEffect } from 'react'
import {db} from '../App'

const Win = ({timer, PA }) => {
    const [userInfo, setUserInfo] = useState("");
    const [scores, setScores] = useState([]);
    const scoreRef = doc(db, "Battle", "High Score");
    
    const fetchscore = async () =>{
        const querySnap = await getDoc(scoreRef)
        console.log(querySnap.data())
    }    
    fetchscore();
    // useEffect(()=>{
        //     setScores(getDoc(q));
        //     console.log(scores)
        // },[scores]);

  return (
    <div>
        <h1>You found everyone!</h1>
        <div>
            <h1>Your time was {timer}</h1>
            <form>
                <label htmlFor='name' >Name
                <input type='text' id='name' value={userInfo} onChange={(e)=>{setUserInfo(e.target.value)}}/> </label>
                <button type='button' >Submit</button>
            </form>
        </div>
        <div id='scores'>    
            <h1>High Scores</h1>
            {/* {scores.map(score=>(<div>{score}</div>))} */}
        </div>
        <button type='button' onClick={PA}>Play Again</button>
        
    </div>
  )
};
export default Win