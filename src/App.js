import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Battle from './components/Battle';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://console.firebase.google.com/u/0/project/waldo-2884f/database/waldo-2884f-default-rtdb/data/~2F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const App = () => {
  const [coords, setCoords] = useState({x:0, y:0});

  const [box, setBox] = useState({x1: 0, x2: 50, })

  const waldo = {x1: 2129, y1: -1447, x2:2123, y2:-1447, x3:2129, y3:-1418, x4:2123, y4:-1418};
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