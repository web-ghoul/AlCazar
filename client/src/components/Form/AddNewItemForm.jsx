import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import React from "react";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { Box, InputAdornment } from "@mui/material";
import {
    CountertopsRounded,
  DescriptionRounded,
  HeightRounded,
  LocalOfferRounded,
  StraightenRounded,
  TitleRounded,
  WidthFullRounded,
} from "@mui/icons-material";

const AddNewItemForm = ({ loading, formik }) => {
  return (
    <>
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TitleRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="title"
        name="title"
        placeholder="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        type={"text"}
        variant="standard"
        fullWidth
        id="description"
        name="description"
        placeholder="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalOfferRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        type={"number"}
        variant="standard"
        fullWidth
        id="price"
        name="price"
        placeholder="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CountertopsRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        type={"text"}
        variant="standard"
        fullWidth
        id="count"
        name="count"
        placeholder="Count"
        value={formik.values.count}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.count && Boolean(formik.errors.count)}
        helperText={formik.touched.count && formik.errors.count}
      />
      <Box className={`flex jcsb aifs g20`}>
        <PrimaryTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WidthFullRounded
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </InputAdornment>
            ),
          }}
          type={"number"}
          variant="standard"
          fullWidth
          id="width"
          name="width"
          placeholder="Width"
          value={formik.values.width}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.width && Boolean(formik.errors.width)}
          helperText={formik.touched.width && formik.errors.width}
        />
        <PrimaryTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StraightenRounded
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </InputAdornment>
            ),
          }}
          type={"number"}
          variant="standard"
          fullWidth
          id="length"
          name="length"
          placeholder="Length"
          value={formik.values.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.length && Boolean(formik.errors.length)}
          helperText={formik.touched.length && formik.errors.length}
        />
        <PrimaryTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HeightRounded
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </InputAdornment>
            ),
          }}
          type={"number"}
          variant="standard"
          fullWidth
          id="height"
          name="height"
          placeholder="Height"
          value={formik.values.height}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.height && Boolean(formik.errors.height)}
          helperText={formik.touched.height && formik.errors.height}
        />
      </Box>
      <Box className={`grid jcs aic g10`}>
        <LoadButton loading={loading}>
          <PrimaryButton fullWidth type="submit">
            Add
          </PrimaryButton>
        </LoadButton>
      </Box>
    </>
  );
};

export default AddNewItemForm;
