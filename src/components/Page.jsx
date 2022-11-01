import React from 'react'
import { Link } from 'react-router-dom'
const Page = () => {
  return (
  <>
  <h1>Where's Waldo?</h1>
  <nav>
    <Link to='/battle'>Battle</Link>
  </nav>
  </>
  )
}

export default Page