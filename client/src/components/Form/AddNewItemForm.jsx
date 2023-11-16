import React, { useContext, useEffect, useState } from "react";
import LoadButton from "../LoadButton/LoadButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { Box, InputAdornment, Paper, Typography } from "@mui/material";
import {
  AddRounded,
  BedRounded,
  CategoryRounded,
  CloseRounded,
  CountertopsRounded,
  EditRounded,
  HeightRounded,
  LocalOfferRounded,
  StraightenRounded,
  TitleRounded,
  WidthFullRounded,
} from "@mui/icons-material";
import FileUpload from "../FileUpload/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";
import { DeleteIconButton } from "@/MUIComponents/DeleteIconButton";
import { PrimaryIconButton } from "@/MUIComponents/PrimaryIconButton";
import { ItemContext } from "@/context/ItemContext";

const AddNewItemForm = ({ loading, formik }) => {
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const [width, setWidth] = useState("")
  const [length, setLength] = useState("")
  const [height, setHeight] = useState("")
  const [updateDimension, setUpdateDimension] = useState(false)
  const [updateDimensionIndex, setUpdateDimensionIndex] = useState(-1)
  const { categories } = useSelector((state) => state.categories);
  const { dimensions, setDimensions } = useContext(ItemContext)
  const handleSetNewDimension = () => {
    if (width && length && height) {
      setDimensions([...dimensions, { width, length, height }])
      setWidth("")
      setLength("")
      setHeight("")
    }
  }
  const handleEditDimension = (number) => {
    if (number - 1 <= dimensions.length) {
      setWidth(dimensions[number - 1].width)
      setLength(dimensions[number - 1].length)
      setHeight(dimensions[number - 1].height)
      setUpdateDimension(true)
      setUpdateDimensionIndex(number - 1)
    }
  }
  const handleUpdateDimension = () => {
    if (width && length && height) {
      let newDimensions = dimensions
      if (updateDimensionIndex <= dimensions.length) {
        newDimensions[updateDimensionIndex].width = width
        newDimensions[updateDimensionIndex].length = length
        newDimensions[updateDimensionIndex].height = height
      }
      setDimensions(newDimensions)
      setWidth("")
      setLength("")
      setHeight("")
      setUpdateDimension(false)
    }
  }
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
      <Box className={`grid jcs aic g10`}>
        <Box className={`grid jcs aic g10`}>
          <Box className={`flex jcfs aic g10`}>
            <BedRounded />
            <Typography variant="h5" >Dimensions({dimensions.length}) :</Typography>
          </Box>
          <Box className={`flex jcsb aic g10`}>
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
              name="width"
              placeholder="Width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
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
              name="length"
              placeholder="Length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
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
              name="height"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Box>
          {
            updateDimension ?
              (<PrimaryIconButton disabled={!(width && length && height)} onClick={handleUpdateDimension} sx={{ width: "max-content" }} className={`flex jcc aic g10`}>
                <EditRounded />
                <Typography variant="h6" >Update</Typography></PrimaryIconButton>) :
              (
                <PrimaryIconButton disabled={!(width && length && height)} onClick={handleSetNewDimension} sx={{ width: "max-content" }} className={`flex jcc aic g10`}>
                  <AddRounded />
                  <Typography variant="h6" >Set</Typography>
                </PrimaryIconButton>
              )
          }
        </Box>
        <Box className={`grid jcs aic g30`}>
          {
            dimensions.map((dimension, i) => (
              <Dimension handleEditDimension={handleEditDimension} key={i} dimension={dimension} number={i + 1} />
            ))
          }
        </Box>
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

const Dimension = ({ handleEditDimension, number, dimension }) => {
  const { dimensions, setDimensions } = useContext(ItemContext)
  const handleRemoveDimension = () => {
    const newDimensions = dimensions.filter((e, i) => i + 1 !== number)
    setDimensions(newDimensions)
  }
  return (
    <Paper className={`grid jcs aic g10 pad10 dimension`}>
      <Box className={`flex jcsb aic g10`}>
        <Typography variant="h6">#{number}</Typography>
        <Box className={`flex jcfe aic g10`}>
          <PrimaryIconButton onClick={() => handleEditDimension(number)} sx={{ width: "min-content" }}>
            <EditRounded />
          </PrimaryIconButton>
          <DeleteIconButton onClick={handleRemoveDimension} sx={{ width: "min-content" }}>
            <CloseRounded />
          </DeleteIconButton>
        </Box>
      </Box>
      <Box className={`flex jcsb flex_wrap aic g10`}>
        <Box className={`flex jcc aic g10`}>
          <Typography variant="h6" sx={{ color: (theme) => theme.palette.primary.main }} >Width : </Typography>
          <Typography variant="h6" >{dimension.width}</Typography>
        </Box>
        <Box className={`flex jcc aic g10`}>
          <Typography variant="h6" sx={{ color: (theme) => theme.palette.primary.main }} >Length : </Typography>
          <Typography variant="h6" >{dimension.length}</Typography>
        </Box>
        <Box className={`flex jcc aic g10`}>
          <Typography variant="h6" sx={{ color: (theme) => theme.palette.primary.main }} >Height : </Typography>
          <Typography variant="h6" >{dimension.height}</Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default AddNewItemForm;
