import React from "react";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { SearchRounded } from "@mui/icons-material";
import { Box, InputAdornment } from "@mui/material";
import styles from "./SearchAndSort.module.scss";

const SearchAndSort = () => {
  return (
    <Box className={`grid jcsb aife flex_wrap g30 ${styles.search_and_sort}`}>
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded className={`${styles.search_icon}`} />
            </InputAdornment>
          ),
        }}
        placeholder="Search for Item..."
        type="search"
        variant="standard"
        fullWidth
        id="password"
        name="password"
      />
      <PrimaryTextField
        id="sort"
        select
        fullWidth
        defaultValue="Price"
        SelectProps={{
          native: true,
        }}
        variant="standard"
      >
        {/* <option key="{option.value}" value="{option.value}">
          Sort By
        </option>
        <option key="{option.value}" value="{option.value}">
          0 - 1000
        </option>
        <option key="{option.value}" value="{option.value}">
          1000 - 2000
        </option>
        <option key="{option.value}" value="{option.value}">
          2000 - 10000
        </option> */}
      </PrimaryTextField>
    </Box>
  );
};

export default SearchAndSort;
