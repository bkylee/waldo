import React from 'react'
import { Link } from 'react-router-dom'
import battle from '../images/battle/battle.png'
const Page = () => {
  return (
  <>
  <h1 id='Title'>Where's Waldo?</h1>
  <nav>
    <h2 id='select'>Select an image to look for Waldo!</h2>
    <Link to='/battle' className='selector'><img src={battle} height='auto' width='300px'/>Battle</Link>
  </nav>
  </>
  )
}

export default Page