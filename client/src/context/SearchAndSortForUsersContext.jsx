import React, { createContext, useState } from 'react'

export const SearchAndSortForUsersContext = createContext()

const SearchAndSortForUsersProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    return (
        <SearchAndSortForUsersContext.Provider value={{ search, setSearch, sort, setSort }}>
            {children}

        </SearchAndSortForUsersContext.Provider>
    )
}
export default SearchAndSortForUsersProvider
