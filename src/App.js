import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Battle from './components/Battle';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {

  apiKey: "AIzaSyBT62ZHeyLXiKr0ajTVHCWGgtZRUY2uXGo",

  authDomain: "waldo-2884f.firebaseapp.com",

  databaseURL: "https://waldo-2884f-default-rtdb.firebaseio.com",

  projectId: "waldo-2884f",

  storageBucket: "waldo-2884f.appspot.com",

  messagingSenderId: "1071790127666",

  appId: "1:1071790127666:web:2165f76823f32956e7da2b",

  measurementId: "G-SLRTTWB7VV"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service

const dbRef = ref(getDatabase());

let battleWaldo;
get(child(dbRef, '/Battle/Coordinates/Waldo/')).then((snapshot)=>{
  if(snapshot.exists()){
    battleWaldo = snapshot.val();
    console.log(snapshot.val())
  }
  else{console.log('no data')};
}).catch((error)=>{
  console.error(error);
});

const checkClick = ({coords, waldo, miss, hit, setMiss, setHit}) =>{
  if (coords[0] >= waldo.x1 && coords[0]<= waldo.x2 && coords[0] && coords[1] >= waldo.y1 && coords[1] <= waldo.y2){
    setHit(true);
  }else{
    setMiss(true);
  };
}



const App = () => {
  // NEED TO FIX first click is set to 0,0 
  const [coords, setCoords] = useState(()=>{x:0, y:0});

  const [miss, setMiss] = useState(false);
  const [hit, setHit] = useState(false);
  
  // const [box, setBox] = useState({x1: 0, x2: 50, })

  // const waldo = {x1: 2129, y1: -1447, x2:2123, y2:-1447, x3:2129, y3:-1418, x4:2123, y4:-1418};
  const getCoords = e =>{
    const box  = e.target.getBoundingClientRect();
    setCoords({x : e.screenX - box.left , y : e.screenY - box.right});
    console.log(coords);
  };

  return (
    <Routes>
      <Route path='/waldo' element={<Welcome />} />
      <Route path='/battle' element={<Battle coords={coords} getCoords={getCoords} />}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App