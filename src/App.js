import React, {useEffect, useState} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Battle from './components/Battle';
import NotFound from './components/NotFound';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import Page from './components/Page';
import BattleSolution from './components/BattleSolution';
import him from './images/him.png'
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

const App = () => {

  const [waldo, setWaldo] = useState();
	const [maldo, setMaldo] = useState();
	const [president, setPresident] = useState();

	useEffect(()=>{
		const getCoords = async () => {
		  get(child(dbRef, `Battle/Coordinates/Waldo`)).then((snapshot) => {
			if (snapshot.exists()) {
				setWaldo(snapshot.val());
        console.log(snapshot.val())
			} else {
			  console.log("No data available");
			}
		  }).catch((error) => {
			console.error(error);
		  });
		}
		getCoords();
	  },[]);

	  useEffect(()=>{
		const getCoords = async () => {
		  get(child(dbRef, `Battle/Coordinates/Maldo`)).then((snapshot) => {
			if (snapshot.exists()) {
				setMaldo(snapshot.val());
			} else {
			  console.log("No data available");
			}
		  }).catch((error) => {
			console.error(error);
		  });
		}
		getCoords();
	  },[]);

	  useEffect(()=>{
		const getCoords = async () => {
		  get(child(dbRef, `Battle/Coordinates/President`)).then((snapshot) => {
			if (snapshot.exists()) {
				setPresident(snapshot.val());
			} else {
			  console.log("No data available");
			}
		  }).catch((error) => {
			console.error(error);
		  });
		}
		getCoords();
	  },[]);

  return (<>
	<Link to='/waldo' id='homeButton'><img src={him} alt='' height='auto' width='50px'/></Link>
    <Routes>
      <Route path='/waldo' element={<Page/>} />  
      <Route path='/battle' element={<Battle waldo={waldo} maldo={maldo} president={president} />} />
	  <Route path='/battle/solution' element={<BattleSolution />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
	</>
  )
}

export default App