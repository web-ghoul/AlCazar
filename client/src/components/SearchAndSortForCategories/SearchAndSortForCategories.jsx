"use client"
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { SearchRounded } from '@mui/icons-material'
import { Box, InputAdornment } from '@mui/material'
import React, { useContext } from 'react'
import styles from "./SearchAndSortForCategories.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { SearchAndSortForCategoriesContext } from '@/context/SearchAndSortForCategoriesContext'
import { getCategories } from '@/store/categoriesSlice'

const SearchAndSortForCategories = () => {
    const { search, sort, setSearch, setSort } = useContext(SearchAndSortForCategoriesContext)
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(getCategories({ sort, search: e.target.value, token }))
    }
    const handleSort = (e) => {
        setSort(e.target.value)
        dispatch(getCategories({ search, sort: e.target.value, token }))
    }
    return (
        <Box className={`grid jcsb aic g30 ${styles.search_and_sort}`}>
            <PrimaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRounded sx={{ color: (theme) => theme.palette.primary.main }} />
                        </InputAdornment>
                    ),
                }}
                placeholder="Search for Category Title"
                type="search"
                variant="standard"
                fullWidth
                id="search"
                value={search}
                name="search"
                onInput={handleSearch}
            />
            <PrimaryTextField
                id="sort"
                name="sort"
                select
                fullWidth
                SelectProps={{
                    native: true,
                }}
                variant="standard"
                onChange={handleSort}
            >
                <option value={""}>
                    Sort By
                </option>
                <option value={"title"}>
                    title
                </option>
                <option value={"date"}>
                    date
                </option>
            </PrimaryTextField>
        </Box>
    )
}

export default SearchAndSortForCategories
