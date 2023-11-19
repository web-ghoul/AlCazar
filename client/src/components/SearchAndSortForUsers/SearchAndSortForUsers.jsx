"use client"
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { SearchRounded } from '@mui/icons-material'
import { Box, InputAdornment } from '@mui/material'
import React, { useContext } from 'react'
import styles from "./SearchAndSortForUsers.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '@/store/usersSlice'
import { SearchAndSortForUsersContext } from '@/context/SearchAndSortForUsersContext'

const SearchAndSortForUsers = () => {
    const { search, sort, setSearch, setSort } = useContext(SearchAndSortForUsersContext)
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(getUsers({ sort, search: e.target.value, token }))
    }
    const handleSort = (e) => {
        setSort(e.target.value)
        dispatch(getUsers({ search, sort: e.target.value, token }))
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
                placeholder="Search for First Name ... Last Name"
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
                <option value={"firstName"}>
                    first Name
                </option>
                <option value={"lastName"}>
                    last Name
                </option>
                <option value={"email"}>
                    email
                </option>
                <option value={"date"}>
                    date
                </option>
            </PrimaryTextField>
        </Box>
    )
}

export default SearchAndSortForUsers
