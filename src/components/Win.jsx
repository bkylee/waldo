import { doc, getDocs, orderBy, query, collection, setDoc, limit} from "firebase/firestore";
import React, { useState } from 'react'
import {db} from '../App'
import uniqid from 'uniqid'
const Win = ({timer, PA }) => {
    const [userInfo, setUserInfo] = useState("");
    const [scores, setScores] = useState([]);
    const scoreRef = collection(db,"Scores");
    const q = query(scoreRef, orderBy("score"), limit(5))
    
    const fetchscore = async () =>{
        const querySnap = await getDocs(q);
        setScores(querySnap.docs.map(scores=>({...scores.data()})));
    }    
    fetchscore();
    
    const onClick = async () =>{
        await setDoc(doc(db, "Scores", `${userInfo}`), {
            name: userInfo,
            score: timer
        });
        fetchscore();
    };

    
  return (
    <div>
        <h1>You found everyone!</h1>
        <div>
            <h1>Your time was {timer}</h1>
            <form>
                <label htmlFor='name' >Name
                <input type='text' id='name' value={userInfo} onChange={(e)=>{setUserInfo(e.target.value)}}/> </label>
                <button type='button' onClick={onClick} >Submit</button>
            </form>
        </div>
        <div id='scores'>    
            <h1>High Scores</h1>
            {
                scores.map(score=>{
                    return(
                        <div key={uniqid()}>{score.name}:{score.score}</div>
                    )
                })
            }
        </div>
        <button type='button' onClick={PA}>Play Again</button>
        
    </div>
  )
};
export default Win