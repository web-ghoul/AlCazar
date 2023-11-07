import React, { useContext, useEffect, useState } from "react";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { Box, InputAdornment } from "@mui/material";
import {
  BadgeRounded,
  EmailRounded,
  SmartphoneRounded,
} from "@mui/icons-material";
import LoadButton from "../LoadButton/LoadButton";
import ImageChange from "../ImageChange/ImageChange";
import Title from "../Title/Title";
import { DashboardContext } from "@/context/DashboardContext";

const EditUserForm = ({ loading, formik }) => {
  const { editableUserData } = useContext(DashboardContext)
  const [image, setImage] = useState(editableUserData && editableUserData.avatar)
  useEffect(() => {
    formik.values.avatar = [image]
  }, [image])
  return (
    <>
      <Box className={`grid jcs aic`}>
        <Title title={"Change Avatar"} align={"left"} fw={500} h={"h6"} />
        <ImageChange setImage={setImage} image={image} />
      </Box>
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BadgeRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="firstName"
        name="firstName"
        placeholder="First Name"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BadgeRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SmartphoneRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="phone"
        name="phone"
        placeholder="Phone"
        type="text"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Box className={`grid jcs aic g10`}>
        <LoadButton loading={loading}>
          <PrimaryButton
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Edit
          </PrimaryButton>
        </LoadButton>
      </Box>
    </>
  );
}

export default EditUserForm
