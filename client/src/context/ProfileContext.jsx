import React, { createContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
    const [option, setOption] = useState(0)
    return (
        <ProfileContext.Provider value={{ option, setOption }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
