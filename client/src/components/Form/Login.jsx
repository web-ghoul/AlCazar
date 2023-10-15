import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTetField";
import React from "react";
import Or from "./Or/Or";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import SocialMediaAuth from "./SocialMediaAuth/SocialMediaAuth";

const Login = ({ formik }) => {
  return (
    <>
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
      <Box className={`grid jcs aic g10`}>
        <Link href={`${process.env.NEXT_PUBLIC_FORGOT_PASSWORD_PAGE}`}>
          <Typography
            variant="h6"
            className={`tae`}
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: "underline",
            }}
          >
            Forgot your password ?
          </Typography>
        </Link>
        <PrimaryButton
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Login
        </PrimaryButton>
        <Link href={`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`}>
          <Typography
            variant="h6"
            className={`tas`}
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: "underline",
            }}
          >
            Create an Account ?
          </Typography>
        </Link>
      </Box>
      <Box className={`grid jcs aic g10`}>
        <Or />
        <Typography
          variant="h6"
          className={`tac`}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          Log in with
        </Typography>
      </Box>
      <SocialMediaAuth />
    </>
  );
};

export default Login;
