import React, { createContext, useState } from 'react'

export const SearchAndSortForCategoriesContext = createContext()

const SearchAndSortForCategoriesProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    return (
        <SearchAndSortForCategoriesContext.Provider value={{ search, setSearch, sort, setSort }}>
            {children}

        </SearchAndSortForCategoriesContext.Provider>
    )
}
export default SearchAndSortForCategoriesProvider
