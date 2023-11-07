import React, { useEffect, useState } from "react";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { Box, InputAdornment } from "@mui/material";
import {
  CategoryRounded,
  CountertopsRounded,
  HeightRounded,
  LocalOfferRounded,
  StraightenRounded,
  TitleRounded,
  WidthFullRounded,
} from "@mui/icons-material";
import FileUpload from "../FileUpload/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";

const AddNewItemForm = ({ loading, formik }) => {
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
        id="count"
        name="count"
        placeholder="Count"
        value={formik.values.count}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.count && Boolean(formik.errors.count)}
        helperText={formik.touched.count && formik.errors.count}
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
        variant="standard"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.category && Boolean(formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
      >
        <option key={-1} value={""}>
          Choose Category
        </option>
        {categories &&
          categories.map((category, i) => (
            <option key={i} value={category.title}>
              {category.title}
            </option>
          ))}
      </PrimaryTextField>

      <FileUpload maxImages={10} setImages={setImages} />
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
