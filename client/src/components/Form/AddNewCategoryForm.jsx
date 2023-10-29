import React, { useEffect, useState } from "react";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { Box, InputAdornment } from "@mui/material";
import { TitleRounded } from "@mui/icons-material";
import FileUpload from "../FileUpload/FileUpload";
const AddNewCategoryForm = ({ loading, formik }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (images.length === 1) {
      formik.values.image = images;
    }
  }, [images]);
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
        type="text"
        name="title"
        placeholder="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <FileUpload setImages={setImages} maxImages={1} />
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

export default AddNewCategoryForm;
