import React, { createContext } from 'react'

export const DashboardContext = createContext()

const DashboardProvider = ({children}) => {
    
  return (
    <DashboardContext.Provider value={{}}>
        {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
