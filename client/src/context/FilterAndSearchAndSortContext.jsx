import React, { createContext, useState } from 'react'

export const FilterAndSearchAndSortContext = createContext()

const FilterAndSearchAndSortProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [dimension, setDimension] = useState("")
    const [category, setCategory] = useState("")
    return (
        <FilterAndSearchAndSortContext.Provider value={{ search, sort, dimension, category, setSearch, setSort, setDimension, setCategory }}>
            {children}
        </FilterAndSearchAndSortContext.Provider>
    )
}

export default FilterAndSearchAndSortProvider
