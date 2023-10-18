import { Box } from "@mui/material";
import React from "react";
import Title from "../Title/Title";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";

const FilterItems = (categories, prices) => {
  return (
    <Box className={`flex jcs aic g30`}>
      <Title title={"Filter By"} fw={600} h="h6" line={false} />
      <Box className={`flex jcs aic g20`}>
        <PrimaryTextField
          id="category"
          select
          fullWidth
          defaultValue="Category"
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {/* <option key="" value="">
            Category
          </option>
          <option key="{option.value}" value="{option.value}">
            Beds
          </option>
          <option key="{option.value}" value="{option.value}">
            Sofas
          </option> */}
        </PrimaryTextField>
        <PrimaryTextField
          id="Price"
          select
          fullWidth
          defaultValue="Price"
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {/* <option key="{option.value}" value="{option.value}">
            price
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
    </Box>
  );
};

export default FilterItems;
