"use client"
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { SearchRounded } from '@mui/icons-material'
import { Box, InputAdornment, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styles from "./FilterAndSearchAndSort.module.scss"
import Title from '../Title/Title'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '@/store/itemsSlice'
import { FilterAndSearchAndSortContext } from '@/context/FilterAndSearchAndSortContext'

const FilterAndSearchAndSort = () => {
    const { search, sort, dimension, category, setSearch, setSort, setDimension, setCategory } = useContext(FilterAndSearchAndSortContext)
    const { categories } = useSelector((state) => state.categories)
    const { dimensions } = useSelector((state) => state.dimensions)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(getItems({ sort, category, dimension, search: e.target.value }))
    }
    const handleSort = (e) => {
        setSort(e.target.value)
        dispatch(getItems({ search, category, dimension, sort: e.target.value }))
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
        dispatch(getItems({ search, category: e.target.value, dimension, sort }))
    }
    const handleDimension = (e) => {
        setDimension(e.target.value)
        dispatch(getItems({ search, dimension: e.target.value, category, sort }))
    }
    return (
        <Box className={`grid jcs aic g20 ${styles.filter_and_search_and_sort}`}>
            <Box className={`grid jcsb aic g30 ${styles.search_and_sort}`}>
                <PrimaryTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRounded sx={{ color: (theme) => theme.palette.primary.main }} />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search for Item..."
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
                        Title
                    </option>
                    <option value={"category"}>
                        Category
                    </option>
                    <option value={"price"}>
                        Price
                    </option>
                    <option value={"date"}>
                        date
                    </option>
                </PrimaryTextField>
            </Box>
            <Box className={`flex jcs aic g30`}>
                <Title title={"Filter By"} fw={600} h="h5" line={false} />
                <Box className={`flex jcs aic g20`}>
                    <PrimaryTextField
                        id="category"
                        name="category"
                        select
                        fullWidth
                        SelectProps={{
                            native: true,
                        }}
                        variant="standard"
                        value={category}
                        onChange={handleCategory}
                    >
                        <option key={-1} value={""}>
                            Category
                        </option>
                        {categories &&
                            categories.map((category, i) => (
                                <option key={i} value={category.title}>
                                    {category.title}
                                </option>
                            ))}
                    </PrimaryTextField>
                    <PrimaryTextField
                        id="dimensions"
                        name="dimensions"
                        select
                        fullWidth
                        SelectProps={{
                            native: true,
                        }}
                        variant="standard"
                        onChange={handleDimension}
                    >
                        <option key={-1} value={""}>
                            Dimensions
                        </option>
                        {dimensions.map((dimension, i) =>
                        (
                            <option key={i} value={dimension}>
                                <Typography variant='h5'>L{dimension.length} x W{dimension.width} x H{dimension.height}</Typography>
                            </option>
                        )
                        )}
                    </PrimaryTextField>
                </Box>
            </Box>
        </Box>
    )
}

export default FilterAndSearchAndSort
