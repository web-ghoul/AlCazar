import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { TitleRounded } from '@mui/icons-material'
import { Box, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LoadButton from '../LoadButton/LoadButton'
import { PrimaryButton } from '@/MUIComponents/PrimaryButton'
import FileUpload from '../FileUpload/FileUpload'

const EditCategoryForm = ({ loading, formik }) => {
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
      <FileUpload setImages={setImages} maxImages={1} formik={formik} />
      <Box className={`grid jcs aic g10`}>
        <LoadButton loading={loading}>
          <PrimaryButton fullWidth type="submit">
            Edit
          </PrimaryButton>
        </LoadButton>
      </Box>
    </>
  )
}

export default EditCategoryForm
