import React from 'react'
import { Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Routes>
      <Route path='/waldo' element={<Welcome />} />
    </Routes>
  )
}

export default App