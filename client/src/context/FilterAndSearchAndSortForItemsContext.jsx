import React, { createContext, useState } from 'react'

export const FilterAndSearchAndSortForItemsContext = createContext()

const FilterAndSearchAndSortForItemsProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [dimension, setDimension] = useState("")
    const [category, setCategory] = useState("")
    return (
        <FilterAndSearchAndSortForItemsContext.Provider value={{ search, sort, dimension, category, setSearch, setSort, setDimension, setCategory }}>
            {children}
        </FilterAndSearchAndSortForItemsContext.Provider>
    )
}

export default FilterAndSearchAndSortForItemsProvider
