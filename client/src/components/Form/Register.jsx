import React from "react";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTetField";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import Or from "./Or/Or";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import SocialMediaAuth from "./SocialMediaAuth/SocialMediaAuth";

const Register = ({ formik }) => {
  return (
    <>
      <PrimaryTextField
        fullWidth
        id="first_name"
        name="first_name"
        label="First Name"
        type="text"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        helperText={formik.touched.first_name && formik.errors.first_name}
      />
      <PrimaryTextField
        fullWidth
        id="last_name"
        name="last_name"
        label="Last Name"
        type="text"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
        helperText={formik.touched.last_name && formik.errors.last_name}
      />
      <PrimaryTextField
        fullWidth
        id="phone"
        name="phone"
        label="Phone"
        type="text"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <PrimaryTextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <PrimaryTextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <PrimaryTextField
        fullWidth
        id="confirm_password"
        name="confirm_password"
        label="Confirm Password"
        type="password"
        value={formik.values.confirm_password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirm_password &&
          Boolean(formik.errors.confirm_password)
        }
        helperText={
          formik.touched.confirm_password && formik.errors.confirm_password
        }
      />
      <Box className={`grid jcs aic g10`}>
        <PrimaryButton
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Register
        </PrimaryButton>
        <Link href={`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`}>
          <Typography
            variant="h6"
            className={`tas`}
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: "underline",
            }}
          >
            Have an Account ?
          </Typography>
        </Link>
      </Box>
      <Box>
        <Or />
        <Typography
          variant="h6"
          className={`tac`}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          Register with
        </Typography>
      </Box>
      <SocialMediaAuth />
    </>
  );
};

export default Register;
