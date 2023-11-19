import React, { useEffect, useState } from "react";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { Box, InputAdornment } from "@mui/material";
import {
  CategoryRounded,
  CountertopsRounded,
  LocalOfferRounded,
  TitleRounded,
} from "@mui/icons-material";
import FileUpload from "../FileUpload/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";
import HandleDimensions from "./HandleDimensions/HandleDimensions"

const EditItemForm = ({ loading, formik }) => {
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    formik.values.images = images;
  }, [images]);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
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
        type={"number"}
        variant="standard"
        fullWidth
        id="quantity"
        name="quantity"
        placeholder="Quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.quantity && Boolean(formik.errors.quantity)}
        helperText={formik.touched.quantity && formik.errors.quantity}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CategoryRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        id="category"
        name="category"
        select
        fullWidth
        SelectProps={{
          native: true,
        }}
        label="Select Category"
        variant="standard"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.category && Boolean(formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
      >
        {categories &&
          categories.map((category, i) => (
            <option key={i} value={category.title}>
              {category.title}
            </option>
          ))}
      </PrimaryTextField>

      <FileUpload maxImages={10} setImages={setImages} />
      <HandleDimensions />
      <Box className={`grid jcs aic g10`}>
        <LoadButton loading={loading}>
          <PrimaryButton fullWidth type="submit">
            Edit
          </PrimaryButton>
        </LoadButton>
      </Box>
    </>
  );
}

export default EditItemForm
