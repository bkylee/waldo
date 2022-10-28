import React, { createContext } from 'react'

const HMcontext = createContext();

const HitMissProvider = ({children}) => {
    const [miss, setMiss] = useState(false);
    const [hit, setHit] = useState(false);
  return (
    <HMcontext.Provider value={{miss, hit, setMiss, setHit}}>
        {children}
    </HMcontext.Provider>
  )
}

const withHM = Child => props =>(
    <HitMissProvider.Consumer>
        {(context)=> <Child {...props} {...context} />}
    </HitMissProvider.Consumer>
)

export default {HitMissProvider, withHM};